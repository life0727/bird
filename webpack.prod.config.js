const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    mode:'production',
    entry: './src/index.js',
    output: {
        filename: 'index.[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test:/\.(c|sa|sc)ss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    {
                        loader:'css-loader',
                        options:{
                            sourceMap:true
                        }
                    },
                    {
                        loader:'sass-loader',
                        options:{
                            sourceMap:true
                        }
                    }
                 ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [ {
                    loader: 'file-loader',
                    options: {
                        name: "img/[name].[hash:5].[ext]",
                        //limit: 1024, // size <= 1kib
                        // outputPath: "img",
                        //publicPath: "../"
                    }
                }]
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'[name].[hash].css',
            chunkFilename:'[id].css'
        }),
        new HtmlWebpackPlugin({  // Also generate a test.html
            filename: 'index.html', //默认：index.html
            template: path.resolve(__dirname, 'index.html') //模板页面
        }),
        new CleanWebpackPlugin()
    ],
    optimization:{
        minimizer:[new OptimizeCssAssetsWebpackPlugin({})]
    }
}