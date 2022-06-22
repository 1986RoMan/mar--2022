import React, {useEffect, useState} from 'react';
import {getUsers} from "../service/axios.service";

const Users = () => {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        getUsers().then(value => {
            console.log(value.data)
        })
    },[])
    return (
        <div>
        </div>
    );
};

export default Users;