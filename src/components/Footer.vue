<template>
  <v-footer :absolute="!fixed" v-if="fixed" style="z-index: 100" app>
    <span>&copy; My-app {{ new Date().getFullYear() }}</span>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    fixed() {
      return this.$store.getters["fixed"];
    }
  }
};
</script>

<style scoped></style>
