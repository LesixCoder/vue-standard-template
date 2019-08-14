import http from './http.js'

/**
 * 登录
 */
const login = data => {
    http({
        url: `/login`,
        method: 'post',
        data
    })
}

export { login }
