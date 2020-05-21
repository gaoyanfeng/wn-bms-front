// 定义所需的 actions
import commonApi from '@/axios/common-api'
import router from '@/router'
import {menus} from '@/libs/menus'
import {constRouter} from '@/router/routes'

export const GenerateRouter = ({commit}, application) => {
  return new Promise((resolve, reject) => {
    commonApi.getUserApplicationMenuListData({applicationId: application.applicationId}).then(res => {
      if (res.code === '0') {
        let menusList = res.data && res.data.menus
        let newRouter = []
        // 按钮权限
        arrangeAsynRouter(newRouter, menusList)
        let allRouter = constRouter.concat(newRouter)

        router.addRoutes(newRouter)
        commit('SET_ROUTERS', allRouter)
        commit('SET_DYNAMIC_ROUTERS', newRouter)
        resolve()
      } else {
        reject(res.msg)
      }
    }).catch(error => {
      reject(error)
    })
  })
}

const arrangeAsynRouter = (newRouter, data) => {
  if (data && data.length > 0) {
    data.forEach(item => {
      let routerObj = {
        path: item.url,
        name: item.code,
        label: item.name,
        component: menus[item.code],
        iconCls: item.iconUrl,
        meta: {btnPermissions: []},
        isLeaf: false
      }
      // 获取按钮权限
      if (item.operations && item.operations.length > 0) {
        item.operations.forEach(operation => {
          routerObj.meta.btnPermissions.push(operation.code)
        })
      }
      if (item.children && item.children.length > 0) {
        routerObj.redirect = item.children[0].url
        routerObj.children = []
        arrangeAsynRouter(routerObj.children, item.children)
      } else {
        routerObj.isLeaf = true
      }
      newRouter.push(routerObj)
    })
  }
}
