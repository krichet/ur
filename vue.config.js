const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {				
      config.module.rule('vue').uses.delete('cache-loader');				
      config.module.rule('js').uses.delete('cache-loader');				
      config.module.rule('ts').uses.delete('cache-loader');				
      config.module.rule('tsx').uses.delete('cache-loader');				
    }	
  },
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/views/components'),
        utils: path.resolve(__dirname, 'src/utils'),
        mixins: path.resolve(__dirname, 'src/mixins'),
        configs: path.resolve(__dirname, 'src/configs'),
        db: path.resolve(__dirname, 'src/db'),
      }
    },
    output: {
      filename: 'js/[name].js',
      chunkFilename: 'js/[name].js'
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/[name].css'
      }),
    ]
  }
}
