import React, {Component} from 'react';

class Post extends Component {
    constructor(props) {
        super(props);
        this.post=this.props.value
    }
    render() {
        return (
            <div>
                {this.post.title}
            </div>
        );
    }
}

export {Post};