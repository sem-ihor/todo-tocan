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
            <v-toolbar color="primary" dark
              >{{ user.person_name }} {{ user.person_surname }}</v-toolbar
            >
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
            ></v-img>
            <v-card-title> UUID: {{ user.person_id }} </v-card-title>
            <v-card-title>
              User: {{ user.person_name }} {{ user.person_lastname }}
              {{ user.person_surname }}
            </v-card-title>

            <v-card-subtitle> Email: {{ user.person_email }} </v-card-subtitle>
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
  name: "ShowUserInfo",
  props: ["user"]
};
</script>

<style scoped></style>
