# tool

系统环境
```js
const system = (function () {
  const u = navigator.userAgent
  const ua = navigator.userAgent.toLowerCase()
  return {
    isIos: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
    isAndroid: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
    isWechat: ua.indexOf('micromessenger') !== -1,
    isOnline: window.location.href.indexOf(192.168) < 0 // 视情况改下
  }
})()
```

异步加载js
```js
function loadJs(src, callback) {
  const script = document.createElement('script')
  script.src = src
  script.onload = function() {
    // 加载完成后执行
   callback()
  }
  script.language = 'JavaScript'
  document.body.appendChild(script)
}
```

判断是否是空对象{}
```js
function isEmptyObject(obj) {
    if (!obj || typeof obj !== 'object' || Array.isArray(obj))
        return false;
    return !Object.keys(obj).length;
}
```

复制: 因为exeCommand()可以操作系统剪切板，有可能被恶意利用。所以你不能用JS“直接”调用execCommand('copy')，而需要放到某一个有用户出发的事件响应函数内，(用户触发的事件和 document.execCommand('copy'); 之间不能被异步过程隔开)
```js
function copy (copyContent, callBack) {
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
 
 一键置顶
 ```js
var btn = document.getElementById('btn');
btn.onclick = function () {
  var h = document.documentElement.scrollTop
  timer = setInterval(function () {
    document.documentElement.scrollTop -= h / 8;
    if (document.documentElement.scrollTop <= 0) {
      clearInterval(timer)
    }
  }, 20)
}
```

获取路由参数
```js
function getRouteQuery (key) {
  var searchStr = window.location.search.slice(1)
  var searchArr = searchStr.split('&')
  var query = {}
  for (var i = 0; i < searchArr.length; i++) {
    var item = searchArr[i].split('=')
    query[item[0]] = item[1]
  }
  return query.key
}
```

正则
```js
function isIdCard(str) {
  return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str)
}
function isPhoneNum(str) {
  return /^(\+?0?86\-?)?1[3456789]\d{9}$/.test(str)
}
function isEmail(str) {
  return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
}
function isUrl(str) {
  return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(str);
}
```

