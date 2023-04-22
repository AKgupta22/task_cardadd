import axios from "axios";
import { baseUrl } from "./constant";

const Axios = axios.create({
    baseURL: baseUrl
});

Axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);


export default Axios;
