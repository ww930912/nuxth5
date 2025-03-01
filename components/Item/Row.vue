<script lang="ts" setup>
defineProps(["title"]);
</script>

<template>
  <div class="row">
    <div class="left">{{ title }}：</div>
    <div class="right"><slot /></div>
  </div>
</template>

<style lang="scss" scoped>
.row {
  display: flex;
  align-items: center;
  .left {
    color: aquamarine;
  }
}
</style>
