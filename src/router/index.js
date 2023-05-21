import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import Rwd from '../views/Rwd.vue'
// import Vuejs from '../views/Vuejs.vue'
import Reactjs from '../views/Reactjs.vue'
import Html5 from '../views/Html5.vue'
import Nodejs from '../views/Nodejs.vue'
import NotFoundComponent from '../views/NotFoundComponent.vue'
import Course from '../views/Course/index.vue'

import Guide from '../views/About/Guide.vue'
import Changelog from '../views/About/Changelog.vue'
import Github from '../views/About/Github.vue'
import Reference from '../views/About/Reference.vue'
import AboutHome from '../views/About/index.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/rwd',
    name: 'rwd',
    component: () => import('../views/Rwd.vue')
  },
  {
    path: '/vuejs',
    name: 'vuejs',
    component: () => import('../views/Vuejs.vue')
  },
  {
    path: '/reactjs',
    name: 'reactjs',
    component: Reactjs
  },
  {
    path: '/html5',
    name: 'html5',
    component: Html5
  },
  {
    path: '/nodejs',
    name: 'nodejs',
    component: Nodejs
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    children: [
      {
        path: "",
        component: AboutHome,
      },
      {
        path: "guide",
        component: Guide,
      },
      {
        path: "changelog",
        component: Changelog,
      },
      {
        path: "github",
        component: Github,
      },
      {
        path: "reference",
        component: Reference,
      },
    ]
  },
  {
    path: '/course',
    name: 'course',
    component: Course
  },
  {
    path: '/course/:id',
    name: 'course_id',
    component: () => import('../views/Course/_id.vue')
  },
  { path: '/:pathMatch(.*)', component: NotFoundComponent }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
