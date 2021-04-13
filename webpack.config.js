const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development'
  return {
    entry: './src/js/main.js',
    output: {
      filename: '[name].[hash].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true
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
    mode: argv.mode,
    devtool: isDevelopment ? 'cheap-source-map' : 'source-map', 
    devServer: {
      contentBase: './dist',
      hot: true
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