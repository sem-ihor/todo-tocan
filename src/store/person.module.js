import { v4 as uuidv4 } from "uuid";

const state = {
  users: [
    {
      person_id: uuidv4(),
      person_email: "igors@gmail.com",
      person_name: "Ihor",
      person_surname: "Semenovich",
      person_lastname: "Grigor..."
    },
    {
      person_id: uuidv4(),
      person_email: "igor1s@gmail.com",
      person_name: "Ivan",
      person_surname: "Budco",
      person_lastname: "Grigor..."
    }
  ]
};

const getters = {
  users: state => state.users
};

const actions = {
  changeName(state, payload) {
    state.commit("changeName", payload);
  }
};

const mutations = {
  changeName(state, payload) {
    console.log(payload);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
