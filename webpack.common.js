const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'js/[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, 'src'),
    }
  },
  optimization: {
    usedExports: true,
    runtimeChunk: 'single',
    splitChunks: {
      maxSize: 10000,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all' 
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name][contenthash].[ext]'
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCSSExtractPlugin({
      filename: 'css/[name].[contenthash].css'
    }),
    new HTMLWebpackPlugin({
      title: 'WebPack desde cero',
      template: './src/index.html'
    })
  ]
}