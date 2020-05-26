export default {
  /**
   * @description 创建cookie
   * @param name cookie的name值
   * @param value cookie的value值
   * @param seconds cookie有效时间 单位是秒  // 当有效期不设置的时候关闭浏览器再打开的时候会消失
   */
  setCookie: (name, value, seconds, path, domain, secure) => {
    let cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value)
    if (seconds) {
      let expires = new Date()
      expires.setTime(expires.getTime() + seconds * 1000)
      cookieText += '; expires=' + expires.toGMTString()
    }
    if (path) cookieText += '; path=' + path
    if (domain) cookieText += '; domain=' + domain
    if (secure) cookieText += '; secure=' + secure
    document.cookie = cookieText
  },
  /**
   * @description 根据cookie的name获取cookie的value
   * @param name cookie的name
   */
  getCookie: (name) => {
    let cookieValue = ''
    if (document.cookie.length > 0) {
      let cookieStart = document.cookie.indexOf(name + '=')
      if (cookieStart > 0) {
        cookieStart = cookieStart + name.length + 1
        let cookieEnd = document.cookie.indexOf(';', cookieStart)
        if (cookieEnd === -1) cookieEnd = document.cookie.length
        cookieValue = decodeURIComponent(document.cookie.substring(cookieStart, cookieEnd))
      }
    }
    return cookieValue
  },
  /**
   * @description 删除cookie
   * @param name cookie的name
   */
  delCookie: (name) => {
    var expires = new Date()
    expires.setTime(expires.getTime() - 1)
    document.cookie = name + '= ;expires=' + expires
  }
}
