import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['visual', 'manish'],
      store: [],
      a: []
    };
  }
  componentDidMount() {
    //const result1 = null;
    axios.get('https://xi-apps.in/app/api/recognitions?token=tFcEtB5kxsN1gaS207MOHKs5')
      .then(json => json.data.map(result => (
        {
          recognitionMessage: `${result.recognitionMessage}`,
          id: result.id
        })))
      .then(newData =>
        this.setState({ store: newData }))
      .catch(error => alert(error))
    this.compare(this.state.data, this.state.store)
  }

  compare(data, store) {
    // const arr = [];
    var count = 0;
    data.forEach((e1) => {
      if (store.forEach((e2) => {
        (e2.toLowerCase()).includes(e1.toLowerCase())
        count++;
      }
      ))
        console.log(count);
    })
    console.log(this.state.store)
    // console.log(arr);      
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
export default App;
