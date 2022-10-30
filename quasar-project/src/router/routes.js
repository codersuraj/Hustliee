
const routes = [
  {
    path: '/',

    component: () => import('src/layouts/AuthLayout.vue'),
    meta: {auth:false},
    children: [
      { path: '/', component: () => import('src/pages/HomePage.vue'),  meta: {auth:false} },
      { path: '/staff/login', component: () => import('src/pages/admin/LoginPage.vue') ,  meta: {auth:false}},
      { path: '/staff/signin', component: () => import('src/pages/admin/SignIn.vue'),  meta: {auth:false} },
      { path: '/user/login', component: () => import('src/pages/user/SignIn.vue'),  meta: {auth:false} }
    ]
  },
  {
    path: '/home',

    component: () => import('src/layouts/MainLayout.vue'),
    meta:{auth: true},
    children: [
      { path: '/staff/home', component: () => import('src/pages/admin/HomePage.vue'), meta: {auth:true} },
      { path: '/history', component: () => import('src/pages/HistoryPage.vue'), meta: {auth:true}  },
      { path: '/user/home', component: () => import('src/pages/user/HomePageSt.vue'), meta: {auth:true}  },
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
