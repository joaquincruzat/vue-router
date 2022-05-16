import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Contacto from '../views/Contacto.vue'
import Servicios from "../views/Servicios.vue"
import Blog from '../views/Blog.vue'
import Comentarios from '../components/Comentarios.vue'
import NotFound from '../views/NotFound.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: Inicio
  },
  {
    path: '/servicios',
    component: Servicios
    },
  {
    path: '/blog/:entrada',
    component: Blog,
    children: [
      {
        path: 'comentarios',
        component: Comentarios,
        name: 'comentarios',
      }
    ]
  },    
  {
    path: '/contacto',
    component: Contacto,
    name: 'contacto'
  },
  {
    path: '*',
    component: NotFound
  }
  
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router