<template>
  <v-navigation-drawer :value="rightDrawer" :right="right" temporary fixed>
    <v-list>
      <v-list-item
        @click.native="$store.commit('changePositionDrawer')"
      >
        <v-list-item-action>
          <v-icon light> mdi-repeat </v-icon>
        </v-list-item-action>
        <v-list-item-title>Switch drawer (click me)</v-list-item-title>
      </v-list-item>
    </v-list>
    <v-tabs v-model="tab" :hide-slider="true" :show-arrows="false">
      <v-tabs-slider color="yellow"></v-tabs-slider>

      <v-tab v-for="item in items1" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items1" :key="item">
        <v-card flat>
          <v-card-text v-text="text"></v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Rightbar",
  data() {
    return {
      tab: null,
      items1: ["web", "shopping", "videos"],
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  },
  computed: {
    rightDrawer() {
      return this.$store.getters["rightDrawer"];
    },
    right() {
      return this.$store.getters["right"];
    }
  }
};
</script>

<style scoped></style>
