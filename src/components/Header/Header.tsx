/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import style from "../Header/Header.module.css";
import { Button } from "../Controls";
import Link from "next/link";
import { useAuthStore } from "../Form/useAuthStore"; // Імпортуємо Zustand для отримання даних про користувача

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const { user } = useAuthStore(); // Отримуємо інформацію про користувача з Zustand

  return (
    <header className={style.header_wrapper}>
      <div className={style.header_content}>
        <div className={style.header_logo_box}>
          <div className={style.header_logo_wrapper}>
            <img src="/images/header_logo.png" alt="Logo" />
          </div>
          <h1 className={style.header_logo_text}>TESTTASK</h1>
        </div>
        <div className={style.header_nav_wrapper}>
          {user ? (
            <div className={style.header_avatar_wrapper}>
              <img
                src={user.photoURL || "/images/default_avatar.png"} // Заміна на аватар користувача
                alt="User Avatar"
                className={style.user_avatar}
              />
            </div>
          ) : (
            <>
              <div className={style.header_btn_wrapper}>
                <Button href="/#teamMembers" className={style.button}>
                  Users
                </Button>
              </div>
              <div className={style.header_btn_wrapper}>
                <Button href="/#signUpForm" className={style.button}>
                  Sign up
                </Button>
              </div>
              <div className={style.header_btn_wrapper}>
                <Link className={style.button} href="#index">
                  Login
                </Link>
              </div>
              <div className={style.header_btn_wrapper}>
                <Link className={style.button} href="/login">
                  Home
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
