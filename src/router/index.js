import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: "/",
  routes: [
    {
      path: "",
      component: () => import("@/layouts/default.vue"),
      children: [
        {
          path: "/",
          redirect: "/home"
        },
        {
          path: "/home",
          name: "home",
          component: () => import("@/views/Home.vue")
        },
        {
          path: "/task",
          name: "task",
          component: () => import("@/views/Task.vue")
        },
        {
          path: "/person",
          name: "home-my-feed",
          component: () => import("@/views/Person.vue")
        }
      ]
    }
  ]
});
