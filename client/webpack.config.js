const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const port = process.env.PORT || 3000;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
 /*  mode: "development", */
  entry: {
    bundle: path.resolve(__dirname, "./src/js/index.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    clean: true
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist")
    },
    port,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",]
            }
          }
        },
        {
          test: /\.(css|scss)$/,
          use: [{
            loader: "style-loader"
        },
        {
            loader: "css-loader"
        },
        {
            loader: "sass-loader"
        }]
       },
      {
        test: /\.(png|svg|jpg|gif|jpeg|webp)$/, 
        use: {
          loader: 'file-loader',
          options: { name: '[name].[ext]' }
        }
      },
      { 
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/, 
        use: ['file-loader'] }
    ]
  },
  stats: {
    children: true,
  },
  resolve: {
    // https://webpack.js.org/configuration/resolve/#resolveextensions
    // extensions: ['.js', '.jsx', '...']
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Social Media App",
      /* favicon: "j.png", */
      filename: "index.html",
      template: "./template.html"
    }),
  ]

}
