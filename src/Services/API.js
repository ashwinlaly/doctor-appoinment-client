import axios from 'axios';
import Constant from '../Config/index';

const BASE_URL = Constant.BACKEND_WEB_URL;

const config = () => {
    let token = localStorage.getItem("token");
    let config = {}
    if(token !== null)
        config = {
            headers : {'Authorization': 'Bearer '+ token}
    }
    return config;
}

const responseBody = res => res.data;

const request = {
    get : async (url) => {
        let configuration = await config();
        return await axios.get(`${BASE_URL}${url}`, configuration).then(responseBody)
    },
    post : async (url, data) => {
        let configuration = await config();
        return await axios.post(`${BASE_URL}${url}`, data, configuration).then(responseBody)
    }
}

export default request;