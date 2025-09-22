import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: () => import('../views/ClientesView.vue'),
      props: {titulo: 'Listado de Clientes'}
    },
    {
      path: '/agregar-clientes',
      name: 'agregar-clientes',
      component: () => import('../views/NuevoClienteView.vue'),
      props: {titulo: 'Agregar Clientes'}
    },
  ],
})

export default router
