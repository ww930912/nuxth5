<template>
  <t-drawer
    v-model:visible="gstore.drawer"
    placement="left"
    :items="baseSidebar"
    @item-click="itemClick"
  >
    <template #footer>
      <div class="button-host">
        <t-button variant="outline" size="large" block>操作</t-button>
      </div>
    </template>
  </t-drawer>
</template>
<script lang="ts" setup>
import { type DrawerItem } from "tdesign-mobile-vue";
import {
  ControlPlatformIcon,
  DashboardIcon,
  PlayCircleIcon,
  PreciseMonitorIcon,
  RootListIcon,
  ServerIcon,
} from "tdesign-icons-vue-next";

const gstore = useGlobalStore();
const baseSidebar = ref([
  {
    title: "菜单一",
    icon: () => h(DashboardIcon),
  },
  {
    title: "菜单二",
    icon: () => h(ServerIcon),
  },
  {
    title: "菜单三",
    icon: () => h(RootListIcon),
  },
  {
    title: "菜单四",
    icon: () => h(ControlPlatformIcon),
  },
  {
    title: "菜单五",
    icon: () => h(PreciseMonitorIcon),
  },
  {
    title: "菜单六",
    icon: () => h(PlayCircleIcon),
  },
]);
const visible = ref(false);
const open = () => {
  visible.value = true;
};

const close = () => {
  visible.value = false;
};
const itemClick = (
  index: number,
  item: DrawerItem,
  context: { e: MouseEvent }
) => {
  console.log("itemclick: ", index, item.title, context);
};

defineExpose({ open, close });
</script>

<style scopde>
.button-host {
  margin: 0 16px;
  margin-top: auto;
}
</style>
