import type { RadioValue } from "tdesign-mobile-vue";

export const useGlobalStore = defineStore("global", {
  state: () => ({
    lang: "zh",
    theme: "light",
    drawer: false,
  }),
  actions: {
    setLang(lang: string) {
      this.lang = lang;
    },
    setTheme(theme: RadioValue) {
      document.documentElement.setAttribute("theme-mode", theme.toString());
      this.theme = theme.toString();
    },
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
  persist: {
    storage,
  },
});
