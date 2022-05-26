import Vue from 'vue'
import Vuex from 'vuex'
import * as base from "./modules/base"
import * as user from "./modules/user"
import * as auth from "./modules/auth"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    base,
    user,
    auth
  }
})
