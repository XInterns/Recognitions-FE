import React, { Component } from 'react';
import TagItem from './TagItem';
import PersonList from './App';

class Tags extends Component{


render()
{
        return(
           <div className="Tags">
                <TagItem sortedArr={this.props.sortedArr} changeF={this.props.changeF}  currentPage={this.props.currentPage} />
                
           </div> 
        );

    }
}
export default Tags;