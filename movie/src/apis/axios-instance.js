import axios from 'axios';

const axiosInstance = axios.create({
    headers:{
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
    },
    baseURL: process.env.REACT_APP_API_URL ,
})

export {axiosInstance}