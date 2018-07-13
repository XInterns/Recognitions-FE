import React, { Component } from 'react';
import './App.css';
import FontAwesome from 'react-fontawesome'
import Tags2 from './DisplayTagsDropDown.js'

class Dropdown extends Component {
constructor(props){
    super(props)
    this.state = {
      listOpen: false,
      headerTitle: this.props.title,
      tagsList:[]
    }
  }
  handleClickOutside(){
    this.setState({
      listOpen: false
    })
  }
  
  toggleList(){
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }
  hasBeenClicked(a) {
                
    this.props.changeF();
    var arr=[];
    var  arr1=[];
     console.log(this.props.sortedArr)
     const { sortedArr } = this.props
     sortedArr.map(tag => {
         for(let i=0;i<tag.name.length;i++){
             if (tag.keyword == a) {
                 arr={
                     name:tag.name[i],
                     recognitionMessage:tag.recognitionMessage[i]
                 }
                 arr1.push(arr);
             }
             
         };
     })
     console.log('Array', arr1)
      this.setState({
                 tagsList: arr1,
                  
               })
         console.log('state', this.state.tagsList);
}
  
  render(){
    const{sortedArr} = this.props
    const{listOpen, headerTitle} = this.state
    return(
      <div>
      <div className="dropdown">
  
      <div className="dd-header" onClick={() => this.toggleList()}>
          <div className="dropbtn"><b>{headerTitle}</b></div>
          {listOpen
          ? <FontAwesome name="angle-up" size="2x"/>
          : <FontAwesome name="angle-down" size="2x"/>
        } 
      </div>
  
       {listOpen && <div class="dropdown-content">
       
  
         {sortedArr.slice(8,44).map(item => (
         <ul ><li> <a onClick={(e) => this.hasBeenClicked(item.keyword)}>
          {item.keyword}
      </a></li></ul>
          ))}
          </div>}
          </div>
          <div className="container"><Tags2 tagsList={this.state.tagsList} currentPage={this.props.currentPage}/></div>
      </div>
    )
  }
}
export default Dropdown;