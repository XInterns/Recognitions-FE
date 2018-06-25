import React, {Component} from 'react'
import LoadingHOC from './LoadingHOC'
import './App.css'

 
const List = (props) =>{
  
  const{rm} = props

  
  return(

  
    

    
    <ul >
     
      {rm.map(data => <li key={data.id}>{data.recognitionMessage}</li>)}
    </ul>
  
  )
}

export default LoadingHOC(List);