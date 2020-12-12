module.exports = {
  entry: {
    widget: './src/index.js',
    form: './src/form.js',
  },
  output: {
    libraryTarget: "commonjs"
  },
  // https://muffinman.io/webpack-babel-react-revisited/
  // Loaders configuration
  // We are telling webpack to use "babel-loader" for .js and .jsx files
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      // Sass:
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      }
    ],
  },
  externals: {
    react: "react"
  }
};
