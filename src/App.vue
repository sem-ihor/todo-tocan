<template>
  <v-app>
    <!--Side Bar-->
    <Sidebar />
    <!--Page-->
    <v-main>
      <router-view></router-view>
    </v-main>
    <!--Top Bar-->
    <Topbar />
    <!--Right Bar-->
    <Rightbar />
    <!--Footer-->
    <Footer />
  </v-app>
</template>

<script>
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Footer from "./components/Footer";
import { Users } from "@/api/users";
import { Tasks } from "@/api/tasks";
export default {
  name: "App",
  components: { Footer, Rightbar, Sidebar, Topbar },
  data: () => ({
    users: Users,
    tasks: Tasks
  }),
  mounted() {
    this.$store.dispatch("addDefaultUser", this.users);
    this.$store.dispatch("addDefaultTask", this.tasks);
  }
};
</script>
