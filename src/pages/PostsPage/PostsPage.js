import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {allService} from "../../services";

const PostsPage = () => {
    const {postId} = useParams();
    const [post,setPost] = useState({});
  useEffect(()=>{
      allService.getPostsById(postId).then(({data})=>{
          setPost({...data})
      })
  },[postId])
    return (
        <div>
            <h2>POST</h2>
            {post &&
                <div>
                <div>id:{post.id}</div>
                <div>title:{post.title}</div>
                <div>body:{post.body}</div>
            </div>
            }
        </div>
    );
};

export {PostsPage};