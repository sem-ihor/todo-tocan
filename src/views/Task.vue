<template>
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
          <td>{{ task.task_person_id }}</td>
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
</template>

<script>
import ChangeDialogTask from "../components/widgets/ChangeDialogTask";
export default {
  name: "Task",
  components: { ChangeDialogTask },
  data() {
    return {
      specialCharacters: "&#8470",
    };
  },
  methods: {
    deleteTask(task_id) {
      this.$store.dispatch("deleteTask", task_id);
    }
  },
  computed: {
    tasks() {
      return this.$store.getters["tasks"];
    }
  }
};
</script>

<style scoped></style>
