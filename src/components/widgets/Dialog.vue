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
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Legal first name*"
                  :value="user.person_name"
                  @input="changeName"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Legal middle name"
                  hint="example of helper text only on focus"
                  :value="user.person_lastname"
                  @input="changeLastName"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                  :value="user.person_surname"
                  @input="changeSurname"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  :value="user.person_email"
                  :rules="emailRules"
                  required
                  v-model.trim="email"
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
          <v-btn color="blue darken-1" text @click="changeUser">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "Dialog",
  props: ["user"],
  data: () => ({
    dialog: false,
    name: "",
    surname: "",
    lastName: "",
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ]
  }),
  mounted() {
    this.email = this.user.person_email;
  },
  methods: {
    changeUser() {
      this.$store.dispatch("changeName", {
        id: this.user.person_id,
        name: this.name,
        surname: this.surname,
        lastName: this.lastName,
        email: this.email
      });
      this.dialog = false;
    },
    changeName(name) {
      this.name = name;
    },
    changeSurname(surname) {
      this.surname = surname;
    },
    changeLastName(lastName) {
      this.lastName = lastName;
    }
  }
};
</script>

<style scoped></style>
