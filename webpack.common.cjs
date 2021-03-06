const path = require('path');

module.exports = {
  entry: './index.js',
  stats: {warnings:false},
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env'   // 將es6轉換為 es5
              ],
              plugins: [
                [
                  '@babel/plugin-transform-runtime',
                  {
                    'corejs': 3
                  }
                ]
              ]
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: 'package-test.js',
    path: path.resolve(__dirname, 'dist'),
  },
};