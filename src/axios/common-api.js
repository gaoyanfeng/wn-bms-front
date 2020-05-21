// 通用API
import {fetchGet} from './'
export default {
  /**
   * @description 获取当前用户指定应用下的权限信息
   * @param params
   */
  getUserApplicationMenuListData (params = {}) {
    return fetchGet('/sspmall-service/admin/account/info', params)
  }
}
