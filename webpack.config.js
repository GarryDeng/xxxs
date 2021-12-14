const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        main: './main.js',
    },
    mode: 'development',
    devServer: {
        hot: true,
        static: {
            directory: path.join(__dirname, './view'),
            watch: true,
        },
    },
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader' },
            { test: /\.css$/, use: ['vue-style-loader','css-loader'] },
            { test: /\.html$/i, loader: "html-loader" },
        ],
    }
}