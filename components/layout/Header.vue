<script lang="ts" setup>
const gstore = useGlobalStore();
const { setTheme, toggleDrawer } = gstore;
const { nowTime } = useNowTime();
const { locale } = useI18n();
onMounted(() => setTheme(gstore.theme));
</script>

<template>
  <t-row class="header">
    <t-col span="12" class="left">
      <t-icon name="menu-fold" class="icon" size="2rem" @click="toggleDrawer" />
      <img
        width="136"
        class="logo"
        :src="gstore.theme === 'light' ? '/img/logo_w.webp' : '/img/logo.webp'"
        alt="logo"
      />
    </t-col>
    <t-col span="12" class="right">
      <t-button theme="primary">登录</t-button>
      <t-button theme="primary">注册</t-button>
      <span
        :class="gstore.theme === 'light' ? 'toggle' : 'toggle active'"
        @click="() => setTheme(gstore.theme === 'light' ? 'dark' : 'light')"
      ></span>
    </t-col>
  </t-row>
</template>

<style scoped lang="scss">
.header {
  height: var(--td-header);
}
.icon {
  color: var(--td-text-color-primary);
  margin-right: 1rem;
}
.left,
.right {
  display: flex;
  justify-content: center;
  align-items: center;
  .t-button {
    margin: 0 0.2rem;
  }
}
.toggle {
  position: absolute;
  cursor: pointer;
  top: 1rem;
  right: 0.5rem;
  font-size: 150%;
}

.toggle:before {
  content: "☀️";
}

.toggle.active:before {
  content: "🌒";
}
</style>
