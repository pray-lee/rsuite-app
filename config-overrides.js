const {override, addLessLoader, addDecoratorsLegacy} = require('customize-cra')
const modifyVars = require('./theme')

module.exports = override(
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars
        }
    }),
    addDecoratorsLegacy()
)
