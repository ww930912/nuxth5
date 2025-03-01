<script lang="ts" setup>
import zhConfig from "tdesign-mobile-vue/es/locale/zh_CN";
import enConfig from "tdesign-mobile-vue/es/locale/en_US";
import ptConfig from "tdesign-mobile-vue/es/locale/ru_RU";

const { locale } = useI18n();
const loading = ref(false);
let globalConfig: any = ref({});
onMounted(() => {
  const n = locale.value;
  globalConfig.value = n === "en" ? enConfig : n === "pt" ? ptConfig : zhConfig;
});
const setLoading = (bool: boolean) => {
  loading.value = bool;
};
</script>

<template>
  <t-config-provider :global-config="globalConfig">
    <div v-if="loading" class="loading-overlay">
      <div class="spinner"></div>
      <p>{{ `${$t("语言切换")}...` }}</p>
    </div>
    <main class="home">
      <LayoutHeader />
      <LayoutDrawer :set-loading="setLoading" />
      <slot />
      <!-- <t-layout>
        <t-aside>
          <LayoutAside />
        </t-aside>
        <t-layout>
          <t-content>
            <slot />
          </t-content>
          <LayoutFooter />
        </t-layout>
      </t-layout> -->
      <LayoutFooter />
    </main>
  </t-config-provider>
</template>

<style scoped>
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
  font-size: 14px;
  z-index: 9999;
}

.spinner {
  width: 32px;
  height: 32px;
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
