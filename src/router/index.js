import Vue from 'vue'
import Router from 'vue-router'
import {constRouter} from './routes'
import {localRouter} from './localRouter'

Vue.use(Router)

export default new Router({
  routes: [
    ...constRouter,
    ...localRouter
  ]
})
