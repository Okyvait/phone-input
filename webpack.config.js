const webpack = require('webpack');

module.exports = {
    entry:  './src/phone-input.ts',
    watch: false,
    output: {
        filename: './dist/phone-input.min.js',
        libraryTarget: 'amd',
        library: 'ValidationLibrary'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({})
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        loaders:[{
            test: /\.tsx?$/,
            loader: 'ts-loader'
        }]
    }
};