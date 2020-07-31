const { override,addDecoratorsLegacy, disableEsLint, addExternalBabelPlugins } = require('customize-cra');

module.exports = override (

    // enable legacy decorators babel plugin
    addDecoratorsLegacy(),

    // disable eslint in webpack
    disableEsLint(),

    addExternalBabelPlugins(
        '@babel/plugin-transform-react-jsx',
        '@babel/plugin-proposal-class-properties'
    )

);