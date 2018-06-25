import React, {Component} from 'react'
import logo from './logo.svg';

 
const LoadingHOC = (WrappedState) =>{
  return(
    class LoadingHOC extends Component{
      render(){
        return this.props.rm.length === 0 ? <img className="isLoading" src={logo}/> : <WrappedState {...this.props}/>
      }
    }
  )
}
 
export default LoadingHOC