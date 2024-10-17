import React, { FC } from "react";
import style from "./SuccessImage.module.scss";
import { Button } from "../Controls/Button";
import Image from "next/image";
import Link from "next/link";

export const SuccessMessage: FC = () => {
  return (
    <div className={style.success_message}>
      <h4 className={style.success_title}>Thank you for logging in!</h4>
      <Image
        className={style.success_img}
        src="/images/Success.png"
        alt="Success"
      />
      <Link href="/userprofile" className={style.success_link}>
        <Button className={style.button}>Your profile</Button>
      </Link>
    </div>
  );
};
