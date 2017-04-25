const webpack = require('webpack');
const dev = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: dev ? './example/index.ts' :'./src/phone-input.ts',
    watch: dev,
    output: {
        filename: './dist/phoneinput.min.js'
    },
    devtool: dev ? 'cheap-source-map' : '',
    plugins: dev ? [] :[
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