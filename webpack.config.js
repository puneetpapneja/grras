const prod = process.env.REACT_ENV === 'production'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const dotenv = require('dotenv-webpack');
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
    new dotenv({
      path: './.env', // load this now instead of the ones in '.env'
      //safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      allowEmptyValues: true, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
      systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      silent: true, // hide any errors
      defaults: false // load '.env.defaults' as the default values if empty.
      //prefix: 'import.meta.env.', // reference your env variables as 'import.meta.env.ENV_VAR'.
    }),
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
      pages: relative('src/pages'),
      assets: relative('src/assets'),
      interfaces: relative('src/interfaces'),    
      hooks: relative('src/hooks'),      
      service: relative('src/service'),      
      utils: relative('src/utils'),     
      store: relative('src/store')      
    },
    modules: ['node_modules']
  }
}
