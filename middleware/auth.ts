// middleware/auth.ts
export default defineNuxtRouteMiddleware((to, from) => {
  // 从 Cookie 中读取用户信息（例如 token）
  const user = useCookie("user");
  const localePath = useLocalePath();
  console.log("user------", user.value);
  // 如果没有用户信息且当前路由不是登录页，则跳转到登录页面
  if (!user.value && !to.path.includes("/login")) {
    return navigateTo(localePath("login"));
  }
});
