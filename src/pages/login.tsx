import { LoginForm } from "../components/LoginForm/LoginForm";
import style from "./login.module.scss";

export default function Login() {
  return (
    <div className={style.login_wrapper}>
      <LoginForm />
    </div>
  );
}
