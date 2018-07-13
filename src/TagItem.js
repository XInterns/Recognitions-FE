import React, { Component } from 'react';
import './App.css';
import Dropdown from './Dropdown.js'
import Tags1 from './DisplayTags.js'
import Initial from './InitialComp'
import Tags from './Tags.js'

class TagItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            
        }

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
                    tags: arr1,
                     
                  })
            console.log('state', this.state.tags);
           
            
        }
        


    

    render() {
        const { sortedArr } = this.props
        
        let tagsOptions;
        tagsOptions = sortedArr.slice(0, 8).map(tag => {
            return <td key={tag.keyword}>
                <a onClick={(e) => this.hasBeenClicked(tag.keyword)}>
                    {tag.keyword}
                </a>
                

            </td>;
             

        })

        return (
            <div className="TagItem">
                <table>
                    <tbody>
                        <tr><td>
                            {tagsOptions}
                        </td>
                            <tr><Dropdown changeF={this.props.changeF} currentPage={this.props.currentPage} title="See All" sortedArr={this.props.sortedArr} /></tr>


                        </tr>
                    </tbody>
                </table>
                <div>
                <Tags1 tags={this.state.tags} currentPage={this.props.currentPage}/>
                
                    </div>
            </div>

        );
    }
}
export default TagItem;