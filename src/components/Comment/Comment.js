import React from 'react';
import {Link} from "react-router-dom";

const Comment = ({comment:{id,name,email,body,postId}}) => {
    return (
        <div>
            <Link to={postId.toString()}>
                <div>postId:{postId}</div>
                <div>id:{id}</div>
                <div>name:{name}</div>
                <div>email:{email}</div>
                <div>body:{body}</div>
            </Link>
            <hr/>
        </div>
    );
};

export {Comment};