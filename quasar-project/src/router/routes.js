
const routes = [
  {
    path: '/',

    component: () => import('src/layouts/AuthLayout.vue'),
    children: [
      { path: '/', component: () => import('src/pages/HomePage.vue') },
      { path: '/login', component: () => import('src/pages/admin/LoginPage.vue') },
      { path: '/signin', component: () => import('src/pages/admin/SignIn.vue') }
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
