/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import style from "./Header.module.scss";
import { Button } from "../Controls";
import Link from "next/link";
import { useAuthStore } from "@/store/auth";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const { user } = useAuthStore(); // Отримуємо інформацію про користувача з Zustand

  return (
    <header className={style.header_wrapper}>
      <div className={style.header_content}>
        <Link href="/" className={style.header_logo_box}>
          <div className={style.header_logo_wrapper}>
            <img src="/images/header_logo.png" alt="Logo" />
          </div>
          <h1 className={style.header_logo_text}>TESTTASK</h1>
        </Link>
        <div className={style.header_nav_wrapper}>
          <div className={style.header_btn_wrapper}>
            <Button href="/#teamMembers" className={style.button}>
              Users
            </Button>
          </div>
          {user ? (
            <Link href="/userprofile" className={style.header_avatar_wrapper}>
              <img
                src={"/images/avatar.png"}
                alt="User Avatar"
                className={style.user_avatar}
              />
            </Link>
          ) : (
            <>
              <div className={style.header_btn_wrapper}>
                <Button href="/signup" className={style.button}>
                  Sign up
                </Button>
              </div>
              <div className={style.header_btn_wrapper}>
                <Link className={style.button} href="/login">
                  Login
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
