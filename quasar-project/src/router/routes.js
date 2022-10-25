
const routes = [
  {
    path: '/',

    component: () => import('src/layouts/AuthLayout.vue'),
    children: [
      { path: '/', component: () => import('src/pages/HomePage.vue') },
      { path: '/staff/login', component: () => import('src/pages/admin/LoginPage.vue') },
      { path: '/staff/signin', component: () => import('src/pages/admin/SignIn.vue') },
      { path: '/user/login', component: () => import('src/pages/user/SignIn.vue') }
    ]
  },
  {
    path: '/',
    redirect: '/home',

    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      { path: '/staff/home', component: () => import('src/pages/admin/HomePage.vue') },
      { path: '/history', component: () => import('src/pages/HistoryPage.vue') },
      { path: '/user/home', component: () => import('src/pages/user/HomePageSt.vue') },
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
