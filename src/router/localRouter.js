export const localRouter = [
  {
    path: '/home',
    name: 'home',
    component: r => require(['../views/Home'], r),
    iconCls: 'iconfont el-wn-icon-home',
    meta: { title: '首页' }
  },
  {
    path: '/user',
    name: 'user',
    component: r => require(['../views/Main'], r),
    redirect: '/user/userManagement',
    iconCls: 'el-icon-menu',
    meta: { title: '用户' },
    children: [
      {
        path: '/user/userManagement',
        name: '/userManagement',
        component: r => require(['../views/user/UserManagement'], r),
        iconCls: 'el-icon-menu',
        meta: { title: '用户管理' }
      },
      {
        path: '/user/userOrder',
        name: 'userOrder',
        component: r => require(['../views/user/UserOrder'], r),
        iconCls: 'el-icon-menu',
        meta: { title: '用户订单' }
      }
    ]
  }
]
