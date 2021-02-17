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
                  v-model.trim="name"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Legal middle name"
                  hint="example of helper text only on focus"
                  v-model.trim="surname"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                  v-model.trim="lastName"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  required
                  :value="user.person_email"
                  :error-messages="errorMessage()"
                  v-model.trim="$v.email.$model"
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
          <v-btn
            color="blue darken-1"
            :disabled="
              ($v.email.$dirty && !$v.email.required) ||
                ($v.email.$dirty && !$v.email.email)
            "
            text
            @click="changeUser"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "Dialog",
  props: ["user"],
  data: () => ({
    dialog: false,
    name: "",
    surname: "",
    lastName: "",
    email: ""
  }),
  mounted() {
    this.id = this.user.person_id;
    this.name = this.user.person_name;
    this.surname = this.user.person_surname;
    this.lastName = this.user.person_lastname;
    this.email = this.user.person_email;
  },
  validations: {
    email: {
      required,
      email
    }
  },
  computed: {},
  methods: {
    changeUser() {
      this.$store.dispatch("changeName", {
        id: this.id,
        name: this.name,
        surname: this.surname,
        lastName: this.lastName,
        email: this.email
      });
      this.dialog = false;
      console.log(this.$v.email)
    },
    errorMessage() {
      if (this.$v.email.$dirty && !this.$v.email.required) {
        return "The email field is required!";
      } else if (this.$v.email.$dirty && !this.$v.email.email) {
        return "The input must be a proper email!";
      } else return "";
    }
  }
};
</script>

<style scoped></style>
