/**
 * @param data 文件数据
 * @description 导出文件
 */
export const downloadExcel = (data, fileName) => {
  if (!data) {
    return false
  }
  let userAgent = navigator.userAgent.toLowerCase()
  const blob = new Blob([data], {type: 'application/vnd.ms-excel;charset=utf-8'})
  if ((!!window.ActiveXObject || 'ActiveXObject' in window) || /edge/.test(userAgent) || /msie/.test(userAgent)) {
    navigator.msSaveBlob(blob, fileName)
  } else {
    let url = window.URL.createObjectURL(blob)
    let link = document.createElement('a')
    link.style.display = 'none'
    link.href = url
    link.setAttribute('download', fileName)

    document.body.appendChild(link)
    link.click()
    URL.revokeObjectURL(link.href) // 释放URL 对象
    document.body.removeChild(link)
  }
}
  /**
   * @description 获取后缀名
   */
export const getSuffix = (fileName) => {
  let idx = fileName.lastIndexOf('.')
  let suffix = ''
  if (idx >= 0) suffix = fileName.substring(idx)
  return suffix
}
/**
 * @description 获取随机数
 */
export const getRandomString = (len) => {
  len = len || 32
  let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
  let maxPos = chars.length
  let pwd = ''
  for (var i = 0; i < len; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return pwd
}
/**
 * @desc 获取字符串长度，英文1中文2
 */
export const getStringLen = (str) => {
  let len = 0
  for (let i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i)
    if ((c >= 0x0001 && c <= 0x007e) || (c >= 0xff60 && c <= 0xff9f)) {
      len++
    } else {
      len += 2
    }
  }
  return len
}

/**
 * @description 格式化金额
 * @param number：要格式化的数字
 * @param decimals：保留几位小数 默认0位
 * @param decPoint：小数点符号 默认.
 * @param thousandsSep：千分位符号 默认为,
 */
export const formatMoney = (number, decimals = 2, decPoint = '.', thousandsSep = ',') => {
  if (!number && number !== 0) return '--'
  // 后台返回数据都是分
  number = Number(number) / 100
  number = (number + '').replace(/[^0-9+-Ee.]/g, '')
  let n = !isFinite(+number) ? 0 : +number
  let prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
  let sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep
  let dec = (typeof decPoint === 'undefined') ? '.' : decPoint
  let s = ''
  let toFixedFix = function (n, prec) {
    let k = Math.pow(10, prec)
    return '' + Math.round(n * k) / k
  }
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
  let re = /(-?\d+)(\d{3})/
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, '$1' + sep + '$2')
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || ''
    s[1] += new Array(prec - s[1].length + 1).join('0')
  }
  return s.join(dec)
}

/**
 * 防抖函数
 * @param fn 高频函数
 * @param wait 等待时间
 * @returns {Function}
 */
export const debounce = (fn, wait) => {
  let context = this,
    args = arguments,
    timer = null
  return function() {
    context = this
    args = arguments
    clearTimeout(timer)
    timer = setTimeout(function() {
      fn.apply(context, args)
    }, wait || 250)
  }
}
/**
 * 对象深拷贝
 * @param  obj 对象
 */
export const cloneObj = (obj) => {
  let str
  let newObj = obj.constructor === Array ? [] : {}
  if (
    Object.prototype.toString.call(obj) !== '[object Object]' &&
    Object.prototype.toString.call(obj) !== '[object Array]'
  ) {
    return
  } else if (window.JSON) {
    str = JSON.stringify(obj) // 系列化对象
    newObj = JSON.parse(str) // 还原
  } else {
    for (let i in obj) {
      newObj[i] = typeof obj[i] === 'object' ? this.cloneObj(obj[i]) : obj[i]
    }
  }
  return newObj
}
/**
 * @function deepCopy 浅深拷贝
 * @param  {type} obj {description}
 * @return {type} {description}
 */
export const deepCopy = (obj) => {
  return JSON.parse(JSON.stringify(obj))
}
