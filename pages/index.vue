<script lang="ts" setup>
const { setLocale } = useI18n();
const localePath = useLocalePath();
const cstore = useCounterStore();
const ustore = useUserStore();
const gstore = useGlobalStore();

const current = ref(1);
const { setName } = ustore;
const handleChange = (lang: "zh" | "en" | "pt") => {
  setLocale(lang);
};
</script>

<template>
  <div class="home">
    <ItemRow title="vue-i18n">
      <div class="switch">
        <button @click="handleChange('zh')">zh</button>&emsp;
        <button @click="handleChange('en')">en</button>&emsp;
        <button @click="handleChange('pt')">pt</button>&emsp;
      </div>
    </ItemRow>
    <hr />
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

<style lang="scss">
.home {
  padding: 20px;
  color: var(--td-text-color-primary);
  .switch > button {
    cursor: pointer;
  }
}
.weclome {
  font-size: 28px;
  padding: 20px 0;
}
</style>
