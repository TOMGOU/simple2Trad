const cnchar = require('cnchar')
const trad = require('cnchar-trad')
cnchar.use(trad)

module.exports = class SimpleToTrad {

  // 插件配置的参数
  constructor(option = {}) {
    this.option = option;
  }

  // 固定的
  apply(compiler) {
    compiler.hooks.emit.tap('simpleToTrad', compilation => {
      const assets = compilation.getAssets();
      console.log({assets})
      for (const file of assets) {
        if (/\.js$/.test(file.name)) {
          const { source } = compilation.getAsset(file.name)

          const newFile = cnchar.convert.simpleToTrad(source.source())

          compilation.assets[file.name] = {
            source: function () {
              return newFile;
            },
            size: function () {
              return newFile.length
            }
          }
        }
      }
    })
  }
}
