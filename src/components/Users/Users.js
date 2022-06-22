import React, {useEffect, useState} from 'react';
import {getUsers} from "../../service/axios.service";
import {User} from "../User/User";
import {UserDetail} from "../UserDetail/UserDetail";

const Users = () => {
    const [users,setUsers] = useState([]);
    const [userDetail,setUserDetail] = useState(null);

    useEffect(()=>{
        getUsers().then(value => {
            setUsers(value.data)
        })
    },[])
    return (

        <div>
            {users.map(user=><User key={user.id} user={user} setUserDetail={setUserDetail}/>)}
            <hr/>
            {userDetail&& <UserDetail userDetail={userDetail}/>}
        </div>
    );
};

export {Users};