import axios from "axios";
import baseURL from "../const/urls";

const axiosInstance = axios.create({baseURL});

export {axiosInstance}