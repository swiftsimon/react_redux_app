const path = require('path')
// you can use create react app which has its own web pack config
module.exports = {
    mode:'development',
    entry: {
        app: path.resolve(__dirname, 'src')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: "/"
    },
    resolve: {
        extensions:['.js', '.jsx']
    },
    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader'
        }]
    }
}