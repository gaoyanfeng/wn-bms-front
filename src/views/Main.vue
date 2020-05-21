<template>
  <div class="wrapper">
    <!--头部导航-->
    <v-header></v-header>
    <!--左侧菜单-->
    <v-sidebar></v-sidebar>
    <div class="content-box" :class="{'content-collapse': collapse}">
      <!--标签栏-->
      <v-tags></v-tags>
      <div class="content">
        <transition name="move" mode="out-in">
          <keep-alive :include="tagsList">
            <router-view></router-view>
          </keep-alive>
        </transition>
        <el-backtop target=".content"></el-backtop>
      </div>
    </div>
  </div>
</template>

<script>
import VHeader from '../components/Header'
import VSidebar from '../components/Sidebar'
import VTags from '../components/Tags'
import bus from '../libs/vueInstance'
export default {
  name: 'Main',
  components: {VHeader, VSidebar, VTags},
  data () {
    return {
      collapse: false,
      tagsList: []
    }
  },
  created () {
    bus.$on('collapse-content', res => {
      this.collapse = res
    })
    // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
    bus.$on('tags', res => {
      let list = []
      for (let i = 0, len = res.length; i < len; i++) {
        res[i].name && list.push(res[i].name)
      }
      this.tagsList = list
    })
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    width 100%
    height 100%
    overflow hidden
  .content-box
    position absolute
    left 180px
    right 0
    top 60px
    bottom 0
    padding-bottom 30px
    -webkit-transition left .3s ease-in-out
    transition left .3s ease-in-out
    background #f5f5f5
  .content
    width auto
    height 100%
    padding 10px
    overflow-y scroll
    box-sizing border-box
  .content-collapse
    left: 65px
</style>
