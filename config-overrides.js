const {override, addLessLoader, addDecoratorsLegacy, addWebpackModuleRule} = require('customize-cra')
const modifyVars = require('./theme')

module.exports = override(
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars
        }
    }),
    addWebpackModuleRule({
        test: /\.svg$/,
        use:[{
            loader: 'svg-sprite-loader',
            options: {
                symbolId: 'icon-[name]'
            }
        }]
    }),
    addDecoratorsLegacy()
)
