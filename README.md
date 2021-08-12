# simple2Trad
webpack plugin translate simple to trad

## 安装

```js
npm install simple2trad -D
```
## 使用

```js
const SimpleToTrad = require('simple2trad')

module.exports = {
  configureWebpack: () => ({
    plugins: [
      new SimpleToTrad({
        '餘額': '余額'
      })
    ]
  })
}
```

## 参数说明
> 由于部分简体中文直接翻译为繁体字往往存在特例问题，需要个性化处理某些词汇

```js
{
  '餘額': '余額'
}

// 将【餘額】 替换为 【余額】
```
