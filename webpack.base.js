const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'ot-todo-bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              camelCase: true,
              modules: true,
              namedExport: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              camelCase: true,
              modules: true,
              namedExport: true
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', ".css", ".scss" ]
  },
  plugins: [
    new CopyPlugin([
      {
        from: path.resolve(__dirname, 'src/*.html'),
        to: path.resolve(__dirname, './dist'),
        context: 'src/'
      },
      {
        from: path.resolve(__dirname, 'src/assets/**/*'),
        to: path.resolve(__dirname, './dist/assets'),
        context: 'src/assets'
      }
    ])
  ]
};
