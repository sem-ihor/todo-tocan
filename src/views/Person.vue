<template>
  <div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th v-html="specialCharacters" class="text-left"></th>
            <th class="text-left">
              person_id
            </th>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Last name
            </th>
            <th>
              Surname
            </th>
            <th class="text-left">
              Email
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="user.person_id">
            <td>{{ index + 1 }}</td>
            <td>{{ user.person_id }}</td>
            <td>{{ user.person_name }}</td>
            <td>{{ user.person_surname }}</td>
            <td>{{ user.person_lastname }}</td>
            <td>{{ user.person_email }}</td>
            <td>
              <Dialog :user="user" />
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <div class="btn-container">
      <v-btn class="mx-2" @click="addUser" fab small plain color="cyan">
        <v-icon dark>
          mdi-plus
        </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import Dialog from "../components/widgets/Dialog";
export default {
  name: "Person",
  components: { Dialog },
  data() {
    return {
      dialog: false,
      specialCharacters: "&#8470",
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159
        },
        {
          name: "Ice cream sandwich",
          calories: 237
        },
        {
          name: "Eclair",
          calories: 262
        },
        {
          name: "Cupcake",
          calories: 305
        },
        {
          name: "Gingerbread",
          calories: 356
        },
        {
          name: "Jelly bean",
          calories: 375
        },
        {
          name: "Lollipop",
          calories: 392
        },
        {
          name: "Honeycomb",
          calories: 408
        },
        {
          name: "Donut",
          calories: 452
        },
        {
          name: "KitKat",
          calories: 518
        }
      ]
    };
  },
  computed: {
    users() {
      return this.$store.getters["users"];
    }
  },
  methods: {
    addUser() {
      this.$store.dispatch("addUser");
    }
  }
};
</script>

<style scoped>
.btn-container {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
