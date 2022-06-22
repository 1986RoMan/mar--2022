import React, {useState} from 'react';

const User = ({user,setUserDetail}) => {
    const{id,name,username,email}=user

    return (
        <div>
            {id}-{name}
                <button onClick={() => {
                    setUserDetail(user)
                }}>UserDetail
                </button>

        </div>
    );
};

export {User};