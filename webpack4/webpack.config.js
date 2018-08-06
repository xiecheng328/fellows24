const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'development',//development production
    entry: {
        index: './src/index.js',
        index2: './src/index2.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        publicPath: 'http://127.0.0.1:8081/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // use: ['style-loader', 'css-loader']
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }, {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 500,
                            outputPath: 'img/'
                        }
                    }

                ]
            }, {
                test: /\.(htm|html)$/,
                loader: 'html-withimg-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['index'],
            title: 'index1 -- title',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: false
            },
            hash: true,
            template: './src/index.html'
        }),
        /* new HtmlWebpackPlugin({
            filename: 'index2.html',
            chunks: ['index2'],
            title: 'index2 -- title',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: false
            },
            hash: true,
            template: './src/index2.html'
        }) */
        new ExtractTextWebpackPlugin('css/index.css')
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        host: '127.0.0.1',
        port: '8081',
        compress: true,
        open: true,
        hot: true
    }
};