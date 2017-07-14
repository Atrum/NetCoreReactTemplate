var path = require('path');
var webpack = require("webpack");

module.exports = {
    plugins: [],
    entry: {
        main: './scripts/site.js'
    },
    devtool: 'source-map',
    target: 'web',
    output: {
        filename: 'bundle.js',
        publicPath: '/src/',
        path: path.resolve(__dirname, 'wwwroot/src')
    },
    resolve: {
        // For modules referenced with no filename extension, Webpack will consider these extensions
        extensions: ['.js', '.jsx', '.less']
    },
    module: {
        loaders: [
            // to load css
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            // To load less
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader", options: {
                        strictMath: true,
                        noIeCompat: true
                    }
                }]
            },
            // to load fonts and images
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader: 'file-loader?name=../fonts/[name].[ext]'
            },
            // To load js with ES6
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            // To load react components using ES6
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ],
    }
};