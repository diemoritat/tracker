module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '@import "src/styles/variables/_variables.scss";'
      }
    }
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [{
              loader: 'file-loader',
              options: {
                  name: '[name].[ext]',
                  outputPath: 'public/fonts/'
              }
          }]
        }
      ]
    }
  }
}