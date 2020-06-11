// vue.config.js

const glob = require('glob')
const path = require('path')
const fs = require('fs')

const PAGES_PATH = path.resolve(__dirname, './src/pages')
const pages = {}

glob.sync(PAGES_PATH + '/*/main.js').forEach(filepath => {
  // ...
  const pageName = path.basename(path.dirname(filepath))
  const templatePath = path.dirname(filepath) + '/index.html'

  if (!fs.existsSync(templatePath)) {
    // 入口如果不配置直接使用
    templatePath = 'src/pages/index/index.html'
  }
  pages[pageName] = {
    entry: filepath,
    templatePath,
    filename: `${pageName}.html`,
    chunks: ['chunk-vendors', 'chunk-common', pageName],
  }
})


module.exports = {
  //选项
  publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/', // 部署的域名上基本Url
  outputDir: 'dist', //build时候生成的目录名称默认dist
  assetsDir: '', //build时候生成的静态资源的名称默认''
  indexPath: 'index.html',//build时生成输出路径默认'index.html'
  pages
}
