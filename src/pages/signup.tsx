import SignUpForm from "../components/Form/SignUp-Form/signUp-form";
import style from "./login.module.scss";

export default function SignUp() {
  return (
    <div className={style.login_wrapper}>
      <SignUpForm />
    </div>
  );
}
