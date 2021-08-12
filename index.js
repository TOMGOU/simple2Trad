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
      for (const file of assets) {
        if (/\.js$/.test(file.name)) {
          const { source } = compilation.getAsset(file.name)
          
          let newSource = ''
          newSource = cnchar.convert.simpleToTrad(source.source())
          const optionKeys = Object.keys(this.option)
          optionKeys.length && optionKeys.forEach(key => {
            newSource = newSource.replace(new RegExp(key, 'g'), this.option[key])
          })

          compilation.assets[file.name] = {
            source: function () {
              return newSource;
            },
            size: function () {
              return newSource.length
            }
          }
        }
      }
    })
  }
}
