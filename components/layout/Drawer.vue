<template>
  <t-drawer
    v-model:visible="gstore.drawer"
    placement="left"
    :items="baseSidebar"
    @item-click="itemClick"
  >
    <template #footer>
      <div class="button-host">
        <t-button variant="outline" size="large" block @click="toggleDrawer">{{
          $t("返回")
        }}</t-button>
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
const { t } = useI18n();
const { toggleDrawer } = gstore;
const baseSidebar = ref([
  {
    title: `${t("菜单")}1`,
    icon: () => h(DashboardIcon),
  },
  {
    title: `${t("菜单")}2`,
    icon: () => h(ServerIcon),
  },
  {
    title: `${t("菜单")}3`,
    icon: () => h(RootListIcon),
  },
  {
    title: `${t("菜单")}4`,
    icon: () => h(ControlPlatformIcon),
  },
  {
    title: `${t("菜单")}5`,
    icon: () => h(PreciseMonitorIcon),
  },
  {
    title: `${t("菜单")}6`,
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
}
</style>
