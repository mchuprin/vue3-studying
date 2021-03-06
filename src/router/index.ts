import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/components/PageLayout.vue'),
    children: [
      {
        path: 'posts/:id',
        component: () => import('@/modules/posts/Posts.vue'),
        name: 'Posts',
        meta: { title: 'Posts' },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // linkActiveClass: 'active-menu-item',
});

export default router;
