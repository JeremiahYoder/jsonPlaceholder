import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { BASE_URL } from '../constants/services'
import { Alert } from 'react-native'

const DEBUG = process.env.NODE_ENV === "development";

const client = axios.create({
    baseURL: BASE_URL
})

export interface IRequestConfig<T> extends AxiosRequestConfig<T> {}
export interface IRequestResponse<T> extends AxiosResponse<T, any> {}
export interface IRequestError<T> extends AxiosError<T, any> {}

const request = function<T>(options: IRequestConfig<T>): Promise<IRequestResponse<T>> {

    const onSuccess = function(response: IRequestResponse<T>) {
        console.debug('Request Successful', response);
        return response; //.data ?? TODO: Previously returned data directly...didn't have access to response
    }

    const onError = function(error: IRequestError<T>) {
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

const requestSuccessHandler = (config: any) => {
    if (DEBUG) { console.info("[requestSuccessHandler]", config) }
    return config;
}
const requestErrorHandler = (error: AxiosError) => {
    if (DEBUG) { console.info("[requestErrorHandler]", error) }
    return Promise.reject(error);
}
axios.interceptors.request.use(requestSuccessHandler, requestErrorHandler);

const responseSuccessHandler = (response: AxiosResponse) => {
    if (DEBUG) { console.info("[responseSuccessHandler]", response) }
    if(response.status === 401) {
        Alert.alert("You are not authorized");
    }
    return response;
}
const responseErrorHandler = (error: AxiosError) => {
    if (DEBUG) { console.info("[responseErrorHandler]", error) }
    if (error.response && error.response.data) {
        return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
}
axios.interceptors.response.use(responseSuccessHandler, responseErrorHandler);

export default request