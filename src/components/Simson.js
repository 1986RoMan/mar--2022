import React from 'react';

const Simson = ({name,picture,about}) => {
    return (
        <div>
           <h2>{name}</h2>
            <p>{about}</p>
            <img src={picture}/>
        </div>
    );
};

export default Simson;