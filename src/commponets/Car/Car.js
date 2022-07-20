import React from 'react';
import {useDispatch} from "react-redux";
import {carActions} from "../../redux";

const Car = ({car}) => {
    const {id,model,price,year} = car;
    const dispatch = useDispatch();

    const deleted =async () => {
     await dispatch(carActions.deletCar({id}))
        console.log(id)
    }
    return (
        <div>
                 <div>model:{model}</div>
                 <div>price:{price}</div>
                 <div>year:{year}</div>
             <button onClick={deleted}>DELETE CAR</button>
            <hr/>
        </div>
    );
};

export {Car};