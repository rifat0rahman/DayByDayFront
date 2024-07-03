import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/dashboard/HomeView.vue'
import about from '../views/dashboard/AboutView.vue'
// for auth here
import login from '../views/auth/login.vue'
import registration from '../views/auth/registration.vue'
import forget_pass from '../views/auth/forgetpass.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component:about
  },
  // auth here
  {
    path: '/login',
    name: 'login',
    component:login
  },
  {
    path: '/registration',
    name: 'registration',
    component:registration
  },
  {
    path: '/forget-pasword',
    name: 'forgetpass',
    component:forget_pass
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
