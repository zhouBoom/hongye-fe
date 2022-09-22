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
        prot: 9002,
        open: true,
        hot: true
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
              test: /\.vue$/,
              loader: 'vue-loader'
            }
        ]
    }
}