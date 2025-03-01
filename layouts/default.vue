<script lang="ts" setup>
import zhConfig from "tdesign-mobile-vue/es/locale/zh_CN";
import enConfig from "tdesign-mobile-vue/es/locale/en_US";
import ptConfig from "tdesign-mobile-vue/es/locale/ru_RU";

const { locale } = useI18n();

let globalConfig: any = ref({});
onMounted(() => {
  const n = locale.value;
  globalConfig.value = n === "en" ? enConfig : n === "pt" ? ptConfig : zhConfig;
});
</script>

<template>
  <t-config-provider :global-config="globalConfig">
    <main class="home">
      <LayoutHeader />
      <LayoutDrawer />
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
