const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: path.resolve(__dirname, 'main.ts'),
    output: {
        path: path.resolve(__dirname, '../website-dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 9000,
        open: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.vue'],
        alias: {
            '@': resolve('./src'),
            '@components': resolve('./src/components'),
            '@views': resolve('./src/views'),
            '@assets': resolve('./src/assets')
        }
    },
    module: {
        rules: [
            { test: /\.(ts|js)x?$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.vue$/, loader: 'vue-loader' },
            { test: /\.(svg|otf|ttf|woff|woff2|eot|gif|png)$/, loader: 'url-loader' },
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            additionalData: `
                                @import "~@assets/styles/var.scss";
                                @import "~@assets/styles/mixin.scss";
                            `
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(), // vue-loader 解析.vue文件
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'template.html')
        })
    ]
}