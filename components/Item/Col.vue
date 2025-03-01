<script lang="ts" setup>
defineProps(["title"]);
</script>

<template>
  <div class="col">
    <div class="top">{{ title }}：</div>
    <div class="bottom"><slot /></div>
  </div>
</template>

<style lang="scss" scoped>
.col {
  .top {
    color: rgb(243, 200, 147);
    margin-bottom: 10px;
  }
}
</style>
