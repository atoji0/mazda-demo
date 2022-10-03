import { defineStore, acceptHMRUpdate } from "pinia";

export enum Role {
  None,
  Admin,
  User,
}

export const useCommonStore = defineStore("common", {
  state: () => ({
    userID: "",
    role: Role.None,
    isMenuCollapsed: true,
  }),
  actions: {
    setUser(userID: string, role: string) {
      this.userID = userID;
      switch (role) {
        case "admin":
          this.role = Role.Admin;
          this.isMenuCollapsed = false;
          break;
        case "user":
          this.role = Role.User;
          this.isMenuCollapsed = false;
          break;
        default:
          this.role = Role.None;
          break;
      }
    },
    clearUser() {
      this.userID = "";
      this.role = Role.None;
    },
  },
});

// storeでHMRを有効にする。Viteのみ正式サポート
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCommonStore, import.meta.hot));
}
