// 组织管理
export const constRouter = [
  {
    path: '/',
    name: 'main',
    component: r => require(['../views/Main'], r),
    iconCls: 'iconfont el-wn-icon-home',
    hidden: true,
    meta: { title: '首页' },
    children: [
      {
        path: '/home',
        name: 'home',
        component: r => require(['../views/Home'], r),
        iconCls: 'iconfont el-wn-icon-home',
        meta: { title: '首页' }
      }
    ]
  }
]
