import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/home',
    component: () => import(/* webpackChunkName: "about" */ '@/layout')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Home')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About')
  },
  {
    path: '/caseshow',
    name: 'CaseShow',
    component: () => import(/* webpackChunkName: "about" */ '@/views/CaseShow')
  },
  {
    path: '/culturalwall',
    name: 'CulturalWall',
    component: () => import(/* webpackChunkName: "about" */ '@/views/CulturalWall')
  },
  {
    path: '/shopsign',
    name: 'ShopSign',
    component: () => import(/* webpackChunkName: "about" */ '@/views/ShopSign')
  },
  {
    path: '/luminouswords',
    name: 'LuminousWords',
    component: () => import(/* webpackChunkName: "about" */ '@/views/LuminousWords')
  },
  {
    path: '/businesscard',
    name: 'BusinessCard',
    component: () => import(/* webpackChunkName: "about" */ '@/views/BusinessCard')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
