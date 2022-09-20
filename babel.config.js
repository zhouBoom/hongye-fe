module.exports = { // babel的预设解析，是反着执行的
    presets: [
        '@babel/preset-env',
        '@babel/preset-typescript'
    ],
    overrides: [{ // vue文件中使用了ts，对ts的代码进行转化
        test: /\.vue$/,
        plugins: [
            '@babel/transform-typescript'
        ]
    }]
}