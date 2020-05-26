/* eslint-disable */
/**
 * @desc 校验手机号的合法性
 * @param value 值
 */
export const validPhone = value => {
  let regs = /^1\d{10}$/
  return regs.test(value)
}
/**
 * @desc 校验座机号的合法性
 * @param value 值
 */
export const validTel = value => {
  let regs = /^((\d{3,4})|\d{3,4}-|\s)?\d{7,14}$/
  return regs.test(value)
}
/**
 * @desc 校验密码的复杂度合法性
 * @param value 值
 */
export const validPassword = value => {
  let regs = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{6,}$/
  return regs.test(value)
}
/**
 * @desc 校验金额合法性（包含0）
 * @param value 值
 */
export const validateMoney = value => {
  let regs = /^(([1-9]{1}\d*)|(0{1}))(\.\d{1,2})?$/
  return regs.test(value)
}

/**
 * @desc 校验最多两位小数
 * @param value 值
 */
export const validFloat2 = value => {
  let regs = /^(([1-9]{1}\d*)|(0{1}))(\.\d{1,2})?$/
  return regs.test(value)
}
/**
 * @desc 校验正整数
 * @param value 值
 */
export const validInt = value => {
  let regs = /^[1-9]\d*$/
  return regs.test(value)
}
/**
 * @desc 校验正整数和0
 * @param value 值
 */
export const validIntZero = value => {
  let regs = /^([0]|[1-9]\d*)$/
  return regs.test(value)
}
