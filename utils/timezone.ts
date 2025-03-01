// utils/timezone.ts
import moment from "moment-timezone";

// 统一服务器时区设置（根据需要修改时区标识）
const SERVER_TIMEZONE = "Asia/Shanghai";

/**
 * 根据服务器时区格式化日期
 * @param date 日期对象或字符串
 * @param format 格式化字符串，默认为 'YYYY-MM-DD HH:mm:ss'
 * @returns 格式化后的日期字符串
 */
export const formatTime = (
  date: Date | string | number,
  format: string = "YYYY-MM-DD HH:mm:ss"
): string => {
  return moment(date).tz(SERVER_TIMEZONE).format(format);
};

/**
 * 获取当前服务器时区的时间
 * @returns 当前时间格式化后的字符串
 */
export const nowTime = (format: string = "YYYY-MM-DD HH:mm:ss"): string => {
  return moment().tz(SERVER_TIMEZONE).format(format);
};

/**
 * 将任意时间转换为服务器时区时间
 * @param date 日期对象或字符串
 * @returns 转换后的 moment 对象，可以继续做其它处理
 */
export const toTime = (date: Date | string | number) => {
  return moment(date).tz(SERVER_TIMEZONE);
};
