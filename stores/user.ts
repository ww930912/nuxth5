export const useUserStore = defineStore("user", {
  state: () => ({
    user: {
      name: "",
    },
  }),
  actions: {
    setName(name: string) {
      this.user.name = name;
    },
  },
  persist: {
    key: "user",
    storage,
  },
});
