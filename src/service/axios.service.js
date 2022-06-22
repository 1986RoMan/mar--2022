import axios from "axios";

const baseURL='https://jsonplaceholder.typicode.com'
const axiosService = axios.create({baseURL})
const getUsers=()=> {
   return axiosService.get('/users')
}


export {getUsers};