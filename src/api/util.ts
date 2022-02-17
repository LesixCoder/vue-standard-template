import axios, { Method, AxiosInstance, AxiosRequestConfig, AxiosPromise } from 'axios';
import axiosJp from 'axios-jsonp-pro';

type JsonpOpt = {
    params?: string; // 用于指定回调的查询字符串参数的名称（默认为callback）
    timeout?: number; //发出超时错误后的时间。0禁用（默认为60000）
};

const httpInstance: AxiosInstance = axios.create({
    // 超时
    timeout: 5000,
});

httpInstance.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error)
);

httpInstance.interceptors.response.use(
    (res) => res.data,
    (error) => Promise.reject(error)
);

export class Request {
    static get(url: string, params?: {}, config?: AxiosRequestConfig): Promise<any> {
        return Request.request(url, params, config, 'get');
    }

    static post(url: string, data?: {}, config?: AxiosRequestConfig) {
        return Request.request(url, data, config, 'post');
    }

    static put(url: string, data?: {}, config?: AxiosRequestConfig) {
        return Request.request(url, data, config, 'put');
    }

    static delete(url: string, config?: AxiosRequestConfig) {
        return Request.request(url, {}, config, 'delete');
    }

    static head(url: string, config?: AxiosRequestConfig) {
        return Request.request(url, {}, config, 'head');
    }

    static patch(url: string, data?: {}, config?: AxiosRequestConfig) {
        return Request.request(url, data, config, 'patch');
    }

    static all(iterable: Function[]) {
        return new Promise((resolve, reject) => {
            axios
                .all(iterable)
                .then(
                    axios.spread((...args) => {
                        resolve(args);
                    })
                )
                .catch((err) => reject(err));
        });
    }

    static request(url: string, data?: {}, config?: AxiosRequestConfig, method?: Method): AxiosPromise {
        return new Promise((resolve, reject) => {
            const mergeConfig: any = {
                method,
                url,
                ...config,
            };
            method === 'get' ? (mergeConfig.params = data) : (mergeConfig.data = data);

            httpInstance(mergeConfig)
                .then((res) => {
                    resolve(res);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    static jsonp(url: string, opt?: JsonpOpt): Promise<any> {
        return axiosJp.jsonp(url, opt);
    }
}

export default Request;
