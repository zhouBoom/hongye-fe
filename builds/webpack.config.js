const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, '../packages/will-ui/index.ts'),
    output: {
        path: path.resolve(__dirname, '../lib'),
        filename: 'index.js',
        libraryTarget: 'umd', // umd打包格式，支持commonjs和amd，不支持es6，可以在浏览器直接使用。
        library: 'hongye-ui' // 全局名称
    },
    externals: { // 打包忽略vue，防止把vue源码打进去
        vue: {
            root: 'Vue', // 根下的Vue
            commonjs: 'vue', // commonjs规范的（import {xxx} from 'vue'）
            commonjs2: 'vue'
        }
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.vue']
    },
    module: {
        rules: [
            { test: /\.(ts|js)x?$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.vue$/, loader: 'vue-loader' }
        ]
    },
    plugins: [
        new VueLoaderPlugin() // vue-loader 解析.vue文件
    ]
}