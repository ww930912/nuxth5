import TDesign from "tdesign-mobile-vue";
import "tdesign-mobile-vue/es/style/index.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(TDesign);
});
