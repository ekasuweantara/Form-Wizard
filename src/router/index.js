import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import FormWizardView from '@/views/FormWizardView.vue'
import SummaryView from '@/views/SummaryView.vue'
import CustomErrorView from '@/views/Error/CustomErrorView.vue'
import Error404 from '@/views/Error/Error404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/form-wizard',
      name: 'FormWizardView',
      component: FormWizardView
    },
    {
      path: '/summary',
      name: 'SummaryView',
      component: SummaryView
    },
    {
      path: '/error',
      name: 'CustomErrorView',
      component: CustomErrorView
    },
    {
      path: '/404',
      name: 'Error404',
      component: Error404
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/404'
    },
  ]
})

export default router
