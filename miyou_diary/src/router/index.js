import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/Main.vue'

import Home from '../views/HomePage/HomePage.vue'
import Commun from '../views/Community/Community.vue'
import Info from '../views/InfoMation/InfoMation.vue'
import OneSelf from '../views/OneSelf/OneSelf.vue'

import Diary from '../components/Diary/Diary.vue'
import DiaryDetail from '../components/Diary/DiaryDetail.vue'

import Load from '../views/Load.vue'
import Login from '../views/UserLogin/login.vue'
import Register from '../views/UserLogin/register.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [{
    path: '/',
    name: 'Load',
    component:Load,
    redirect:'login',
    children: [{
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/register',
      name: 'Register',
      component: Register
    }]
  }, {
    path: '/app',
    name: 'Main',
    component: Main,
    redirect: '/home', //设置第一个子路由为默认
    children: [{
        path: '/home',
        name: 'Home',
        component: Home,
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
  }, {
    path: '/diary',
    name: 'Diary',
    component: Diary,
    children: [{
      path: 'diaryDetail',
      name: 'DiaryDetail',
      component: DiaryDetail,
    }]
  }, ]
})
