import React from 'react'
import './App.css'
import Person from './Person.js'
import PersonList from './App';

class Tags1 extends React.Component {


    
render() {
    const { tags } = this.props
    const { currentPage } = this.props
console.log("TAGS",tags)
    return (
        <div className="container">{tags.slice(currentPage, currentPage + 9).map(item => {
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
export default Tags1		