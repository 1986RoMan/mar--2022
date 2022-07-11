import React, {Component} from 'react';

import {Comment} from "../Comment/Comment";


class Comments extends Component {
    state={comments:[]}
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((response) => response.json())
            .then((json) => this.setState({comments:json}))
    }
    render() {
        return (
            <div>
                {this.state.comments.map(value=><Comment key={value.id} value={value}></Comment>)}
            </div>
        );
    }
}

export {Comments};