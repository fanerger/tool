var hostname = window.location.hostname
var xxjrURL = window.location.protocol + '//' + hostname
if (hostname.indexOf('192.168') > -1 || hostname == '' || hostname === '127.0.0.1' || hostname === 'localhost') {
  xxjrURL = 'http://192.168.10.182'
}
function ajax(obj) {
  obj = obj || {};
  obj.type = obj.type || 'POST';
  obj.url = xxjrURL+obj.url || '';
  obj.async = obj.async || true;
  obj.data = obj.data || null;
  var xmlHttp = null;
  if (XMLHttpRequest) {
    xmlHttp = new XMLHttpRequest();
  } else {
    xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
  }
  var params = [];
  for (var key in obj.data) {
    params.push(key + '=' + obj.data[key]);
  }
  var postData = params.join('&');
  if (obj.type.toUpperCase() === 'POST') {
    xmlHttp.open(obj.type, obj.url, obj.async);
    xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    xmlHttp.send(postData);
  } else if (obj.type.toUpperCase() === 'GET') {
    xmlHttp.open(obj.type, obj.url + '?' + postData, obj.async);
    xmlHttp.send(null);
  }
  xmlHttp.onload = function () {
    var data = JSON.parse(xmlHttp.responseText);
    if (data.success) {
      obj.success(data)
    } else {
      if (obj.error && Object.prototype.toString.call(obj.error) === '[object Function]') {
        obj.error(data)
      } else if (data.message) {
        alert(data.message)
      } else {
        alert('网络异常')
      }
    }
  }
}
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
