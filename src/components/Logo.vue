<template>
  <router-link to="/">
    <span v-if="drawer" class="logo-container">
      <v-img
        max-width="148px"
        contain="false"
        :src="require('@/assets/logo-light.png')"
      />
    </span>
    <span v-else class="logo-container">
      <v-img
          class="mr-1 ml-1 "
        contain="false"
        height="45"
        width="45"
        :src="require('@/assets/logo-sm.png')"
      /> </span
  ></router-link>
</template>

<script>
export default {
  name: "Logo",
  computed: {
    drawer() {
      return this.$store.getters["drawer"];
    }
  }
};
</script>

<style scoped></style>
