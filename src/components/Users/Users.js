import React, {useEffect, useState} from 'react';

import {usersService} from "../../services";
import {User} from "../User/User";

const Users = ({userPostsById}) => {

const [users,setUsers] = useState([]);
useEffect(()=>{
usersService.getUsers().then(value => {
    setUsers(value.data)})
},[])

    return (
        <div>
            {users.map(user=><User key={user.id} user={user} userPostsById={userPostsById}/>)}

        </div>
    );
};

export {Users};