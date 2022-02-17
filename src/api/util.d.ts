import { Method, AxiosRequestConfig, AxiosPromise } from 'axios';
declare type JsonpOpt = {
    params?: string;
    timeout?: number;
};
export declare class Request {
    static get(url: string, params?: {}, config?: AxiosRequestConfig): Promise<any>;
    static post(url: string, data?: {}, config?: AxiosRequestConfig): AxiosPromise<any>;
    static put(url: string, data?: {}, config?: AxiosRequestConfig): AxiosPromise<any>;
    static delete(url: string, config?: AxiosRequestConfig): AxiosPromise<any>;
    static head(url: string, config?: AxiosRequestConfig): AxiosPromise<any>;
    static patch(url: string, data?: {}, config?: AxiosRequestConfig): AxiosPromise<any>;
    static all(iterable: Function[]): Promise<unknown>;
    static request(url: string, data?: {}, config?: AxiosRequestConfig, method?: Method): AxiosPromise;
    static jsonp(url: string, opt?: JsonpOpt): Promise<any>;
}
export default Request;
