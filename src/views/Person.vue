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
            <th></th>
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
              <ChangeDialogUser :user="user" />
            </td>
            <td>
              <ShowUserInfo :user="user" />
            </td>
            <td>
              <v-btn
                @click="deleteUser(user.person_id)"
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
      <v-btn @click="addUser" fab small plain color="cyan">
        <v-icon dark>
          mdi-plus
        </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import ChangeDialogUser from "../components/widgets/ChangeDialogUser";
import ShowUserInfo from "../components/widgets/ShowUserInfo";
export default {
  name: "Person",
  components: { ShowUserInfo, ChangeDialogUser },
  data() {
    return {
      dialog: false,
      specialCharacters: "&#8470"
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
    },
    deleteUser(person_id) {
      this.$store.dispatch("deleteUser", person_id);
    }
  }
};
</script>

<style scoped></style>
