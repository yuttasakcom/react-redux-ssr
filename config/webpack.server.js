const webpack = require('webpack')
const path = require('path')
const webpackMerge = require('webpack-merge')
const webpackBase = require('./webpack.base')
const webpackNodeExternals = require('webpack-node-externals')

const resolve = dir => path.resolve(__dirname, '..', dir)

const config = {
  target: 'node',
  devtool: '#source-map',
  entry: resolve('server/server.js'),
  output: {
    path: resolve('build'),
    filename: 'bundle.js'
  },
  externals: webpackNodeExternals({
    whitelist: /\.css$/
  }),
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      )
    })
  ]
}

module.exports = webpackMerge(webpackBase, config)
