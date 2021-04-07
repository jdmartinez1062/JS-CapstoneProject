const path = require('path');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // Load Images
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      // Load sounds
      {
        test: /\.(wav)$/i,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },

  mode: 'development',

  devServer: {
    open: true,
    host: 'localhost',
    contentBase: './dist',
  },
};
