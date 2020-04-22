const path = require('path');

module.exports = {
  entry: [
    './src/index.js',
    './src/scss/main.scss'
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.(js$|jsx)/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      }
    ]
  }
}