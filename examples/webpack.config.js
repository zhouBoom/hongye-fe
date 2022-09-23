const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader');
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'main.ts'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 9002,
        open: true,
        hot: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.vue']
    },
    plugins: [
        new VueLoaderPlugin(), // vue-loader 解析.vue文件
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html')
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
              test: /\.vue$/,
              loader: 'vue-loader'
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
}