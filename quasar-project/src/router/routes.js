
const routes = [
  {
    path: '/',
    redirect:'/login',
    component: () => import('src/layouts/AuthLayout.vue'),
    children: [
      { path: '/login', component: () => import('src/pages/LoginPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
