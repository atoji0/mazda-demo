import { reactive } from "vue";
import axios from "axios";
import { useCommonStore } from "@/store/common";
import { Router } from "vue-router";

interface LoginForm {
  userID: string;
}

interface LoginResponse {
  role: string;
}

class LoginService {
  private URL = "/api/login";

  loginForm = reactive<LoginForm>({
    userID: "",
  });

  /**
   * ロールを取得し、ユーザIDとロールをセッションに保存する。
   */
  public login(values: LoginForm, router: Router): void {
    axios.post<LoginResponse>(this.URL, { userID: this.loginForm.userID }).then((res) => {
      useCommonStore().setUser(this.loginForm.userID, res.data.role);
      router.push("/");
    });
  }
}
export default new LoginService();
