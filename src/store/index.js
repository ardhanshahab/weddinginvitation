import Vue from "vue";
import Vuex from "vuex";
//import createPersistedState from "vuex-persistedstate";


import pokemon from "./pesan.store";


Vue.use(Vuex);

// const persistedDataState = createPersistedState({
//   paths: ["demo", "auth.token"],
// });

export default new Vuex.Store({
//   plugins: [persistedDataState],
  modules: {
    pokemon: {
      namespaced: true,
      ...pokemon,
    },
    
  },
});