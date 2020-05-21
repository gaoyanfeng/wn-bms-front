// 定义所需的 getters
/**
 * @description 获取用户名
 * @param state
 * @returns {string|loginRule.userName|{required, message, trigger}}
 */

export const getRouters = state => {
  if (!state.routers || state.routers.length === 0) {
    state.routers = JSON.parse(sessionStorage.getItem('bmsRouter'))
  }
  return state.routers
}

export const getDynamicRouters = state => {
  if (!state.dynamicRouters || state.dynamicRouters.length === 0) {
    state.dynamicRouters = JSON.parse(sessionStorage.getItem('bmsDynamicRouters'))
  }
  return state.dynamicRouters
}
