import React from "react";
import style from "../components/Header/Header.module.css";
import Link from "next/link";

const AuthPage: React.FC = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Hi, you can Login or Register here</h1>
      <div className={style.header_nav_wrapper}>
        <div className={style.header_btn_wrapper}>
          <Link className={style.button} href="/login">
            Login
          </Link>
        </div>
        <div className={style.header_btn_wrapper}>
          <Link className={style.button} href="/sign-up">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};


export default AuthPage;
