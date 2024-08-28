// eslint-disable-next-line no-unused-vars
import React, { FC, ReactNode } from "react";
import style from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  href?: string; // New prop to determine if it's a link
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick = () => {},
  disabled = false,
  type = "button",
  className = "",
  href, // Destructure href prop
}) => {
  const classNames = [
    style.button,
    className,
    disabled ? style.disabled : "",
  ].join(" ");

  // Render an <a> tag if href is provided, otherwise a <button> tag
  return href ? (
    <a href={href} className={classNames} onClick={onClick}>
      {children}
    </a>
  ) : (
    <button
      className={classNames}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};
