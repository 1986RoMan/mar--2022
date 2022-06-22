import React, {useEffect, useState} from 'react';
import {Space} from "../Space/Space";

const SpiceX = () => {
    const [space,setSpice] = useState([]);

useEffect(()=>{
    fetch('https://api.spacexdata.com/v3/launches/')
        .then(value => value.json())
        .then(value => {
            setSpice(value.filter(value=>value.launch_year!=='2020'))
        })
},[])
    return (
        <div>
            {space.map(spac=><Space key={spac.id} spac={spac}/>)}
        </div>
    );
};

export {SpiceX};