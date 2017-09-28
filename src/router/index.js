import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import home from '@/components/home'
import about from '@/components/about'
import document from '@/components/document'
import noFound from '@/components/404'
import study from '@/vues/study'
import work from '@/vues/work'
import hobby from '@/vues/hobby'
import slider from '@/vues/slider'
import user from '@/components/user'
let router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior (to, from, savePosition) { // 点击浏览器的前进后退或切换导航触发
    // console.log(to) // 要进入的路由对象 要去想哪里
    // console.log(from) // 离开的路由对象 从哪里来
    // console.log(savePosition)// 记录滚动条的坐标 点击前进后退的时候记录值
    /* if (savePosition) {
      return savePosition
    } else {
      return { x: 0, y: 0 }
    } */
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  },
  routes: [{
    path: '/',
    component: home
  },
  {
    path: '/user/:tip/:userId?', // /user/tip/1  /user/2 /user ?正则中匹配0次或者多次
    component: user
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/about', // 注意：如果设置了默认的子路由就不要设置name属性了
    component: about,
    children: [{
      path: '', // 默认的子路由
      name: 'about',
      component: study
    },
    {
      path: '/work', // /work
      name: 'work',
      component: work
    },
    {
      path: '/hobby', // /hobby
      name: 'hobby',
      component: hobby
    }
    ]
  },
  {
    path: '/document',
    name: 'document',
      /* component: document,
       alias: '/index' */
      // alias 的意思就是访问index的时候就能匹配到home
    components: {
      default: document,
      slider: slider
    }
  },
  {
    path: '*',
      // redirect: '/home'重定向
      // redirect: {path: 'home'}
      // redirect: {name: 'home'}
    redirect: (to) => {
        // 动态设置重定向路径
        // 目标路由对象，就是访问的路径的路由信息
        // console.log(to)
        // return '/home'
      if (to.path === '/123') {
        return '/home'
      } else if (to.path === '/456') {
        return '/document'
      } else {
        return '/about'
      }
    }
  }
  ]
})
export default router
