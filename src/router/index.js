import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/home',
    component: () => import(/* webpackChunkName: "layout" */ '@/layout')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About')
  },
  {
    path: '/caseshow',
    name: 'CaseShow',
    component: () => import(/* webpackChunkName: "caseShow" */ '@/views/CaseShow')
  },
  {
    path: '/culturalwall',
    name: 'CulturalWall',
    component: () => import(/* webpackChunkName: "culturalWall" */ '@/views/CulturalWall')
  },
  {
    path: '/shopsign',
    name: 'ShopSign',
    component: () => import(/* webpackChunkName: "shopSign" */ '@/views/ShopSign')
  },
  {
    path: '/luminouswords',
    name: 'LuminousWords',
    component: () => import(/* webpackChunkName: "luminousWords" */ '@/views/LuminousWords')
  },
  {
    path: '/businesscard',
    name: 'BusinessCard',
    component: () => import(/* webpackChunkName: "businessCard" */ '@/views/BusinessCard')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '@/views/Contact')
  },
  {
    path: '/contact/1',
    component: () => import(/* webpackChunkName: "contact1" */ '@/views/Contact/Contact1')
  },
  {
    path: '/contact/2',
    component: () => import(/* webpackChunkName: "contact2" */ '@/views/Contact/Contact2')
  },
  {
    path: '/contact/3',
    component: () => import(/* webpackChunkName: "contact3" */ '@/views/Contact/Contact3')
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
