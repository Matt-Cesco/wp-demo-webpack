const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   mode: 'production',
   //entry: './src/index.js',
   entry: {
      index: './src/index.js',
   },
   output: {
   path: path.resolve(__dirname, 'dist/Js-Css'),
   filename: 'main.js',
   assetModuleFilename: 'assets/[name][ext]',
   },
   devtool: 'source-map',
   module: {
      rules: [
         {
            test: /\.(scss|css)$/,
            use: [
               MiniCssExtractPlugin.loader,
             {
               loader: 'css-loader',
               options: {
                  sourceMap: true,
               },
            }, {
               loader: 'postcss-loader',
               options: {
                  sourceMap: true,
               },
            }, {
               loader: 'sass-loader',
               options: {
                  sourceMap: true,
               },
            }
            ],
         },
         {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'fonts/'
                }
              }
            ]
         }
      ]
   },
   plugins: [
      new CompressionPlugin({
      algorithm: "gzip",
      }),
      new MiniCssExtractPlugin({
         filename: 'style.css'
      }),
      
   ],

};