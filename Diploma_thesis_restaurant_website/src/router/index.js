import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MenuView from '@/views/MenuView.vue';
import ContactView from '@/views/ContactView.vue';
import PortfolioView from '@/views/PortfolioView.vue';
import BlogsView from '@/views/BlogsView.vue';
import BlogView from '@/views/BlogView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/menu',
      name: 'menu',
      component: MenuView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/about',
      name: 'about',
      // ленивый импорт компонента для разделения кода
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioView,
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: BlogsView,
    },
    {
      path: '/article/:id', // Маршрут для просмотра отдельной статьи по ID
      name: 'blog',
      component: BlogView,
      props: true // Позволяет передавать параметры маршрута как пропсы
    }
  ]
});

export default router;