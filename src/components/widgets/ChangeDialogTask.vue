<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" fab small plain color="cyan">
          <v-icon>
            mdi-lead-pencil
          </v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Task info</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Task title*"
                  v-model.trim="title"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Task description*"
                  required
                  v-model.trim="description"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="changeTask">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "ChangeDialogTask",
  props: ["task"],
  data: () => ({
    dialog: false,
    id: "",
    title: "",
    description: "",
    personId: ""
  }),
  mounted() {
    this.id = this.task.task_id;
    this.title = this.task.task_title;
    this.description = this.task.task_description;
    this.personId = this.task.task_person_id;
  },
  computed: {},
  methods: {
    changeTask() {
      this.$store.dispatch("changeTask", {
        id: this.id,
        title: this.title,
        description: this.description
      });
      this.dialog = false;
    },
    errorMessage() {}
  }
};
</script>

<style scoped></style>
