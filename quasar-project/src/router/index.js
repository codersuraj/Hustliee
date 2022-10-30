
import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory, routerKey } from 'vue-router'
import routes from './routes'
import { db, auth } from "../../firestore/firestore";
import Store from '../store/store'
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE)
  })



var loggedIn = false;


   async function state() {

   await auth.onAuthStateChanged((user) => {
  if (user) {
    loggedIn = true
    console.log("logg");
  }
  else {
    loggedIn = false
    console.log("out");
  }
    })
    }

  Router.beforeEach((to, from, next) => {

    state()
    console.log(loggedIn);

    if (to.meta.auth && !loggedIn)
    {
      console.log('out be');
      next('/');
    }
    else if (!to.meta.auth && loggedIn) {
      next('user/home')
    }
    else {
      next()
    }
  })

  return Router
})
