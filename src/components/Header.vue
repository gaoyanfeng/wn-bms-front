<template>
  <div class="header">
    <!-- 折叠按钮 -->
    <div class="collapse-btn" @click="collapseChangeHandle">
      <i v-if="!collapse" class="el-icon-s-fold"></i>
      <i v-else class="el-icon-s-unfold"></i>
    </div>
    <div class="bms-logo">后台管理系统</div>
    <div class="header-right">
      <div class="header-operate-box">
        <!-- 消息中心 -->
        <div class="btn-bell">
          <el-tooltip effect="dark" :content="messageLength ? `有${messageLength}条未读消息` : `消息中心`" placement="bottom">
            <router-link to="/tabs">
              <i class="el-icon-bell"></i>
            </router-link>
          </el-tooltip>
          <span class="btn-bell-badge" v-if="messageLength"></span>
        </div>
        <!-- 用户头像 -->
        <div class="user-avator">
          <img src="@/assets/images/common/img.jpg" />
        </div>
        <!-- 用户名下拉菜单 -->
        <el-dropdown class="user-name" trigger="click" @command="commandHandle">
                    <span class="el-dropdown-link">
                      {{username}}
                        <i class="el-icon-caret-bottom"></i>
                    </span>
          <el-dropdown-menu slot="dropdown">
            <a>
              <el-dropdown-item>个人中心</el-dropdown-item>
            </a>
            <a>
              <el-dropdown-item divided command="logout">退出登录</el-dropdown-item>
            </a>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import bus from '../libs/vueInstance'
export default {
  name: 'Header',
  data () {
    return {
      collapse: false,
      messageLength: 2,
      username: '高岩峰'
    }
  },
  methods: {
    /**
     * @desc 左侧菜单展开或收起改变事件
     */
    collapseChangeHandle () {
      this.collapse = !this.collapse
      bus.$emit('collapse', this.collapse)
    },
    /**
     * @desc 下拉列表选择事件
     */
    commandHandle (command) {
      if (command === 'logout') {

      }
    }
  },
  mounted () {
    if (document.body.clientWidth < 1500) {
      this.collapseChangeHandle()
    }
  }
}
</script>

<style lang="stylus" scoped>
  .header
    position relative
    box-sizing border-box
    width: 100%
    height: 60px
    background #ffffff
    .collapse-btn
      float left
      padding 0 20px
      cursor pointer
      line-height 60px
    .bms-logo
      float left
      width 180px
      line-height 60px
      font-size 16px
  .header-right
    float right
    padding-right 30px
  .header-operate-box
    display flex
    height 60px
    align-items center
  .btn-bell
    position relative
    width 30px
    height 30px
    text-align center
    border-radius 15px
    font-size 24px
    cursor pointer
    margin-left 10px
    &.el-icon-bell
      color: #fff
  .btn-bell-badge
    position absolute
    right 0
    top -2px
    width 8px
    height 8px
    border-radius 4px
    background #f56c6c
    color #ffffff
  .user-name
    margin-left: 10px
    color #333333
  .user-avator
    margin-left: 20px
  .user-avator img
    display block
    width 40px
    height 40px
    border-radius 50%
  .el-dropdown-link
    color #333333
    cursor pointer
  .el-dropdown-menu__item
    text-align: center

</style>
