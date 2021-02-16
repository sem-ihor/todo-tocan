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

    <!--Footer-->
  </v-app>
</template>

<script>
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
export default {
  name: "App",

  components: { Sidebar, Topbar },

  data: () => ({
    //
  })
};
</script>
