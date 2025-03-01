<template>
  <t-tab-bar v-model="value" theme="tag" :split="false" @change="change">
    <t-tab-bar-item v-for="item in list" :key="item.value" :value="item.value">
      {{ item.label }}
      <template #icon>
        <t-icon :name="item.icon" />
      </template>
    </t-tab-bar-item>
  </t-tab-bar>
</template>

<script setup lang="ts">
const value = ref("home");
const list = ref([
  { value: "home", label: "体育", icon: "home" },
  { value: "app", label: "娱乐城", icon: "app" },
  { value: "chat", label: "投注单", icon: "chat" },
  { value: "user", label: "我的", icon: "user" },
]);

const change = (changeValue: number | string) => {
  console.log("TabBar 值改变为：", changeValue);
};
</script>
