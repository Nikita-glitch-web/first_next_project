import { Input } from "@/components/Form/components/index";
import { LoginForm } from "@/modules/Login_component";
import style from "./login.module.scss"
import Link from "next/link";
import { ChangeEvent, FocusEvent } from "react";


export default function Login() {
    return (
      <div className={style.login_wrapper}>
        <LoginForm />
      </div>
    );
};