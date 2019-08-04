// vue.config.js
module.exports = {
    // 1. 为了使用 GitHub Pages 而配置
    // publicPath: '/vuejs-blog/dist/',
    // 2. 加载 scss 公共文件
    chainWebpack: config => {
        const oneOfsMap = config.module.rule('scss').oneOfs.store
        oneOfsMap.forEach(item => {
          item
            .use('sass-resources-loader')
            .loader('sass-resources-loader')
            .options({
              resources: './src/assets/styles/common.scss',
            })
            .end()
        })
    },
}