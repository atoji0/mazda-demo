import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ASAdjustment from "@/views/ASAdjustmentRequest.vue";
import Home from "@/views/Home.vue";
import NotFound from "@/views/common/NotFound.vue";
import NotAuth from "@/views/common/NotAuth.vue";
import Login from "@/views/common/Login.vue";
import { i18n } from "@/locales";
import { useCommonStore, Role } from "@/store/common";

export const routers: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
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
    path: "/",
    component: NotFound,
    meta: {
      title: "menu.Operation",
      key: "3",
      isAdmin: true,
    },
    children: [
      {
        path: "/userOperation",
        component: NotFound,
        meta: {
          title: "menu.UserOperation",
          key: "4",
        },
      },
    ],
  },
  {
    path: "/notAuth",
    name: "NotAuth",
    component: NotAuth,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
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
  const commonStore = useCommonStore();

  if (to.name != "Login" && commonStore.userID == "") {
    // ログインIDが存在しない場合、ログイン画面へ遷移する。
    next("Login");
  } else if (to.name == "Home" && from.name == "Login" && commonStore.role == Role.None) {
    // 認可されてない場合、403エラーを表示する。
    next("NotAuth");
  } else {
    // パスに合わせて、タイトルを変更する。
    if (to.meta.title != null) {
      document.title = import.meta.env.VITE_TITLE + " - " + i18n.global.t(String(to.meta.title));
    } else {
      document.title = import.meta.env.VITE_TITLE;
    }
    next();
  }
});

export default router;
