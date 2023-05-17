
import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'
import shoppingCart from './shoppingCart'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    user,
    shoppingCart
  }
})
