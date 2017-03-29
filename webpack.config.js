module.exports = {
    entry: './src/index.ts',
    output: {
        filename: './dist/bundle.js',
    },
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