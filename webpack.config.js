const prod = process.env.NODE_ENV === 'production'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require("path");
const relative = (target) => path.resolve(__dirname, target);
module.exports = {
  mode: prod ? 'production' : 'development',
  entry: './src/index.tsx',
  output: {
    path: __dirname + '/dist/',
    publicPath: '/',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  devtool: prod ? undefined : 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '.', 'src', 'assets'),
          to: path.resolve(__dirname, '.', 'dist', 'assets')
        }
      ]
    })
  ],
  resolve: {
    /** "extensions"
     * If multiple files share the same name but have different extensions, webpack will
     * resolve the one with the extension listed first in the array and skip the rest.
     * This is what enables users to leave off the extension when importing
     */
    extensions: ['.tsx','.js', '.jsx', '.json'],
    alias: {
      components: relative('src/components'),
      hoc: relative('src/hoc'),
      pages: relative('src/pages'),
      assets: relative('src/assets'),
      interfaces: relative('src/interfaces'),    
      hooks: relative('src/hooks')      
    },
    modules: ['node_modules']
  }
}
