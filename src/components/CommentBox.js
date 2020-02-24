import React, { Component } from 'react'

export default class CommentBox extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            comment: ''
        }
    }

    onHandleChange = e =>{
        this.setState({
            comment: e.target.value
        })
    }

    onHandleSubmit = e => {
        e.preventDefault();
        this.setState({
            comment: ''
        });
    }
    render() {
        return (
            <form onSubmit = {this.onHandleSubmit}>
                <h4>Add a comment</h4>
				addBox
				aaddBox Commit

                <textarea onChange ={this.onHandleChange} value = {this.state.comment}/>

                <textarea />
                <div>
                    <button>Submit</button>
                </div>
            </form>
        )
    }
}