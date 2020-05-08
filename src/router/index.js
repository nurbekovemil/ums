import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'
// front views
import Home from '../views/front/Home.vue'

// admin views
import mainLayout from '../views/admin/main-layout.vue'
import Dashboard from '../views/admin/dashboard/dashboard.vue'

import Universities from '../views/admin/university/universities.vue'
import Adduniversity from '../views/admin/university/add-university.vue'

import Faculties from '../views/admin/faculty/faculties.vue'
import Addfaculty from '../views/admin/faculty/add-faculty.vue'

import Students from '../views/admin/student/students.vue'
import Addstudent from '../views/admin/student/add-student.vue'
// user auth 
import Login from '../components/auth/login.vue'
import Register from '../components/auth/register.vue'

Vue.use(VueRouter)

  const routes = [
  {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        breadcrumb:[
          {text: 'Home'}
        ]
      }
    },
    {
      path:'/dashboard',
      component: mainLayout,
      meta:{
        requiresAuth: true,
      },
      children: [
        {
          path: '',
          name:'Dashboard',
          component: Dashboard,
          meta:{
            breadcrumb: [
              {
                text: 'Dashboard' 
              }
            ]
          }
        },
        {
          path: '/dashboard/universities',
          name: 'Universities',
          component: Universities,
          meta: {
            breadcrumb:[
              {text: 'Dashboard', href:'/dashboard'},
              {text: 'Universities'}
            ]
          }
        },
        {
          path: '/dashboard/adduniversity',
          name: 'Adduniversity',
          component: Adduniversity,
          meta: {
            breadcrumb:[
              {text: 'Dashboard', href: '/dashboard'},
              {text: 'Adduniversity'}
            ]
          }
        },
        {
          path: '/dashboard/faculties',
          name: 'Faculties',
          component: Faculties,
          meta: {
            breadcrumb: [
              {text: 'Dashboard', href:'/dashboard'},
              {text: 'Faculties'}
            ]
          }
        },
        {
          path: '/dashboard/addfaculty',
          name: 'Add faculty',
          component: Addfaculty,
          meta: {
            breadcrumb: [
              {text: 'Dashboard', href:'/dashboard'},
              {text: 'Add faculty'}
            ]
          }
        },
        {
          path: '/dashboard/allstudents',
          name: 'All students',
          component: Students,
          meta: {
            breadcrumb:[
              {text: 'Dashboard', href:'/dashboard'},
              {text: 'All students'}
            ]
          }
        },
        {
          path:'/dashboard/addstudent',
          name:'Add student',
          component: Addstudent
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=>{
  if(to.matched.some(record => record.meta.requiresAuth) && (!store.getters.isLoggedIn)){
    next('/login')
    return
  }
  if(to.path === '/login' && store.getters.isLoggedIn){
    next('/dashboard')
    return
  }
  if(to.path === '/register' && store.getters.isLoggedIn){
    next('/dashboard')
    return
  }
  next()
})
export default router
