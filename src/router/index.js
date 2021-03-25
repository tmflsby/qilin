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
  // {
  //   path: '/contact',
  //   name: 'Contact',
  //   component: () => import(/* webpackChunkName: "contact" */ '@/views/IndustryNews')
  // },
  {
    path: '/industrynews/1',
    component: () => import(/* webpackChunkName: "industryNews1" */ '@/views/IndustryNews/IndustryNews1')
  },
  {
    path: '/industrynews/2',
    component: () => import(/* webpackChunkName: "industryNews2" */ '@/views/IndustryNews/IndustryNews2')
  },
  {
    path: '/industrynews/3',
    component: () => import(/* webpackChunkName: "industryNews3" */ '@/views/IndustryNews/IndustryNews3')
  },
  {
    path: '/industrynews/4',
    component: () => import(/* webpackChunkName: "industryNews4" */ '@/views/IndustryNews/IndustryNews4')
  },
  {
    path: '/industrynews/5',
    component: () => import(/* webpackChunkName: "industryNews5" */ '@/views/IndustryNews/IndustryNews5')
  },
  {
    path: '/industrynews/6',
    component: () => import(/* webpackChunkName: "industryNews6" */ '@/views/IndustryNews/IndustryNews6')
  },
  {
    path: '/industrynews/7',
    component: () => import(/* webpackChunkName: "industryNews7" */ '@/views/IndustryNews/IndustryNews7')
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
