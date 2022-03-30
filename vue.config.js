module.exports = {
  lintOnSave: true,
  productionSourceMap: false,
  css: {
    extract: { ignoreOrder: true },
    loaderOptions: {
      sass: {
        // eslint-disable-next-line global-require
        implementation: require('sass') // This line must in sass option
      }
    }
  },
  devServer: {
    port: 3000
  },
  configureWebpack: {
    plugins: []
  }
}
