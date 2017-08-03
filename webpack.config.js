const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'app'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve('./src'),
        loaders: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: ['react', 'stage-2', 'env']
            }
          }
        ]
      }
    ]
  }
}
