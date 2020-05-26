import Vue from 'vue'
/** 权限指令 **/
Vue.directive('has', {
  inserted: function (el, binding, vnode) {
    // 获取按钮权限
    // let btnPermissions = vnode.context.$route.meta.btnPermissions.split(',')
    if (!Vue.prototype.$_has(binding.value)) {
      el.parentNode && el.parentNode.removeChild(el)
    }
  }
})
// 权限检查方法
Vue.prototype.$_has = function (value) {
  let isExist = false
  let btnPermissionsStr = sessionStorage.getItem('businessBtnPermissions')
  if (btnPermissionsStr === undefined || btnPermissionsStr === 'undefined' || btnPermissionsStr === null) {
    return false
  }
  let btnPermissionsMap = JSON.parse(btnPermissionsStr)
  if (btnPermissionsMap && btnPermissionsMap.length > 0) {
    for (let i = 0; i < btnPermissionsMap.length; i++) {
      if (btnPermissionsMap[i] === value) {
        isExist = true
        break
      }
    }
  }
  return isExist
}
