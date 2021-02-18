import { v4 as uuidv4 } from "uuid";

const state = {
  tasks: []
};

const getters = {
  tasks: state => state.tasks
};

const actions = {
  addTask(state) {
    state.commit("addTask");
  },
  addDefaultTask(state, tasks) {
    state.commit("addDefaultTask", tasks);
  },
  selectUser(state, userInfo) {
    state.commit("selectUser", userInfo);
  },
  deleteTask(state, task_id) {
    state.commit("deleteTask", task_id);
  },
  changeTask(state, updatedTask) {
    state.commit("changeTask", updatedTask);
  }
};

const mutations = {
  addTask(state) {
    state.tasks.push({
      task_id: uuidv4(),
      task_title: "",
      task_description: "",
      task_person_id: ""
    });
  },
  addDefaultTask(state, tasks) {
    state.tasks = tasks;
  },
  selectUser(state, userInfo) {
    const elementIndexToUpdate = state.tasks.findIndex(
      task => task.task_id === userInfo.task_id
    );
    if (elementIndexToUpdate !== -1) {
      state.tasks[elementIndexToUpdate].task_person_id = userInfo.person_id;
    }
  },
  deleteTask(state, task_id) {
    const elementIndexToUpdate = state.tasks.findIndex(
      task => task.task_id === task_id
    );
    if (elementIndexToUpdate !== -1) {
      state.tasks.splice(elementIndexToUpdate, 1);
    }
  },
  changeTask(state, updatedTask) {
    const elementIndexToUpdate = state.tasks.findIndex(
      task => task.task_id === updatedTask.id
    );

    if (elementIndexToUpdate !== -1) {
      state.tasks[elementIndexToUpdate].task_title = updatedTask.title;
      state.tasks[elementIndexToUpdate].task_description =
        updatedTask.description;
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
