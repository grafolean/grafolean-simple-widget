module.exports = {
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
    ],
  },
  externals: {
    react: "react"
  }
};
