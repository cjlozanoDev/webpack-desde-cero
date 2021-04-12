const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env, arg) => {
  return {
    entry: './src/js/main.js',
    output: {
      filename: '[name].[contenthash].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'    
      }
    },
    optimization: {
      splitChunks: {
        chunks: 'all'    
      }
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCSSExtractPlugin.loader, 'css-loader']
          // use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/,
          use: ['file-loader']
        }
      ]
    },
    plugins: [
      new MiniCSSExtractPlugin(),
      new HTMLWebpackPlugin({
        title: 'WebPack desde cero',
        template: './src/index.html'
      })
    ],
  }  
}