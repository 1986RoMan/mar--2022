import axios from "axios";
const baseURL='https://jsonplaceholder.typicode.com/users'
const axiosInstance = axios.create({baseURL});
const userInstance={
    createUser:(user)=>axiosInstance.post( '',JSON.stringify(user)),
}
export {userInstance}