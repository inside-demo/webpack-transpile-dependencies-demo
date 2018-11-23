module.exports = {
    mode: 'development',
    target: 'web',
    devtool: 'none',
    entry: './index.js',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        modules: [ 'my_modules', 'node_modules' ]
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader'
            }
        ]
    }
}