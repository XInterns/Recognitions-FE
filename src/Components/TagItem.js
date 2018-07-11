import React, { Component } from 'react';
import '../App.css';

class TagItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: []
        }
    }
    
    hasBeenClicked(a) {
                
        const { sortedArr } = this.props
         sortedArr.map(tag => {
            if(tag.keyword==a){
                console.log(tag.msg)
            };
        })
    }

    render() {

        const { sortedArr } = this.props
        let tagsOptions;
        tagsOptions = sortedArr.map(tag => {
            return <td key={tag.keyword}>
                <a onClick={(e) => this.hasBeenClicked(tag.keyword)}>
                    {tag.keyword}
                </a>
            </td>
        })
        return (
            <div className="TagItem">
                <table>
                    <tbody>
                        <tr>
                            {tagsOptions}
                        </tr>
                    </tbody>
                </table>
            </div>
        );
        }
}
export default TagItem;