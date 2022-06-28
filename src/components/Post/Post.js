import React from 'react';

const Post = ({post}) => {
    return (
        <div style={{border: '1px solid black',margin:'2px'}}>
            {post.title}
        </div>
    );
};

export default Post;