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
    },
    {
      person_id: uuidv4(),
      person_email: "igors@gmail.com",
      person_name: "Ihor",
      person_surname: "Semenovich",
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
  },
  addUser(state) {
    state.commit("addUser");
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
