import Vue from 'vue'
import VueRouter from 'vue-router'
import note from '../views/dashboard/note.vue'
// for auth here
import login from '../views/auth/login.vue'
import registration from '../views/auth/registration.vue'
import forget_pass from '../views/auth/forgetpass.vue'
import settings from '../views/auth/settings.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/app/note',
    name: 'note',
    component: note
  },
  // auth here
  {
    path: '/',
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
  {
    path: '/settings',
    name: 'setting',
    component:settings
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
