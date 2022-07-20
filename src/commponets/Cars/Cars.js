import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Car} from "../Car/Car";
import {carActions} from "../../redux";

const Cars = () => {
    const {cars} = useSelector(state => state.car);
    console.log(cars)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(carActions.allCars())
    },[])

    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};