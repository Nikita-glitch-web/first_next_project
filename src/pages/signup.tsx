import { SignUpForm } from "../components/SignUpForm/SignUpForm";
import style from "./login.module.scss";

export default function SignUp() {
  return (
    <div className={style.login_wrapper}>
      <SignUpForm />
    </div>
  );
}
