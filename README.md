# tool

系统环境
```js
// 是否是苹果手机
const isIos = (() => {
  let u = navigator.userAgent
  let ios = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  return ios
})()
// 是否是安卓手机
const isAndroid = (() => {
  let u = navigator.userAgent
  let android = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1
  return android
})()
// 是否是微信浏览器
const isWechat = (() => {
  let ua = navigator.userAgent.toLowerCase()
  let isWeixin = ua.indexOf('micromessenger') !== -1
  return isWeixin
})()
// 是否是线上环境
const isOnline = (() => {
  let flag = window.location.href.indexOf(192.168) < 0
  return flag
})()

export default { isIos, isAndroid, isWechat, isOnline }
```
复制
```js
copy (copyContent, callBack) {
    // execCommand复制必须操纵可编辑区域的内容 就是输入框
    const input = document.createElement('input')
    input.setAttribute('readonly', 'readonly')
    input.setAttribute('value', copyContent)
    document.body.appendChild(input)
    input.select()
    // 复制的文本长度
    input.setSelectionRange(0, 9999)
    if (document.execCommand('copy')) {
      document.execCommand('copy')
      if (callBack) callBack()
    }
    document.body.removeChild(input)
  }
 ```
