import axios from 'axios'
import {baseURL} from "../config";

// http request class
class HttpRequest {
    constructor(baseUrl = baseURL) {
        this.baseUrl = baseUrl
        this.timeout = 5000
    }
    // defaultConfig
    getDefaultConfig() {
         return {
            baseURL: this.baseUrl,
            timeout: this.timeout,
            headers: {}
        }
    }
    //interceptors
    interceptors(instance) {
        instance.interceptors.request.use(config => {
            // loading
            return config
        }, err => {
            Promise.reject(err)
        })
        instance.interceptors.response.use(response => {
            return response.data
        }, err => {
            Promise.reject(err)
        })
    }
    request(options) {
        const config = Object.assign({}, this.getDefaultConfig(), options)
        const instance = axios.create()
        this.interceptors(instance)
        return instance(config)
    }

}

export default HttpRequest
