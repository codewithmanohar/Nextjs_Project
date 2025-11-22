import axios from "axios";


export const api = axios.create({
    baseURL: "http://localhost:3000", 
    headers: {"Content-Type": "application/json"},
});

api.interceptors.request.use((config) => {
    return config ;
});

api.interceptors.response.use((response) => {
    return response ;
}, 
(error) => {
    if(error.message?.status === "401"){
        console.log("unauthorized user");
    }
    return Promise.reject(error);
}
)