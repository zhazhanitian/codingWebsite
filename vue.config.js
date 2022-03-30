module.exports = {
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    port: 3000
  },
  configureWebpack: (config) => {
    // eslint-disable-next-line no-param-reassign
    config.optimization = {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 20000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
              return `npm.${packageName.replace('@', '')}`
            }
          }
        }
      }
    }
    // eslint-disable-next-line no-param-reassign
    config.performance = {
      hints: 'warning',
      maxEntrypointSize: 30000000,
      maxAssetSize: 10000000,
      assetFilter(assetFilename) {
        return assetFilename.endsWith('.js')
      }
    }
  }
}
