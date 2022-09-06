import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ASAdjustment from "../views/ASAdjustmentRequest.vue";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";
import { i18n } from "../locales";

export const routers: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Home,
    meta: {
      title: "menu.Home",
    },
  },
  {
    path: "/",
    meta: {
      title: "menu.ASAdjustment",
      key: "sub1",
    },
    children: [
      {
        path: "asAdjustment",
        component: ASAdjustment,
        meta: {
          title: "menu.ASAdjustmentRequest",
          key: "2",
        },
      },
      {
        path: "asAdjustmentSpecial",
        component: NotFound,
        meta: {
          title: "menu.ASAdjustmentSpecialRequest",
          key: "3",
        },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routers,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title != null) {
    document.title = import.meta.env.VITE_TITLE + " - " + i18n.global.t(String(to.meta.title));
  } else {
    document.title = import.meta.env.VITE_TITLE;
  }
  next();
});

export default router;
