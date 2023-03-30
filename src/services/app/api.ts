import { BASE_URL } from './../../constants/endpoints';
import { AxiosResponse, AxiosRequestConfig } from 'axios';
import axiosClient from 'library/axios/axiosClient';
export const apiCall = (
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' ,
    url:string,
    data?: Record<string,unknown>,
    headers?:Record<string,unknown>
):Promise<AxiosResponse<any>> => {
    const config: AxiosRequestConfig = {
        method,
        url,
        baseURL: BASE_URL
    }
    if(method === "GET"){
        config.params = data
    } else{
        config.data = data
    }
    return axiosClient(config).then((response:any) => {
        return response
    }) 
}