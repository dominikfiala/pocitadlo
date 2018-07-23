module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/pocitadlo/app'
    : '/',
  outputDir: 'app',
  pwa: {
    name: 'Počítadlo',
    themeColor: '#f88411',
    msTileColor: '#f88411',
    appleMobileWebAppCapable: 'yes',
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png'
    }
  }
}
