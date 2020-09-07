import http from '../lib'

const test = () => http.request({
    url: 'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json'
})

export default test

