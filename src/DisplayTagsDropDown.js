import React from 'react'
import './App.css'
import Person from './Person.js'
import PersonList from './App';

class Tags2 extends React.Component {


    
render() {
    const { tagsList } = this.props
    const { currentPage } = this.props
console.log("TAGS",tagsList)
    return (
        <div className="container">{tagsList.slice(currentPage, currentPage + 9).map(item => {
            var tagdata = {
                name: item.name,
                recognitionMessage: item.recognitionMessage
            };
            return <Person info={tagdata}/>
        })}
        </div>
    );
}
}
export default Tags2