import {axiosInstance} from "./axios.services";

import {urls} from "../constsns";

const carServices={
    getAll:()=>axiosInstance.get(urls.cars),
    deleteCar:(id)=>axiosInstance.delete(`${urls.cars}/${id}`),
    createCar:(car)=>axiosInstance.post(urls.cars,car)
}

export {carServices}