import axios, { AxiosError, type AxiosRequestConfig } from 'axios';

type IConfig = AxiosRequestConfig

const url: string = 'http://localhost:8000/api';

const requestConfig: IConfig = {
    headers: {
        accept: 'application/json',
    }
}

class HttpRequest {
    api: any
    constructor() {
        requestConfig.baseURL = url

        this.api = axios.create(requestConfig)

        this.api.interceptors.response.use(
            (response: any) => {
                return response.data
            },
            (error: AxiosError) => {
                return Promise.reject(error)
            },
        )
    }

    async get<T>(url: string, conf?: IConfig) {
        return this.api.get(url, conf)
            .then((response: T) => Promise.resolve(response))
            .catch((error: AxiosError) => Promise.reject(error))
    }

    async post<T>(url: string, data = {}, conf?: IConfig) {
        return this.api.post(url, data, conf)
            .then((response: T) => Promise.resolve(response))
            .catch((error: AxiosError) => Promise.reject(error))
    }

    async put<T>(url: string, data = {}, conf?: IConfig) {
        return this.api.put(url, data, conf)
            .then((response: T) => Promise.resolve(response))
            .catch((error: AxiosError) => Promise.reject(error))
    }
}

export const httpClient = new HttpRequest()