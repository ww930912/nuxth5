// const browserStorage = {
//   getItem: (key: string) => localStorage.getItem(key),
//   setItem: (key: string, value: string) => localStorage.setItem(key, value),
//   removeItem: (key: string) => localStorage.removeItem(key),
// };

const cookieStorage = {
  getItem: (key: string) => {
    // 使用 Nuxt3 的 useCookie 来读取 cookie
    return useCookie(key).value || null;
  },
  setItem: (key: string, value: string) => {
    useCookie(key, { maxAge: 60 * 60 * 24 * 7 }).value = value;
  },
  removeItem: (key: string) => {
    useCookie(key).value = null;
  },
};

export const storage = cookieStorage;
