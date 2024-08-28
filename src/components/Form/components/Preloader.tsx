// src/components/Preloader/Preloader.jsx
// eslint-disable-next-line no-unused-vars
import React, { FC } from "react";
import styles from "./Preloader.module.scss";
import img from "./Preloader.png";
import Image from "next/image";
interface PreloaderProps { };

export const Preloader: FC<PreloaderProps> = () => {
  return (
    <div className={styles.preloader}>
      <Image className={styles.loader} src={img} alt="" />
    </div>
  );
};
