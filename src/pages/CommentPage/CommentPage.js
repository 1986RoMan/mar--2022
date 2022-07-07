import React, {useEffect, useState} from 'react';
import {allService} from "../../services";
import {Comment} from "../../components";
import {Outlet, useSearchParams} from "react-router-dom";

const CommentPage = () => {
    const [query,setQuery] = useSearchParams({page:1});
  const [comments,setComments] = useState([]);
  useEffect(()=>{
      allService.getComments(query.get('page')).then(({data})=>{
          setComments([...data])
      })
  },[query])
 const NextPage = () => {
     let queryObj=Object.fromEntries(query.entries());
     queryObj.page++;
     setQuery(queryObj)
 }
    const PrePage = () => {
        let queryObj=Object.fromEntries(query.entries());
        queryObj.page--;
        setQuery(queryObj)
    }

    return (
        <div>
        <Outlet/>
            <br/>
            <hr/>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
            <button onClick={()=>{NextPage()}}>Next page></button>
            <button onClick={()=>{PrePage()}}>Prev page</button>
        </div>
    );
};

export {CommentPage};