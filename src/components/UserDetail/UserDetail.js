import React from 'react';

const UserDetail = ({userDetail}) => {
    const{id,name,username,email}= userDetail
    return (
        <div>
            <div>id:{id}</div>
                <div>name:{name}</div>
                    <div>username:{username}</div>
                        <div>email:{email}</div>
        </div>
    );
};

export {UserDetail}