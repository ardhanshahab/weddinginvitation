import axios from "axios";

const state = () => ({
  list: [],
  info: "",
});

const mutations = {
  setList(state, param) {
    state.list = param;
  },
  setInfo(state, param) {
    state.info = param;
  },
};

const actions = {
  fetchList(store) {
    axios.get('https://weddingtrial.hasura.app/api/rest/getpesan', {
        // params:{
        //     apiKey: "pub_730855c7e0a49a0ba5011d5b35542f58a9a7",
        //     country: "id",
        //     language: "in",
        //     category: "health"
        // }
    })
      
      .then((response) => {
        store.commit("setList", response.data);
        store.commit("setInfo", "");
        console.log("response", response)
      })
      .catch((error) => {
        store.commit("setInfo", error);
      });
  },

};

export default {
  state,
  mutations,
  actions,
}