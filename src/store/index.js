import Vue from "vue";
import Vuex from "vuex";

import person from "./person.module";
import task from "./task.module";
import layout from "./layout.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    person,
    task,
    layout
  }
});
