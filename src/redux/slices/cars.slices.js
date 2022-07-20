import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";

import {carServices} from "../../services";

const initialState={
    cars:[]
}
const allCars=createAsyncThunk(
    'carSlice/allCars',
    async ()=>{
        const {data} = await carServices.getAll();
        return data
    }
);
const createNewCar=createAsyncThunk(
    'carSlice/createNewCar',
    async ({car})=> {
        const{data}=await carServices.createCar(car)
        return data
    }
);
const deletCar=createAsyncThunk(
    'carSlice/deletCar',
    async ({id},{dispatch})=> {
        await carServices.deleteCar(id)
        dispatch(delCar({id}))
    }
)

const carSlice=createSlice({
    name:'carSlice',
    initialState,
    reducers:{
        delCar: ((state, action) => {
            const index=state.cars.findIndex(value => value.id===action.payload)
            state.cars.splice(index,1)
        })
    },
    extraReducers:(builder)=>{
        builder
            .addCase(allCars.fulfilled,(state, action) => {
                state.cars=action.payload;
            })
            .addCase(createNewCar.fulfilled,(state,action)=>{
                state.cars.push(action.payload)
            })

}
})

const {reducer:carReducer,actions:{delCar}} = carSlice;

const carActions={
    allCars,
    createNewCar,
    deletCar,
    delCar
}

export {carActions,carReducer}