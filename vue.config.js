/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  configureWebpack: webpackConfig => {
    // This will succeed in prod / local but fails in test
    webpackConfig.optimization.splitChunks.cacheGroups['myCacheGroup'] = {}
  }
}
