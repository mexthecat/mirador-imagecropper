module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'MiradorImageCropper',
      externals: {
        react: 'React'
      }
    }
  }
}
