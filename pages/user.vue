<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});
const { goBack } = useGoBack();

const logout = () => {
  // 删除用户 Cookie
  const userCookie = useCookie("user");
  userCookie.value = null;
  // 跳转到登录页面
  navigateTo("/");
};
</script>

<template>
  <div class="home">
    <h1>{{ $t("用户信息") }} 😊</h1>
    <h1>{{ $t("来到受保护页面", { name: "admin" }) }}</h1>
    <p>{{ $t("您已成功登录") }}</p>
    <button @click="goBack">{{ $t("返回") }}</button>
    <button @click="logout">{{ $t("退出登录") }}</button>
  </div>
</template>

<style lang="scss" scoped>
.home {
  max-width: 600px;
  margin: 50px auto;
}
</style>
