import React from 'react';
import {useForm} from "react-hook-form";


import {userInstance} from "../../service";


const UserForm = () => {
    const {reset,handleSubmit,register,formState:{errors}} = useForm();
    const mySubmit=(user)=>{
        console.log(user);
        userInstance.createUser(user)
            .then((json) =>{ console.log(json.data)});
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(mySubmit)} >
                name:  <input{...register('name',{required:true})}/>
                {errors.name &&<span> ERROR!!! </span>}
                username:  <input{...register('username',{required:true})}/>
                email:  <input{...register('email',{required:true})}/>
                <button>send</button>
            </form>
        </div>
    );
};

export {UserForm};