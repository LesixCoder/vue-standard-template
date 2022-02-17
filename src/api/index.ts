import http from './util';

export const getDemo = () => {
    return http.get(`https://unpkg.com/docsify@4.12.2/lib/themes/vue.css`);
};

/**
 * 模拟数据
 */
export const getUsername = (name: string) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(name);
        }, 500);
    });
};
