import React, {Component} from 'react';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.comment=this.props.value
    }
    render() {
        return (
            <div>
                {this.comment.name}
            </div>
        );
    }
}

export {Comment};