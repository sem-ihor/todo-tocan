import { v4 as uuidv4 } from "uuid";

const state = {
  users: []
};

const getters = {
  users: state => state.users
};

const actions = {
  addUser(state, users) {
    state.commit("addUser", users);
  },
  addDefaultUser(state, users) {
    state.commit("addDefaultUser", users);
  },
  deleteUser(state, person_id) {
    state.commit("deleteUser", person_id);
  },
  changeName(state, payload) {
    state.commit("changeName", payload);
  }
};

const mutations = {
  addUser(state) {
    state.users.push({
      person_id: uuidv4(),
      person_email: "",
      person_name: "",
      person_surname: "",
      person_lastname: ""
    });
  },
  addDefaultUser(state, users) {
    state.users = users;
  },
  deleteUser(state, person_id) {
    const elementIndexToUpdate = state.users.findIndex(
      user => user.person_id === person_id
    );
    if (elementIndexToUpdate) {
      state.users.splice(elementIndexToUpdate, 1);
    }
  },
  changeName(state, payload) {
    const elementIndexToUpdate = state.users.findIndex(
      user => user.person_id === payload.id
    );
    if (elementIndexToUpdate) {
      state.users[elementIndexToUpdate].person_name = payload.name;
      state.users[elementIndexToUpdate].person_email = payload.person_email;
      state.users[elementIndexToUpdate].person_lastname = payload.lastName;
      state.users[elementIndexToUpdate].person_surname = payload.surname;
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
