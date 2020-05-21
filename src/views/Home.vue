<template>
  <div>
    <v-crumb :pathList="pathList"></v-crumb>
    <div class="area-common-style">首页</div>
  </div>
</template>

<script>
import VCrumb from '@/components/Crumb'
export default {
  name: 'Home',
  components: {VCrumb},
  data () {
    return {
      pathList: [
        {name: '系统首页', path: '/home', icon: 'el-wn-icon-home'}
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
