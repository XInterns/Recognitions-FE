import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import sortJsonArray from 'sort-json-array';
import Tags from './Components/Tags';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['unit testing', 
      'visual studio', 
      'ios', 
      'android',
      'xke', 
      'sprint', 
      'xebialabs',
      'thedevtheory',
      'handbook',
      'cert',
      'barclays',
      'automation',
      'appdynamics',
      'people first', 
      'dof',
      'hackathon',  
      'mongodb',
      'xi-apps', 
      'apache', 
      'vat',
      'atlanta', 
      'mckinsey',
      'mdl cloud',
      'devops',
      'scala',
      'data encryption',
      'julia',
      'pydata',
      'big data',
      'hadoop',
      'agile',
      'hiring',
      'sdlc',
      'beachbody',
      'tt tournament',
      'gtl',
      'tomcat',
      'express',
      'it security',
      'data migration',
      'react',
      'storm'
      ],
      store: [],
      sortedArr: [],
      };
  }

  fetchData(){
    axios.get('https://xi-apps.in/app/api/recognitions?token=tFcEtB5kxsN1gaS207MOHKs5')
      .then(response=>{
        
        var data1 = response.data;
        this.setState({
          store:data1
        });
       return this.compare(this.state.data, this.state.store);
      })
      .catch(error => alert(error));
  }
  componentDidMount() {
    this.fetchData()    
  }

  compare(a,b) {
        
    var z=[];
    var ss=[];
    var ch=[]
    var string='';
    var count = 0;
    a.forEach(e1 => {
      var string1 = e1.toLowerCase();
      b.forEach(e2 => {
         string = e2.recognitionMessage.toLowerCase();
       
        if(string.includes(string1))
        {
          count=count+1;
          ss.push(string.toLowerCase());
        }        
      });      
      z.push({keyword: string1, value: count, msg:ss});
      count=0;
      ch.push(ss)
      ss=[];
    } 
  );
  sortJsonArray(z,'value','des');  
  this.setState({    
    sortedArr:z
  })
  }
   
  render() {
    return (
      <div className="App">
        <Tags sortedArr={this.state.sortedArr}/>
      </div>
    );
  }
}
export default App;