import axios from "axios";

import baseURL from "../constsns/urls";


const axiosInstance = axios.create({baseURL});

export {axiosInstance}