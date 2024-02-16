import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { BASE_URL } from '../constants/services'
import { Alert } from 'react-native'

const DEBUG = process.env.NODE_ENV === "development";

const client = axios.create({
    baseURL: BASE_URL
})

export interface IRequestConfig extends AxiosRequestConfig<any> {}
export interface IRequestResponse<T> extends AxiosResponse<any, any> {}

const request = function<T>(options: IRequestConfig): Promise<IRequestResponse<T>> {

    const onSuccess = function(response: AxiosResponse<any, any>) {
        console.debug('Request Successful', response);
        return response.data;
    }

    const onError = function(error) {
        console.error("Request Failed", error.config)

        if (error.response) {
            console.error("Status:", error.response.status)
            console.error("Data:", error.response.data)
            console.error("Headers:", error.response.headers)
        } else {
            console.error("Error message:", error.message)
        }

        return Promise.reject(error.response || error.message)
    }

    return client(options)
        .then(onSuccess)
        .catch(onError)
}

const requestSuccessHandler = (config) => {
    if (DEBUG) { console.info("[requestSuccessHandler]", 'HANDLED') }
    return config;
}
const requestErrorHandler = (error) => {
    if (DEBUG) { console.info("[requestErrorHandler]", error) }
    return Promise.reject(error);
}
axios.interceptors.request.use(requestSuccessHandler, requestErrorHandler);

const responseSuccessHandler = (response) => {
    if (DEBUG) { console.info("[responseSuccessHandler]", 'HANDLED') }
    if(response.status === 401) {
        Alert.alert("You are not authorized");
    }
    return response;
}
const responseErrorHandler = (error) => {
    if (DEBUG) { console.info("[responseErrorHandler]", error) }
    if (error.response && error.response.data) {
        return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
}
axios.interceptors.response.use(responseSuccessHandler, responseErrorHandler);

export default request