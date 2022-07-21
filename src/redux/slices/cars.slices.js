import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carServices} from "../../services";

const initialState={
    cars:[],
    status:null
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
    async ({car},{rejectWithValue})=> {
        try {
            const {data} = await carServices.createCar(car)
            return data
        }catch (e) {
            return rejectWithValue(e.message)
        }
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
            const index=state.cars.findIndex(value => value.id===action.payload.id)
            state.cars.splice(index,1)
        }),
        clearStatus:((state,action)=>{
            state.status=action.payload
            }

        )
    },
    extraReducers:(builder)=>{
        builder
            .addCase(allCars.fulfilled,(state, action) => {
                state.cars=action.payload;
            })
            .addCase(createNewCar.fulfilled,(state,action)=>{
                state.cars.push(action.payload)
            })
            .addCase(createNewCar.rejected,(state,action)=>{
                console.log(action.payload)
                state.status=action.payload
            })

}
})

const {reducer:carReducer,actions:{delCar,clearStatus}} = carSlice;

const carActions={
    allCars,
    createNewCar,
    deletCar,
    delCar,
    clearStatus
}

export {carActions,carReducer}