export const isDev = process.env.NODE_ENV === 'development'
export const rootURL = isDev ? 'https://ceshi-tower.haibian.com' : 'https://m.speiyou.com' // for axios
