import React, { FC, useState } from "react";
import style from "./LoginForm.module.css";
import { Button } from "../Controls/Button";
import { Input } from "../Input";
import { Preloader } from "../Preloader/index";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useAuthStore } from "../../Store/Auth/useAuthStore";

// Interface for form data
interface LoginFormValues {
  email: string;
  password: string;
}

// Main Login form component
export const LoginForm: FC = () => {
  const { setUser, login } = useAuthStore(); // Використання хука для управління станом користувача

  // Початкові значення форми
  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };

  // Схема валідації форми
  const validationSchema = Yup.object({
    email: Yup.string()
      .matches(
        /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,3}$/,
        "Must contain '@' and a domain name"
      )
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required"),
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
        alert("Login successful!");
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
  );
};
