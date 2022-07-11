import Vue from "vue";
import Vuex from "vuex";
import { state, mutations } from "@/store/index.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  mutations
});

export default previewComponent => {
  // https://vuejs.org/v2/guide/render-function.html
  return {
    store,
    render(createElement) {
      return createElement(previewComponent);
    }
  };
};
