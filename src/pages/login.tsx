import { LoginForm } from "@/components/Login-Form/Login_component";
import style from "./login.module.scss";

export default function Login() {
  return (
    <div className={style.login_wrapper}>
      <LoginForm />
    </div>
  );
}
