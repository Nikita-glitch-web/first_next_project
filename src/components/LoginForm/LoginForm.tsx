import React, { FC, useState } from "react";
import style from "./LoginForm.module.css";
import { Input } from "../Input";
import { Preloader } from "../Preloader/index";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import img from "../../../public/images/Success.png";
import Image from "next/image";
import { useAuthStore } from "../../store/auth/useAuthStore";
import {
  emailValidationRule,
  passwordValidationRule,
} from "../../utils/validationRules";
import Link from "next/link";
import { Button } from "../Controls/Button";

// Interface for form data
interface LoginFormValues {
  email: string;
  password: string;
}

// Main Login form component
export const LoginForm: FC = () => {
  const { setUser, login } = useAuthStore(); // Використання хука для управління станом користувача
  const [isSuccess, setIsSuccess] = useState(false); // Додаємо стан для відстеження успішного входу

  // Початкові значення форми
  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };

  // Схема валідації форми
  const validationSchema = Yup.object({
    email: emailValidationRule(),
    password: passwordValidationRule(),
  });

  // Використання useFormik для обробки форми
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    dirty,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (
      values: LoginFormValues,
      { setFieldError }: FormikHelpers<LoginFormValues>
    ) => {
      try {
        // Логіка входу
        await login(values); // Викликаємо функцію login з переданими значеннями
        setIsSuccess(true); // Встановлюємо успішний стан після входу
      } catch (error) {
        setFieldError("email", "Failed to login with the provided credentials");
      }
    },
  });

  return (
    <>
      {false ? ( // Показувати Preloader, якщо стан завантаження
        <Preloader />
      ) : (
        <>
          {isSuccess ? ( // Якщо логін успішний, показуємо лише повідомлення
            <div className={style.success_message}>
              <h4 className={style.success_title}>Thank you for logging in!</h4>
              <Image className={style.success_img} src={img} alt="Success" />
              <Link href="/userprofile" className={style.success_link}>
                <Button className={style.button}>Your profile</Button>
              </Link>
            </div>
          ) : (
            <form className={style.form} onSubmit={handleSubmit}>
              <h3 className={style.form_title}>Login here please!</h3>
              <div className={style.form_content_wrapper}>
                <Input
                  id="email"
                  value={values.email}
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="email"
                  errorMessage={touched.email && errors.email}
                />
                <Input
                  id="password"
                  value={values.password}
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="password"
                  errorMessage={touched.password && errors.password}
                />
                {errors.email && (
                  <div className={style.error_message}>{errors.email}</div>
                )}
                <div className={style.form_btn_wrapper}>
                  <Button
                    type="submit"
                    disabled={!isValid || !dirty}
                    className={style.btn_submit}
                  >
                    Login
                  </Button>
                </div>
              </div>
            </form>
          )}
        </>
      )}
    </>
  );
};
