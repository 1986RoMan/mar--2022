import axios from "axios";
const baseURL='https://jsonplaceholder.typicode.com/comments'
const axiosInstance = axios.create({baseURL});
const commentInstance={
    createComment:(comment)=>axiosInstance.post( '',JSON.stringify(comment)),
}
export {commentInstance}