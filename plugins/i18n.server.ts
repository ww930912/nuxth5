export default defineNuxtPlugin(({ $i18n }) => {
  // 从 localStorage or cookie 读取缓存语言
  const { lang, theme } = useGlobalStore();
  // @ts-ignore
  lang && $i18n.setLocale(lang);
  console.log("当前语言:", lang, "当前主题:", theme);
});
