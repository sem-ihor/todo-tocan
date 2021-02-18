const state = {
  tasks: []
};

const getters = {
  tasks: state => state.tasks
};

const actions = {
  addDefaultTask(state, tasks) {
    state.commit("addDefaultTask", tasks);
  },
  deleteTask(state, task_id) {
    state.commit("deleteTask", task_id);
  },
  changeTask(state, updatedTask) {
    state.commit("changeTask", updatedTask);
  }
};

const mutations = {
  addDefaultTask(state, tasks) {
    state.tasks = tasks;
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
