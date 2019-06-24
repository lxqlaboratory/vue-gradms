import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/',
    redirect: '/login'
  },

  {
    path: '/login',
    component: () => import('@/views/login/login'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/dashboard',
    component: Layout,
    hidden : true,
    children: [{
      path: 'index',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'dashboard', icon: 'dashboard' }
    }]
  },

  {
    path: '/personInformation',
    component: Layout,
    redirect: '/personInformation',
    name: 'personInformation',
    meta: { title: 'route.personInformation', icon: 'form' },
    children: [
      {
        path: 'changePassword',
        name: 'changePassword',
        component: () => import('@/views/personInformation/changePassword'),
        meta: { title: 'route.changePassword', icon: 'form' }
      },
      {
        path: 'schoolRoll',
        name: 'schoolRoll',
        component: () => import('@/views/personInformation/schoolRoll'),
        meta: { title: ('route.schoolRoll'), icon: 'form' }
      },
      {
        path: 'studentInformance',
        name: 'studentInformance',
        component: () => import('@/views/personInformation/studentInformance'),
        meta: { title: ('route.studentInformance'), icon: 'form' }
      }
    ]
  },
  {
    path: '/pygl',
    component: Layout,
    name: 'pygl',
    meta: {
      title: ('route.pygl'),
      icon: 'form'
    },
    children: [
      {
        path: 'dyzxzm',
        component: () => import('@/views/pygl/xjhpygl/dyzxzm'),
        name: 'dyzxzm',
        meta: { title: ('route.dyzxzm'), icon: 'form' }
      },
      {
        path: 'pyfacx',
        component: () => import('@/views/pygl/pyfayxsgrjh/pyfacx'),
        name: 'pyfacx',
        meta: { title: ('route.pyfacx'), icon: 'form' }
      },
      {
        path: 'showCultivate',
        hidden: true,
        component: () => import('@/views/pygl/pyfayxsgrjh/showCultivate'),
        name: 'showCultivate',
        meta: { title: ('route.pyfacx'), icon: 'form' }
      },
      {
        path: 'showCourse',
        hidden: true,
        component: () => import('@/views/pygl/pyfayxsgrjh/showCourse'),
        name: 'showCourse',
        meta: { title: ('route.pyfacx'), icon: 'form' }
      },
      {
        path: 'ckbrpyfa',
        component: () => import('@/views/pygl/pyfayxsgrjh/ckbrpyfa'),
        name: 'ckbrpyfa',
        meta: { title: ('route.ckbrpyfa'), icon: 'form' }
      },
      {
        path: 'zdckpyjh',
        component: () => import('@/views/pygl/pyfayxsgrjh/zdckpyjh'),
        name: 'ckbrpyfa',
        meta: { title: ('route.zdckpyjh'), icon: 'form' }
      },
      {
        path: 'kccx',
        component: () => import('@/views/pygl/kcyxk/kccx'),
        name: 'kccx',
        meta: { title: ('route.kccx'), icon: 'form' }
      },
      {
        path: 'jxapdc',
        component: () => import('@/views/pygl/kcyxk/jxapdc'),
        name: 'jxapdc',
        meta: { title: ('route.jxapdc'), icon: 'form' }
      },
      {
        path: 'xsxk',
        component: () => import('@/views/pygl/kcyxk/xsxk'),
        name: 'xsxk',
        meta: { title: ('route.xsxk'), icon: 'form' }

      },
      {
        path: 'cjcx',
        component: () => import('@/views/pygl/cjgl/cjcx'),
        name: 'cjcx',
        meta: { title: ('route.cjcx'), icon: 'form' }
      },
      {
        path: 'tjktbg',
        component: () => import('@/views/pygl/zqkh/tjktbg'),
        name: 'cjcx',
        meta: { title: ('route.tjktbg'), icon: 'form' }
      }
    ]
  },
  {
    path: '/byhxwgl',
    component: Layout,
    name: 'byhxwgl',
    meta: { title: ('route.byhxwgl'), icon: 'form' },
    children: [
      {
        path: 'txxwxx',
        name: 'txxwxx',
        component: () => import('@/views/byhxwgl/txxwxx'),
        meta: { title: ('route.txxwxx'), icon: 'form' }
      },
      {
        path: 'tjbysq',
        name: 'tjbysq',
        component: () => import('@/views/byhxwgl/tjbysq'),
        meta: { title: ('route.tjbysq'), icon: 'form' }
      },
      {
        path: 'xxsclw',
        name: 'xxsclw',
        component: () => import('@/views/byhxwgl/xxsclw'),
        meta: { title: ('route.xxsclw'), icon: 'form' }
      },
      {
        path: 'cklwpyjg',
        name: 'cklwpyjg',
        component: () => import('@/views/byhxwgl/cklwpyjg'),
        meta: { title: ('route.cklwpyjg'), icon: 'form' }
      },
      {
        path: 'txbsdbgg',
        name: 'txbsdbgg',
        component: () => import('@/views/byhxwgl/txbsdbgg'),
        meta: { title: ('route.txbsdbgg'), icon: 'form' }
      },
      {
        path: 'lrdbjv',
        name: 'lrdbjv',
        component: () => import('@/views/byhxwgl/lrdbjv'),
        meta: { title: ('route.lrdbjv'), icon: 'form' }
      },
      {
        path: 'pydbxxck',
        name: 'pydbxxck',
        component: () => import('@/views/byhxwgl/pydbxxck'),
        meta: { title: ('route.pydbxxck'), icon: 'form' }
      },
      {
        path: 'byxxhd',
        name: 'byxxhd',
        component: () => import('@/views/byhxwgl/byxxhd'),
        meta: { title: ('route.byxxhd'), icon: 'form' }
      },
      {
        path: 'xwxxhd',
        name: 'xwxxhd',
        component: () => import('@/views/byhxwgl/xwxxhd'),
        meta: { title: ('route.xwxxhd'), icon: 'form' }
      }
    ]
  },

  {
    path: '/dagl',
    component: Layout,
    name: 'dagl',
    alwaysShow: true,
    meta: { title: ('route.dagl'), icon: 'form' },
    children: [
      {
        path: 'txqnml',
        name: 'txqnml',
        component: () => import('@/views/dagl/txqnml'),
        meta: { title: ('route.txqnml'), icon: 'form' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
