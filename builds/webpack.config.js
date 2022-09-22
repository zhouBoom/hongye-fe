// 打包
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, '../packages/hongye-ui/index.ts'),
    output: {
        path: path.resolve(__dirname, '../lib'),
        filename: 'index.js',
        libraryTarget: 'umd', // umd打包格式，支持CJS和AMD，不支持es6，可以在浏览器直接使用
        library: 'hongye-ui' // 全局库名称
    },
    externals: { // 打包忽略vue源码
        vue: {
            root: 'Vue',
            commonjs: 'vue', // commonjs规范的import { xxx } from vue
            commonjs2: 'vue'
        }
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.vue']
    },
    module: {
        rules: [
            {test: /\.(ts|js)x?$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.vue$/, loader: 'vue-loader'}
        ]
    },
    plugins: [
        new VueLoaderPlugin() // vue-loader解析 .vue文件
    ]
}