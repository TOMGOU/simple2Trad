# simple2Trad
webpack plugin translate simple to trad

## 安装

```js
npm install simple2Trad -D
```
## 使用

```js
const SimpleToTrad = require('simple2Trad')

module.exports = {
  configureWebpack: () => ({
    plugins: [
      new SimpleToTrad()
    ]
  })
}
```