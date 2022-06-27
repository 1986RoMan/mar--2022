import React, {useEffect, useState} from 'react';
import {usersService} from "../../services";
import {User} from "../User/User";



const Users = ({userPostsById,posts}) => {

const [users,setUsers] = useState([]);
useEffect(()=>{
usersService.getUsers().then(value => {
    setUsers(value.data)})
},[])

    return (
        <div>
            {posts.map(post=><div>
                {post.title}
            </div>)}
            {users.map(user=><User user={user} userPostsById={userPostsById}/>)}

        </div>
    );
};

export {Users};