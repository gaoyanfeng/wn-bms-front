<template>
  <div>
    <v-crumb :pathList="pathList"></v-crumb>
    <div class="area-common-style">用户订单</div>
  </div>
</template>

<script>
import VCrumb from '@/components/Crumb'
export default {
  name: 'UserOrder',
  components: {VCrumb},
  data () {
    return {
      pathList: [
        {name: '用户', path: '/user', icon: 'el-icon-user-solid'},
        {name: '用户订单', path: '/user/userManagement', icon: 'el-icon-user-solid'}
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
