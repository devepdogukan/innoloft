import axios from "axios"


const defaultOptions = {
    baseURL: "https://api-test.innoloft.com",
    headers: {
        'Content-Type': 'application/json',
    },
};

const instance = axios.create(defaultOptions)


export default instance;