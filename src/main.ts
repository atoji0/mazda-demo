import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import router from "./router";
import i18n from "./locales";
import { createPinia } from "pinia";
import "ant-design-vue/dist/antd.min.css";

createApp(App).use(router).use(i18n).use(createPinia()).use(Antd).mount("#app");
