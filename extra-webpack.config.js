const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

module.exports = {
  plugins: [
    new Dotenv(),
    new webpack.DefinePlugin({
      'process.env': {
        API_URL: JSON.stringify(process.env.API_URL),
        // ANOTHER_VARIABLE: JSON.stringify(process.env.ANOTHER_VARIABLE),
      }
    })
  ]
};
