import React from 'react';

const Karta = ({karta}) => {
    const { id,name,status,species,gender,image}=karta
    return (
        <div>
            <h2>{id}</h2>
            <h2>{name}</h2>
            <h2>{status}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <img src={image}/>
        </div>
    );
};

export default Karta;