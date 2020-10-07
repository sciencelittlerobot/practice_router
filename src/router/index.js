import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Home1 from '../components/Home1.vue'
import About1 from '../components/About1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/home1',
        component: Home1
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    children: [
      {
        path: '/about1',
        component: About1
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
