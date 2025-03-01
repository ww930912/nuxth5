<template>
  <div class="login">
    <h2>{{ $t("模拟登录") }}</h2>
    <form @submit.prevent="login">
      <input v-model="username" type="text" :placeholder="$t('用户名')" />
      <input v-model="password" type="password" :placeholder="$t('密码')" />
      <br />
      <button type="submit">{{ $t("登录") }}</button>
    </form>
    <button @click="goBack">{{ $t("返回") }}</button>
    <p v-if="errorMsg" class="error">{{ errorMsg }}</p>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const localePath = useLocalePath();
const { goBack } = useGoBack();
const { t } = useI18n();

const username = ref("");
const password = ref("");
const errorMsg = ref("");

const login = () => {
  // 模拟校验：用户名为 admin 且密码为 123456 时视为登录成功
  if (username.value === "admin" && password.value === "123456") {
    // 登录成功，设置 Cookie 信息（过期时间1天）
    const userCookie = useCookie("user");
    const user = { name: username.value, token: "mock_token" };
    userCookie.value = JSON.stringify(user);
    // 登录后跳转到首页
    router.replace(localePath("user"));
  } else {
    errorMsg.value = t("登录失败", { name: "admin", password: "123456" });
  }
};
</script>

<style scoped>
.login {
  max-width: 300px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.error {
  color: red;
}
</style>
