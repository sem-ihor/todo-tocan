<template>
  <div>
    <v-navigation-drawer
      :value="true"
      :mini-variant="!drawer"
      :clipped="clipped"
      :absolute="!drawer"
      app
    >
      <perfect-scrollbar v-if="drawer">
        <v-list dense>
          <div v-for="item in menuItems" :key="item.title">
            <v-list-group
              v-if="item.hasOwnProperty('subItems')"
              v-model="item.active"
              :prepend-icon="item.icon"
              no-action
            >
              <template #activator>
                <v-list-item-content>
                  <v-list-item-title v-text="item.label"></v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="child in item.subItems"
                :key="child.title"
                :to="child.link"
              >
                <v-list-item-content>
                  <v-list-item-title v-text="child.label"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
            <v-subheader v-else-if="item.isTitle">{{ item.label }}</v-subheader>
            <v-list-item v-else-if="!item.isTitle" :to="item.link">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.label"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-list>
      </perfect-scrollbar>
      <!--      <div v-if="drawer">
        <v-list dense>
          <div v-for="item in menuItems" :key="item.title">
            <v-list-group
              v-if="item.hasOwnProperty('subItems')"
              v-model="item.active"
              :prepend-icon="item.icon"
              no-action
            >
              <template #activator>
                <v-list-item-content>
                  <v-list-item-title v-text="item.label"></v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="child in item.subItems"
                :key="child.title"
                :to="child.link"
              >
                <v-list-item-content>
                  <v-list-item-title v-text="child.label"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
            <v-subheader v-else-if="item.isTitle">{{ item.label }}</v-subheader>
            <v-list-item v-else-if="!item.isTitle" :to="item.link">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.label"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-list>
      </div>-->
    </v-navigation-drawer>
  </div>
</template>

<script>
import { menuItems } from "@/api/menu";
import { PerfectScrollbar } from "vue2-perfect-scrollbar";
export default {
  name: "Sidebar",
  components: {
    PerfectScrollbar
  },
  filters: {
    handleItems(items) {
      return items.filter(item => {
        return (
          // eslint-disable-next-line no-prototype-builtins
          item.hasOwnProperty("isTitle") === false ||
          // eslint-disable-next-line no-prototype-builtins
          item.hasOwnProperty("subItems") === true
        );
      });
    }
  },
  data() {
    return {
      menuItems,
      clipped: true,
      items: [
        {
          action: "mdi-ticket",
          items: [{ title: "List Item" }],
          title: "Attractions"
        },
        {
          action: "mdi-silverware-fork-knife",
          active: true,
          items: [
            { title: "Breakfast & brunch" },
            { title: "New American" },
            { title: "Sushi" }
          ],
          title: "Dining"
        },
        {
          action: "mdi-school",
          items: [{ title: "List Item" }],
          title: "Education"
        },
        {
          action: "mdi-run",
          items: [{ title: "List Item" }],
          title: "Family"
        },
        {
          action: "mdi-bottle-tonic-plus",
          items: [{ title: "List Item" }],
          title: "Health"
        },
        {
          action: "mdi-content-cut",
          items: [{ title: "List Item" }],
          title: "Office"
        },
        {
          action: "mdi-tag",
          items: [{ title: "List Item" }],
          title: "Promotions"
        }
      ],
      miniVariant: false,
      rightDrawer: false,
      title: "Vuetify.js",
      fav: true,
      menu: false,
      message: false,
      hints: true
    };
  },
  computed: {
    drawer() {
      return this.$store.getters["drawer"];
    },
    fixed() {
      return this.$store.getters["fixed"];
    }
  },
  methods: {}
};
</script>

<style src="vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css" />
<style>
.ps {
  height: calc(100% - 1rem);
}
</style>
