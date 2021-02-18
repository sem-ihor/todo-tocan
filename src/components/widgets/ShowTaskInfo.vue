<template>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog transition="dialog-top-transition" max-width="600">
        <template v-slot:activator="{ on, attrs }">
          <v-btn fab small v-bind="attrs" v-on="on" plain color="cyan">
            <v-icon dark>
              mdi-eye
            </v-icon>
          </v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar color="primary" dark>{{ task.task_title }}</v-toolbar>
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
            ></v-img>
            <v-card-title> UUID: {{ task.task_id }} </v-card-title>
            <v-card-title> Ovner: {{ getUsersTask(task) }} </v-card-title>

            <v-card-subtitle>
              Description: {{ task.task_description }}
            </v-card-subtitle>
            <v-card-actions class="justify-end">
              <v-btn text @click="dialog.value = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ShowTaskInfo",
  props: ["task"],
  methods: {
    getUsersTask(task) {
      let user = this.$store.getters["userByUuid"](task.task_person_id);
      if (user) return user.person_name + " " + user.person_surname;
      else return "I do not know!";
    }
  }
};
</script>

<style scoped></style>
