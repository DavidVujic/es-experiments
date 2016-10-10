var path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        path: './lib',
        filename: 'app.bundle.js',
        publicPath: '/lib/'
    },
    resolve: {
        root: [path.resolve('./src')]
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    devtool: 'source-map',
    devServer: { inline: true }
};
