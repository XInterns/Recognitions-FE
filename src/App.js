import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import SearchBar from './SearchBar.js'
import List from './List.js'
import LoadingHOC from './LoadingHOC.js'




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      store:[],
      a: []
    };
  }
  componentDidMount(){
  

    axios.get('https://xi-apps.in/app/api/recognitions?token=tFcEtB5kxsN1gaS207MOHKs5')
    .then(json => json.data.map(result => (
      {
        recognitionMessage: `${result.recognitionMessage}`,
        id: result.id
        })))
    .then(newData => this.setState({data: newData, store: newData}))
    .catch(error => alert(error))

    this.state.store.forEach((item)=>{
      return this.filterMessage(item)
    })
    //this.state.store.filter(item => item.recognitionMessage.toLowerCase().includes(e.target.value.toLowerCase()))
    
    
    }

    filterMessage(e)
    {
     this.setState({data: this.state.store.filter(item => item.recognitionMessage.toLowerCase().includes(e.target.value.toLowerCase()))})
      console.log(this.state.data)
      
    }  
    
  render() {
  const {data} = this.state
    return (

      <div className="Card">
      <div className="header">RECOGNITION MESSAGE</div>
      <SearchBar searchFunc={(e) => this.filterMessage(e)}/>
      <List rm={data} />
        
      
    </div>


        
      
    );
  }
}

export default App;
