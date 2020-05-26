/**
 *  @param date 要格式化的时间
 *  @param fmt 时间格式[完整格式：yyyy-MM-dd HH:mm:ss，默认yyyy-MM-dd]
 *  @param implementText  缺省文字
 */
export const formatDate = (date, fmt, implementText) => {
  if (date === null || date === '' || date === undefined) {
    return implementText || ''
  }
  date = new Date(date)
  let week = [
    '星期日',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六'
  ];
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let obj = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours() % 12, // 12小时制
    'H+': date.getHours(), // 24小时制
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'S+': date.getMilliseconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    'W+': week[date.getDay()]
  }
  for (let k in obj) {
    let str = obj[k] + ''
    if (new RegExp(`(${k})`).test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : addZeroBefore(str))
    }
  }
  return fmt
}
/**
 * @description 如果num小于10，就在前面加上0
 * @param num
 * @returns {string}
 */
export const addZeroBefore = (num) => {
  let numStr = num >= 10 ? num.toString() : '0' + num
  return numStr
}
/**
 * @description 获取当前时间后多少毫秒后的时间
 * @param msec 毫秒数
 */
export const getMsNextDate = (msec) => {
  let date = new Date()
  date.setTime(date.getTime() + msec)
  return date
}

/**
 * @description 获取某个日期前几个月或者后几个月的时间
 * @param date 某个日期
 * @param months 几个月 值为-1，-2，-3，-4，-5...或者1，2，3，4，5... 正值代表后几个月，负值表示前几个月
 * @returns {Date}
 */
export const getMonthsDate = (date, months) => {
  let wnDate = new Date(date)
  wnDate.setMonth(wnDate.getMonth() + months)
  return wnDate
}
/**
 * @description 获取某个日期前几天或者后几天的时间
 * @param date 某个日期
 * @param days 几天 值为-1，-2，-3，-4，-5...或者1，2，3，4，5... 正值代表后几天，负值表示前几天
 * @returns {Date}
 */
export const getDaysDate = (date, days) => {
  let wnDate = new Date(date)
  wnDate.setTime(wnDate.getTime() + days * 24 * 60 * 60 * 1000)
  return wnDate
}
