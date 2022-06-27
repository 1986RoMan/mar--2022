import axios from "axios";

const baseURL='https://jsonplaceholder.typicode.com'
const axiosInstance = axios.create({baseURL});
const usersService={
    getUsers:()=>axiosInstance.get('/users'),
     getPostById:(id)=>axiosInstance.get('/users'+'/'+id+'/posts')
}
export {usersService}