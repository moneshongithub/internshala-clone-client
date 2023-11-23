import axios from "axios";


const instance = axios.create({
    baseURL: "https://internshalabackend-yjc6.onrender.com",
    withCredentials: true,
    // headers: {
    //     'Access-Control-Allow-Origin' : '*',
    //     'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
    // }
});

export default instance;
