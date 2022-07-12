import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Tarefa from '../components/Tarefa.vue'
import FormRegistro from '../views/FormRegistro'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  


    {
    path: '/tarefa',
    name: 'tarefa',
    component: function () {
    return import('../components/Tarefa.vue')
    }
    },

    {
    path: '/Registrar',
    name: 'formregistro',
    component: function () {
    return import('../views/FormRegistro.vue')
    }
    }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
