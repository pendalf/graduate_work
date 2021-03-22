const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const mode = process.env.NODE_ENV;

const isDev = mode === 'development';
const isTest = process.env.TEST_ENV;

const generateFilename = ext => (isDev || isTest ?
    `[name].${ext}` :
    `[name].[contenthash].${ext}`);
// `[name].${ext}`);

module.exports = {
    entry: {
        main: './index.js'
    },
    output: {
        filename: `./js/${generateFilename('js')}`,
        path: path.resolve(__dirname, 'build'),
        clean: true,
        environment: {
            arrowFunction: false
        }
    },
    mode,
    context: path.resolve(__dirname, 'src'),
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: !isDev
            }
        }),
        new MiniCssExtractPlugin({
            filename: `./css/${generateFilename('css')}`
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: 'images',
                to: 'images'
            }]
        })
    ],
    module: {
        rules: [

            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.s?[ca]ss$/i,
                exclude: /node_modules/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        }
                    },
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                }
            },
            {
                test: /\.(woff|woff2|ttf)$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                }
            },
            {
                test: /\.html?$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'html-loader',
                    options: {
                        sources: false
                    }
                }
            }

        ]
    },
    devServer: {
        contentBase: './build',
        open: true,
        port: 8080,
        hot: true,
        compress: true,
        overlay: true,
        writeToDisk: true,
        historyApiFallback: true
    },
    devtool: isDev && 'source-map'
};