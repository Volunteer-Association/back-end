import HomeView from '../views/HomeView.vue'

const Routes = [
  {
    path: '/auth/login',
    name: 'login',
    component: () => import("@/views/auth/Login.vue")
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  }
]
export default Routes