import { createStore } from 'vuex'


export default function (/* { ssrContext } */) {
  const Store = createStore({
  state: {
    verified: false
  },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
}