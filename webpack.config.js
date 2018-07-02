const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, './index.js'),
    output: {
        path: path.join(__dirname, 'assets'),
        filename: 'bundle.js',
        publicPath: '/assets/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]_[local]--[hash:base64:5]'
                        }
                    }
                })
            },
            {
                test: /\.(js|jsx)$/, //Updated to allow jsx.   
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['transform-react-jsx', 'react-css-modules']
                    }
                }
            }
        ]
    }, //Added devServer options for webpack-dev-server
    devServer: {
        contentBase: path.join(__dirname, "./"),
        compress: true,
        hot: true,
        open: true,
        stats: 'errors-only'
    },
    plugins: [
        new ExtractTextPlugin('bundle.css'),
        new webpack.DefinePlugin({
            'VIMEO_API_CHANNELS_URL': JSON.stringify('https://api.vimeo.com/channels'),
            'AUTH_TOKEN': JSON.stringify('Bearer dcb7b3a0f5cde5874f0c4ab2b6eff94d')
        })
    ]
}
