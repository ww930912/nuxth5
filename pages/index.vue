<script lang="ts" setup>
const router = useRouter();
const localePath = useLocalePath();
const ustore = useUserStore();
const gstore = useGlobalStore();
const props = defineProps(["setLoading"]);
const current = ref(1);
const { setName } = ustore;
const handleChange = async (lang: "zh" | "en" | "pt") => {
  console.log("lang---", lang);
  // setLocale(lang);
  props.setLoading(true);
  // await router.replace(lang === "zh" ? "/" : lang);
  setTimeout(() => {
    props.setLoading(false);
  }, 2500);
};
</script>

<template>
  <div class="home">
    <ItemRow title="vue-router">
      <NuxtLink :to="localePath('about')">{{ $t("关于页面") }}</NuxtLink
      >&emsp;
      <NuxtLink :to="localePath('user')">{{ $t("模拟登录") }}</NuxtLink>
    </ItemRow>
    <hr />
    <!-- 
    <ItemRow title="pinia">
      <span>{{ $t("计数") }}: {{ cstore.count }}</span>
    </ItemRow>
    <hr />
    <ItemCol title="persist pinia">
      <p>{{ $t("用户名") }}: {{ ustore.user.name || "--" }}</p>
      <button @click="setName('')">{{ $t("清除") }}</button>
    </ItemCol>
    <hr /> -->
    <!-- <ItemCol title="tdesign-ui">
      <t-date-picker mode="date" :first-day-of-week="7" />
      <t-pagination
        v-model="current"
        :total="36"
        show-jumper
        :max-page-btn="5"
      />
    </ItemCol> -->
  </div>
</template>

<style lang="scss" scoped>
.home {
  padding: 20px;
  .switch > button {
    cursor: pointer;
  }
}
.weclome {
  font-size: 28px;
  padding: 20px 0;
}
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  z-index: 9999;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid rgba(255, 255, 255, 0.3);
  border-top: 5px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
