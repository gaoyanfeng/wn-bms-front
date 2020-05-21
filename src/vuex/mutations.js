// 定义所需的 mutations
/**
 * @description 设置用户名
 */
export const SET_ROUTERS = (state, routers) => {
  state.routers = routers
  sessionStorage.setItem('bmsRouter', JSON.stringify(state.routers))
}

export const SET_DYNAMIC_ROUTERS = (state, dynamicRouters) => {
  state.dynamicRouters = dynamicRouters
  sessionStorage.setItem('bmsDynamicRouters', JSON.stringify(state.dynamicRouters))
}
