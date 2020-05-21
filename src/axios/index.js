import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 120000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = process.env.API_ROOT

// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
  // 在发送请求之前做某件事
  if (config.method === 'post') {
    // config.data = qs.stringify(config.data)
  }
  return config
}, (error) => {
  return Promise.reject(error)
})
/**
 * @description 返回状态判断(添加响应拦截器)
 */
axios.interceptors.response.use((res) => {
  // 对响应数据做些事
  let { data } = res
  if (data.code === !200) {
    this.$message({
      dangerouslyUseHTMLString: true,
      type: 'error',
      message: '<strong>' + res.statusText + '</strong>'
    })
    return Promise.reject(res)
  } else {
    if (data.code === 'CMN_1000') {
      window.location.href = process.env.CAS_ROOT + '/cas/login?service=' + process.env.API_ROOT + '/idms-service/redirect/to/frontend?currentPath=' + data.message
      return Promise.reject(res)
    }
    return res
  }
}, (error) => {
  return Promise.reject(error)
})

/**
 * @description 返回一个Promise(发送post请求)
 */
export function fetchPost (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
/**
 * @description 返回一个Promise(发送post请求)
 */
export function fetchPostJson (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params, {headers: {'Content-Type': 'application/json;charset=UTF-8'}})
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
/**
 * @description 返回一个Promise(发送post请求)
 */
export function fetchPostFile (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params, {headers: {'Content-Type': 'multipart/form-data'}})
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
/**
 * @description 返回一个Promise(发送put请求)
 */
export function fetchPut (url, params) {
  return new Promise((resolve, reject) => {
    axios.put(url, params)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
/**
 * @description 返回一个Promise(发送put请求)
 */
export function fetchPutJson (url, params) {
  return new Promise((resolve, reject) => {
    axios.put(url, params, {headers: {'Content-Type': 'application/json;charset=UTF-8'}})
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
/**
 * @description 返回一个Promise(发送get请求)
 */
export function fetchGet (url, param) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params: param})
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

/**
 * @description 返回一个Promise(发送delete请求)
 */

export function fetchDel (url, param) {
  return new Promise((resolve, reject) => {
    axios.delete(url, {params: param,
      paramsSerializer: param => {
        return qs.stringify(param, { indices: false })
      }})
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

/**
 * @description 返回一个Promise(发送get请求)
 */
export function fetchGetDownload (url, param) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params: param, responseType: 'blob'})
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

/**
 * @description 返回一个Promise(发送get请求)
 */
export function fetchGetPicStream (url, param) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params: param, responseType: 'arraybuffer'})
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
