<template>
  <div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th v-html="specialCharacters" class="text-left"></th>
            <th class="text-left">
              task_id
            </th>
            <th class="text-left">
              task_title
            </th>
            <th class="text-left">
              task_description
            </th>
            <th class="text-left">
              task_person_id
            </th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(task, index) in tasks" :key="task.task_id">
            <td>{{ index }}</td>
            <td>{{ task.task_id }}</td>
            <td>{{ task.task_title }}</td>
            <td>{{ task.task_description }}</td>
            <td>
              <v-select
                :items="userArr"
                @input="selectUser($event, task)"
                label="Standard"
                dense
              ></v-select>
            </td>
            <td>
              <ChangeDialogTask :task="task" />
            </td>
            <td>
              <v-btn
                @click="deleteTask(task.task_id)"
                fab
                small
                plain
                color="cyan"
              >
                <v-icon dark>
                  mdi-delete-outline
                </v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <div class="btn-container">
      <v-btn @click="addTask" fab small plain color="cyan">
        <v-icon dark>
          mdi-plus
        </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import ChangeDialogTask from "../components/widgets/ChangeDialogTask";
export default {
  name: "Task",
  components: { ChangeDialogTask },
  data() {
    return {
      userArr: [],
      specialCharacters: "&#8470"
    };
  },
  mounted() {
    this.users.map(user => {
      this.userArr.push({
        text: user.person_name + " " + user.person_surname,
        value: user.person_id,
        disabled: false
      });
    });
  },
  methods: {
    addTask() {
      this.$store.dispatch("addTask");
    },
    deleteTask(task_id) {
      this.$store.dispatch("deleteTask", task_id);
    },
    selectUser(user, task) {
      this.$store.dispatch("selectUser", {
        person_id: user,
        task_id: task.task_id
      });
    }
  },
  computed: {
    tasks() {
      return this.$store.getters["tasks"];
    },
    users() {
      return this.$store.getters["users"];
    }
  }
};
</script>

<style scoped></style>
