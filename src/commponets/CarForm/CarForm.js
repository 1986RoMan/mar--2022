import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {carActions} from "../../redux";

const CarForm = () => {
    const {register,reset,handleSubmit} = useForm();
    const dispatch = useDispatch();

    const submit=async (newCar)=> {
        dispatch(carActions.clearStatus(''))
          await  dispatch(carActions.createNewCar({car:newCar}))
        reset()
    }

    return (
        <div>
                   <form onSubmit={handleSubmit(submit)}>
                       <input placeholder={'model'} {...register('model')}></input>
                       <input placeholder={'price'} {...register('price')}></input>
                       <input placeholder={'year'} {...register('year')}></input>
                       <button>Create</button>
                   </form>
        </div>
    );
};

export {CarForm};