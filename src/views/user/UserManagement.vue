<template>
  <div>
    <v-crumb :pathList="pathList"></v-crumb>
    <div class="area-common-style">
      <el-row>
        <el-col :span="20">
          <el-input size="medium" clearable v-model="queryCriteria.name" placeholder="用户名称" style="width: 225px"></el-input>
          <el-button name="orange" size="medium" type="primary" @click="queryBtnHandle">查询</el-button>
        </el-col>
        <el-col :span="4" align="right">
          <el-button name="blue" size="medium" type="primary" @click="addBtnHandle">新增</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="area-common-style">
      <el-table :data="tableData">
        <el-table-column header-align="center" label="序号" min-width="55" align="center" fixed="left">
          <template slot-scope="scope">{{scope.$index + 1}}</template>
        </el-table-column>
        <el-table-column header-align="center" label="用户名称" min-width="85" align="left">
          <template slot-scope="scope">{{scope.row.name}}</template>
        </el-table-column>
        <el-table-column header-align="center" label="公司名称" min-width="220" align="left">
          <template slot-scope="scope">{{scope.row.company}}</template>
        </el-table-column>
        <el-table-column header-align="center" label="用户编号" min-width="215" align="center">
          <template slot-scope="scope">{{scope.row.code}}</template>
        </el-table-column>
        <el-table-column header-align="center" label="手机号" min-width="115" align="center">
          <template slot-scope="scope">{{scope.row.phone}}</template>
        </el-table-column>
        <el-table-column header-align="center" label="用户状态" min-width="85" align="center">
          <template slot-scope="scope">{{scope.row.status}}</template>
        </el-table-column>
        <el-table-column header-align="center" label="余额" min-width="100" align="right">
          <template slot-scope="scope">{{scope.row.price}}</template>
        </el-table-column>
        <el-table-column header-align="center" label="数量" min-width="100" align="right">
          <template slot-scope="scope">{{scope.row.num}}</template>
        </el-table-column>
        <el-table-column header-align="center" label="创建时间" min-width="160" align="center">
          <template slot-scope="scope">{{scope.row.createTime}}</template>
        </el-table-column>
        <el-table-column header-align="center" label="修改时间" min-width="140" align="center">
          <template slot-scope="scope">{{scope.row.modifyTime}}</template>
        </el-table-column>
        <el-table-column header-align="center" label="备注" min-width="300" align="center">
          <template slot-scope="scope">{{scope.row.desc}}</template>
        </el-table-column>
        <el-table-column header-align="center" label="操作" width="120" align="left" fixed="right">
          <template slot-scope="scope">
            <el-button name="operate" type="primary" size="small">修改</el-button>
            <el-button name="operate" type="primary" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row style="margin-top: 20px">
        <el-col :span="24" align="right">
          <el-pagination
            @size-change="sizeChangeHandle"
            @current-change="currentChangeHandle"
            :current-page="currentPage"
            :page-sizes="[10, 20, 50, 100]"
            :page-size="pageSize"
            background
            layout="total,sizes,prev,pager,next,jumper"
            :total="dataTotal">
          </el-pagination>
        </el-col>
      </el-row>
    </div>
    <!--编辑用户-->
    <edit-user v-if="userVisible" @closeDialog="closeDialog"></edit-user>
  </div>
</template>

<script>
import VCrumb from '@/components/Crumb'
import EditUser from './dialog/EditUser'
export default {
  name: 'UserManagement',
  components: {VCrumb, EditUser},
  data () {
    return {
      currentPage: 1,
      pageSize: 20,
      dataTotal: 0,
      pathList: [
        {name: '用户', path: '/user', icon: 'el-icon-user-solid'},
        {name: '用户管理', path: '/user/userManagement', icon: 'el-icon-user-solid'}
      ],
      queryCriteria: {
        name: ''
      },
      tableData: [
        {
          name: '上官金红',
          company: '浙江微能科技有限公司',
          code: 'wn202005151527339872783',
          phone: '15267133432',
          status: '满血复活',
          price: 9999999.99,
          num: 100000000,
          createTime: '2020-05-15 15:30:11',
          modifyTime: '2020-05-15 15:30',
          desc: '由于微信限制一个服务号只能配置一个网页授权域名， 又不可能给每个环境单独配一个服务号，这样不仅需要成本而且很浪费资源，下面小编给大家带来了解决一个微信号同时支持多个环境网页授权问题，感兴趣的朋友一起看看吧'
        }
      ],
      userVisible: false
    }
  },
  methods: {
    /**
     * @desc 查询事件
     */
    queryBtnHandle () {

    },
    /**
     * @desc 新增按钮事件
     */
    addBtnHandle () {
      this.userVisible = true
    },
    /**
     * @desc 关闭dialog
     */
    closeDialog (ref, data) {
      if (ref === 'cancelDialog') {
        this.userVisible = false
      }
    },
    /**
     * @desc 每页数据条数变化
     */
    sizeChangeHandle (size) {
      this.pageSize = size
      this.currentPage = 1
    },
    /**
     * @desc 翻页时当前页码
     */
    currentChangeHandle (current) {
      this.currentPage = current
    },
    /**
     * @desc 提示信息显示
     */
    messagePrompt (type, message, duration, showClose) {
      this.$message(
        {
          type: type || 'error',
          message: message,
          showClose: showClose || true,
          dangerouslyUseHTMLString: true,
          duration: duration || 2000
        }
      )
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
