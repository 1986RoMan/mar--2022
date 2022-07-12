import React, {Component} from 'react';

import {Post} from "../Post/Post";

class Posts extends Component {
    state={posts:[]}
    constructor(props) {
        super(props);
    }
        componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => this.setState({posts:json}))

        }
    render() {
        return (
            <div>
                {this.state.posts.map(value=><Post key={value.id} value={value}></Post>)}
            </div>
        );
    }
}

export {Posts};