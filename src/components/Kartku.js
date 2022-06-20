import React, {useEffect, useState} from 'react';

import Karta from "./Karta";

const Kartku = () => {
    const [kartku,setKartku] = useState([]);
    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character')
            .then(value => value.json())
            .then(({results}) => {
                console.log(results)
                setKartku(results.filter(value=>value.id<=6))
            })
    },[])
    return (
        <div>
            {kartku.map(karta=><Karta key={karta.id} karta={karta}/>)}
        </div>
    );
};

export default Kartku;