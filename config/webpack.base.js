const path = require('path')

const resolve = dir => path.resolve(__dirname, '..', dir)

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            'react',
            'stage-2',
            'env',
            { plugins: ['transform-class-properties'] }
          ]
        }
      }
    ]
  }
}
