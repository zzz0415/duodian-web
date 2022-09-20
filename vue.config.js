module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "~@/assets/scss/base.scss";'
      },
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 100,
            propList: ['*']
          }),
          require('autoprefixer')({
          })
        ]
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:7001',
        changeOrigin: true
      }
    }
  }
}
