const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
        MiniCSSExtractPlugin.loader, 'css-loader',
        {
          loader: 'sass-loader',
          options: {
            additionalData: `@import "src/css/global.scss";`
          }
        }]
      }
    ]
  }
})

