import { v4 as uuidv4 } from "uuid";

const state = {
  tasks: [
    {
      task_id: uuidv4(),
      task_title: "some title",
      task_description: "desc...",
      task_person_id: ""
    },
    {
      task_id: uuidv4(),
      task_title: "some title",
      task_description: "desc...",
      task_person_id: ""
    }
  ]
};

const getters = {
  tasks: state => state.tasks
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
