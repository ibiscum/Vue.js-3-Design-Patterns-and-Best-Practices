import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/directory",
      name: "directory",
      component: () => import("../views/DirectoryView.vue"),
      children: [
        {
          path: ":country",
          name: "states",
          props: true,
          component: () => import("../views/StateView.vue"),
          children: [
            {
              path: ":state",
              name: "cities",
              props: true,
              component: () => import("../views/CityView.vue"),
            },
          ],
        },
      ],
    },
  ],
});

export default router;
