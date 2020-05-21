<template>
  <div class="sidebar">
    <el-menu
        class="sidebar-el-menu"
        :default-active="$route.path"
        :collapse="collapse"
        background-color="#262c5b"
        text-color="#bfcbd9"
        active-text-color="orange"
        unique-opened="true"
        router>
      <template v-for="item in routers">
        <template v-if="item.children">
          <el-submenu :index="item.path" :key="item.name">
            <template slot="title" v-if="item.name !== 'main'">
              <i :class="item.iconCls"></i>
              <span slot="title">{{ item.meta.title }}</span>
            </template>
            <template v-for="subItem in item.children">
              <el-submenu v-if="subItem.children" :index="subItem.path" :key="subItem.name">
                <template slot="title">{{ subItem.meta.title }}</template>
                <el-menu-item v-for="(threeItem) in subItem.children" :key="threeItem.name" :index="threeItem.path">{{ threeItem.meta.title }}</el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="subItem.path" :key="subItem.name">{{ subItem.meta.title }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.path" :key="item.name">
            <i :class="item.iconCls"></i>
            <span slot="title">{{ item.meta.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import bus from '../libs/vueInstance'
import store from '@/vuex/store'
export default {
  name: 'Sidebar',
  data () {
    return {
      collapse: false,

    }
  },
  computed: {
    routers () {
      // return store.state.dynamicRouters
      return store.state.localRouter
    }
  },
  created () {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on('collapse', res => {
      this.collapse = res
      bus.$emit('collapse-content', this.collapse)
    })
  }
}
</script>

<style lang="stylus" scoped>
  .sidebar
    display block;
    position absolute
    left 0
    top 60px
    bottom 0
    text-align left
    overflow-y scroll
  .sidebar::-webkit-scrollbar
    width 0
  .sidebar-el-menu:not(.el-menu--collapse)
    width 180px
  .sidebar > ul
    height 100%
  .el-menu-item [class^=el-icon-] ,.iconfont
    display inline-block
    margin-right 5px
    width 24px
    text-align center
    font-size 18px
    vertical-align middle
    color #bfcbd9
  .el-menu--collapse>.el-menu-item [class^=el-icon-], .el-menu--collapse>.el-submenu>.el-submenu__title [class^=el-icon-]
    margin 0
    vertical-align middle
    width 24px
    text-align center
  .el-submenu__title i
    color #bfcbd9
  /deep/ .el-select__caret, .el-icon-arrow-down:before
          color #ffffff
</style>
