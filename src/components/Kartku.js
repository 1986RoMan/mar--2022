import React, {useEffect, useState} from 'react';

import Karta from "./Karta";

const Kartku = () => {
    const [kartku,setKartku] = useState([]);
    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character')
            .then(value => value.json())
            .then(value => {
                console.log(value.results)
                setKartku(value.results)
            })
    },[])
    return (
        <div>
            {kartku.map(karta=><Karta key={karta.id} karta={karta}/>)}
        </div>
    );
};

export default Kartku;