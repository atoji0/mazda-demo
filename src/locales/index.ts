import { createI18n } from "vue-i18n";

import ja from "./lang/ja";
import en from "./lang/en";

export const Lang = [
  { key: "en", name: "English" },
  { key: "ja", name: "Japanese" },
];

export const i18n = createI18n({
  legacy: false,
  locale: "en",
  messages: {
    en,
    ja,
  },
});

export default i18n;
