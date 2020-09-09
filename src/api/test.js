import http from '../lib'

const test = () => http.request({
    url: 'oauth/token?grant_type=password&username=admin&password=123456&client_id=webClient&client_secret=web123456'
})

const test1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1)
        }, 3000)
    })
}

const test2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2)
        }, 6000)
    })
}
export {
    test,
    test1,
    test2
}

