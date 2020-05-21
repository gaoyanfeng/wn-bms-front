<template>
  <div class="tags" v-if="showTags">
    <ul>
      <li class="tags-li" v-for="(item,index) in tagsList" :class="{'active': isActive(item.path)}" :key="index">
        <router-link :to="item.path" class="tags-li-title">
          {{item.meta && item.meta.title}}
        </router-link>
        <span class="tags-li-icon" @click="closeTagsHandle(index)"><i class="el-icon-close"></i></span>
      </li>
    </ul>
    <div class="tags-close-box">
      <el-dropdown @command="tagsHandle" trigger="click">
        <span class="el-dropdown-link">标签选项
          <i class="el-icon-caret-bottom"></i>
        </span>
        <el-dropdown-menu size="small" slot="dropdown">
          <el-dropdown-item command="other">关闭其他</el-dropdown-item>
          <el-dropdown-item command="all">关闭所有</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <!-- 全屏显示 -->
    <div class="btn-fullscreen" @click="fullScreenHandle">
      <el-tooltip effect="dark" :content="isFullscreen ? `取消全屏` : `全屏`" placement="bottom">
        <i :class="{'el-icon-rank': isFullscreen, 'el-icon-full-screen': !isFullscreen}"></i>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
import bus from '../libs/vueInstance'
export default {
  name: 'Tags',
  data () {
    return {
      tagsList: [],
      isFullscreen: false
    }
  },
  computed: {
    showTags() {
      return this.tagsList.length > 0
    }
  },
  methods: {
    isActive(path) {
      return path === this.$route.fullPath
    },
    /**
     *@desc 单个关闭标签
     */
    closeTagsHandle (index) {
      const delItem = this.tagsList.splice(index, 1)[0]
      const item = this.tagsList[index] ? this.tagsList[index] : this.tagsList[index - 1]
      if (item) {
        delItem.path === this.$route.fullPath && this.$router.push(item.path)
      }else{
        this.$router.push('/home')
      }
    },
    /**
     * @desc 标签下拉操作按钮事件
     */
    tagsHandle (command) {
      command === 'other' ? this.closeOther() : this.closeAll()
    },
    /**
     * @desc 关闭其他标签
     */
    closeOther(){
      const curItem = this.tagsList.filter(item => {
        return item.path === this.$route.fullPath
      })
      this.tagsList = curItem
    },
    /**
     * @desc 关闭全部标签
     */
    closeAll(){
      this.tagsList = []
      this.$router.push('/home')
    },
    /**
     * @desc 设置标签
     */
    setTags(route){
      const isExist = this.tagsList.some(item => {
        return item.path === route.fullPath
      })
      if(!isExist){
        if(this.tagsList.length >= 10){
          this.tagsList.shift()
        }
        this.tagsList.push({
          name: route.name,
          label: route.label,
          path: route.fullPath,
          iconCls: route.iconCls,
          meta: route.meta
        })
      }
      bus.$emit('tags', this.tagsList)
    },
    /**
     * @desc 全屏展示事件
     */
    fullScreenHandle () {
      let element = document.documentElement
      if (this.isFullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen()
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen()
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen()
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen()
        }
      }
      this.isFullscreen = !this.isFullscreen
    },
  },
  watch:{
    $route(newValue, oldValue){
      this.setTags(newValue)
      console.log(newValue)
    }
  },
  created () {
    this.setTags(this.$route)
  }
}
</script>

<style lang="stylus" scoped>
  .tags
    position relative
    height 30px
    overflow hidden
    background #fff
    padding-right 120px
    box-shadow 0 5px 10px #ddd
    border-top 1px solid #f5f5f5
  .tags ul
    box-sizing border-box
    width 100%
    height 100%
  .tags-li
    float left
    /*margin 3px 5px 2px 3px*/
    /*border-radius 3px*/
    font-size 12px
    overflow hidden
    cursor pointer
    height 28px
    line-height 28px
    /*border 1px solid #e9eaec*/
    background #fff
    padding 0 5px 0 12px
    vertical-align middle
    color #666
    -webkit-transition all .3s ease-in
    -moz-transition all .3s ease-in
    transition all .3s ease-in
  .tags-li:not(.active):hover
    background #f8f8f8
  .tags-li.active
    background #E3E6EE
  .tags-li-title
    float left
    max-width 80px
    overflow hidden
    white-space nowrap
    text-overflow ellipsis
    margin-right 5px
    color #666
  .tags-li.active .tags-li-title
    color #666
  .tags-close-box
    position absolute
    right 30px
    top 0
    box-sizing border-box
    padding-top 1px
    text-align center
    width 110px
    height 30px
    line-height 28px
    background #fff
    box-shadow -3px 0 15px 3px rgba(0, 0, 0, .1)
    z-index 10
    cursor pointer
  .btn-fullscreen
    position absolute
    right 0
    top 0
    width 30px
    height 30px
    text-align center
    cursor pointer
    font-size 20px
    background #ffffff
    &>i
      margin-top 5px
    &.el-icon-rank
      transform rotate(45deg)
      margin-right 5px
      font-size 20px
</style>
