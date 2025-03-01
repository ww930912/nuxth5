// composables/useNowTime.ts
import moment from "moment-timezone";

export const useNowTime = () => {
  // 统一服务器时区设置（根据需要修改时区标识）
  const SERVER_TIMEZONE = "Asia/Shanghai";
  const nowTime = ref("");
  let animationFrameId: number;

  // 更新时间函数，每一帧更新当前时间
  const updateTime = () => {
    // 获取当前时间并格式化为字符串
    nowTime.value = moment().tz(SERVER_TIMEZONE).format("YYYY-MM-DD HH:mm:ss");
    // 请求下一帧
    animationFrameId = requestAnimationFrame(updateTime);
  };

  onMounted(() => {
    updateTime();
  });

  onUnmounted(() => {
    cancelAnimationFrame(animationFrameId);
  });

  return { nowTime };
};
