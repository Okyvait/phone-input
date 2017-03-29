const dev = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: './example/index.ts',
    watch: dev,
    output: {
        filename: './example/bundle.js',
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