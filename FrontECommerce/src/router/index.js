import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/components/Home.vue";
import Product from "@/components/Product.vue";
import Service from "@/components/Service.vue";
import Connexion from "@/components/Connexion.vue";


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: Product
  },
  {
    path: '/connexion',
    name: 'Connexion',
    component: Connexion
  },
  {
    path: '/services',
    name: 'Service',
    component: Service
  }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/products',
      name: 'products',
      component: Product
    },
    {
      path: '/connexion',
      name: 'Connexion',
      component: Connexion
    },
    {
      path: '/services',
      name: 'Service',
      component: Service
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
})

export default router
