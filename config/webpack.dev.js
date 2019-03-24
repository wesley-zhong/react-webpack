const path = require("path")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); // 新增
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production'
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin')
var DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var apiMocker = require('connect-api-mocker');

module.exports = {
    mode: 'development',
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,// set to true if you want JS source maps,
                uglifyOptions: {
                    mangle: {
                        keep_fnames: true
                    }
                }
            }),
        ]
    },
    entry: {
        main: './src/app/app.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "[name].bundle.js"
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css'],
        alias: {
            pages: path.resolve(__dirname, 'src/pages'),
            components: path.resolve("src/component"),
        },
        plugins: [
            new DirectoryNamedWebpackPlugin()
        ]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        ignore: ['node_modules/jqwidgets-scripts/jqwidgets'],
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                },
            },
            {
                test: /\.(jpg|png|gif|svg|pdf|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    limit: 80000,
                    name: '[name].[hash:8].[ext]',
                    publicPath: './public/fonts',
                    outputPath: '/fonts'
                }
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./html/index.html",
            hash: true,
            minify: {
                removeAttributeQuotes: true,
                removeComments: true,
                collapseWhitespace: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash:8].css'
        }),
        new webpack.NamedModulesPlugin(), // 新增
        new CleanWebpackPlugin(),
        new OptimizeCSSAssetsPlugin(),
        new ExtractTextPlugin('style.css'),
        new webpack.HotModuleReplacementPlugin() //新增
    ],
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        host: 'localhost',
        compress: true,
        port: 8888,
       // open: true,
        proxy: {
            '/**': {
                target: 'http://localhost:80/index.php',
                secure: false
            }
        },

        // for mock server

        setup: function (app) {
            app.use('/mock', apiMocker('mock/data'));
            nextOnNotFound: true
        }

    }
}