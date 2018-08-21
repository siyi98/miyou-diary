import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/Main.vue'
import Home from '../components/HomePage.vue'
import Commun from '../components/Community.vue'
import Info from '../components/InfoMation.vue'
import OneSelf from '../components/OneSelf.vue'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [{
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/commun',
      name: 'Commun',
      component: Commun
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    },
    {
      path: '/oneself',
      name: 'OneSelf',
      component: OneSelf
    }
  ]
})
