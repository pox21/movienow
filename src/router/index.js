import { createRouter, createWebHashHistory } from 'vue-router';
import FilmsPage from '@/views/FilmsPage.vue';
import FilmPage from '@/views/FilmPage.vue';
import NotFound from '@/views/NotFound.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FilmsPage
    },
    {
      path: '/:id',
      name: 'film',
      component: FilmPage
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    }
  ]
});

export default router;
