<template>
  <div class="crumbs">
    <el-breadcrumb separator="/">
      <template v-for="(item, index) in pathList">
        <el-breadcrumb-item v-if="index < pathList.length - 1" :to="{ path: item.path }"><i :class="item.icon"></i>{{item.name}}</el-breadcrumb-item>
        <el-breadcrumb-item v-else>{{item.name}}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'Crumb',
  props: {
    pathList: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="stylus" scoped>
  .crumbs
    margin-bottom 15px
</style>
