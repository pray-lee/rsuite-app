import http from '../lib'

const test = () => http.request({
    url: 'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json'
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

