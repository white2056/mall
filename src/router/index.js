import vue from 'vue'
import vueRouter from 'vue-router'

const home = ()=> import('views/home/home')
const cart = ()=> import('views/cart/cart')
const category = ()=> import('views/category/category')
const profile = ()=> import('views/profile/profile')
const detail = ()=> import('views/detail/detail')

vue.use(vueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/cart',
    component: cart
  },
  {
    path: '/category',
    component: category
  },
  {
    path: '/profile',
    component: profile
  },
  {
    path: '/detail/:iid',
    component: detail
  }
]

const router = new vueRouter({
  routes,
  mode: 'history'
})

export default router