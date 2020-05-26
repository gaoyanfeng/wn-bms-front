/**
 * floatObj 包含加减乘除四个方法，能确保浮点数运算不丢失精度
 *
 * 我们知道计算机编程语言里浮点数计算会存在精度丢失问题（或称舍入误差），其根本原因是二进制和实现位数限制有些数无法有限表示
 * 以下是十进制小数对应的二进制表示
 *      0.1 >> 0.0001 1001 1001 1001…（1001无限循环）
 *      0.2 >> 0.0011 0011 0011 0011…（0011无限循环）
 * 计算机里每种数据类型的存储是一个有限宽度，比如 JavaScript 使用 64 位存储数字类型，因此超出的会舍去。舍去的部分就是精度丢失的部分。
 *
 *
 * ** explame **
 *  0.1 + 0.2 == 0.30000000000000004 （多了 0.00000000000004）
 *  0.2 + 0.4 == 0.6000000000000001  （多了 0.0000000000001）
 *  19.9 * 100 == 1989.9999999999998 （少了 0.0000000000002）
 *
 *
 */
/**
 * @desc 数字精度丢失 1.335.toFixed(2) // 1.33(Chrome/Firefox)
 * @desc toFixed 修复
 * @param num 需要操作的数字
 * @param n 要保留的小数位数
 */
const toFixed = (num, n) => {
  if (num < 0) {
    num = -num
  } else {
    return -(parseInt(((num * (Math.pow(10, n))) + 0.5), 10) / Math.pow(10, n))
  }
  return parseInt(((num * (Math.pow(10, n))) + 0.5), 10) / Math.pow(10, n)
}

/**
 * @desc 两个浮点数求和
 * @param num1 第一个数
 * @param num2 第二个数
 * @return {number}
 */
const floatAdd = (num1, num2) => {
  let r1, r2, m
  try {
    r1 = `${num1}`.split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = `${num2}`.split('.')[1].length
  } catch (e) {
    r2 = 0
  }
  m = Math.pow(10, Math.max(r1, r2))
  return Math.round(num1 * m + num2 * m) / m
}
/**
 * @desc 两个浮点数相减
 * @param num1 第一个数
 * @param num2 第二个数
 * @return {*}
 */
const floatSub = (num1, num2) => {
  let r1, r2, m
  try {
    r1 = `${num1}`.split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = `${num2}`.split('.')[1].length
  } catch (e) {
    r2 = 0
  }
  m = Math.pow(10, Math.max(r1, r2))
  return Math.round(num1 * m - num2 * m) / m
}
/**
 * @desc 两个浮点数相乘
 * @param num1 第一个数
 * @param num2 第二个数
 * @return {number}
 */
const floatMul = (num1, num2) => {
  let m = 0
  let s1 = `${num1}`
  let s2 = `${num2}`
  try {
    m += s1.split('.')[1].length
  } catch (e) {}
  try {
    m += s2.split('.')[1].length
  } catch (e) {}
  return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m)
}
/**
 * @desc 两个浮点数相除
 * @param num1 第一个数
 * @param num2 第二个数
 * @return {number}
 */
const floatDiv = (num1, num2) => {
  let t1, t2, r1, r2
  try {
    t1 = `${num1}`.split('.')[1].length
  } catch (e) {
    t1 = 0
  }
  try {
    t2 = `${num2}`.toString().split('.')[1].length
  } catch (e) {
    t2 = 0
  }
  r1 = Number(`${num1}`.replace('.', ''))
  r2 = Number(`${num2}`.toString().replace('.', ''))
  return (r1 / r2) * Math.pow(10, t2 - t1)
}
module.exports = {
  toFixed,
  floatAdd,
  floatSub,
  floatMul,
  floatDiv
}
