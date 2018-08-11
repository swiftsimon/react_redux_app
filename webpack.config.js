const path = require('path')
// you can use create react app which has its own web pack config
module.exports = {
    mode:'development',
    entry: { // where to start looking for files 
        app: path.resolve(__dirname, 'src')
    },
    output: { // what file to make
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: "/"
    },
    resolve: { // what files to recognize (css, sass, typescript etc)
        extensions:['.js', '.jsx']
    },
    module: { // how to match babel plug in with files 
        rules: [{
            test: /\.jsx?/,  // accepts js or jsx
            loader: 'babel-loader'
        }]
    }
}