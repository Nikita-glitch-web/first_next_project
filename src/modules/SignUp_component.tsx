/* eslint-disable @next/next/no-img-element */
// src/components/RegisterForm.tsx

import React, { FC, useState } from "react";
import style from "../components/Form/Form.module.css";
import { Button } from "../components/Controls/Button";
import { Input } from "../components/Form/components/Input";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../components/Form/firebase"; // Імпортуємо Firebase auth
import { useAuthStore } from "../components/Form/useAuthStore"; // Імпортуємо Zustand

interface RegisterFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

// Компонент для відображення успіху
const SuccessMessage: FC = () => {
  return (
    <div className={style.success_message}>
      <h3>Registration successful!</h3>
      <p>You have successfully registered. Welcome!</p>
    </div>
  );
};

export const RegisterForm: FC = () => {
  const { setUser } = useAuthStore(); // Отримуємо функцію зберігання користувача із Zustand
  const [isSuccess, setIsSuccess] = useState(false); // Додаємо стан для відображення успіху

  const initialValues: RegisterFormValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

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
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match")
      .required("Confirm Password is required"),
  });

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
      values: RegisterFormValues,
      { setFieldError }: FormikHelpers<RegisterFormValues>
    ) => {
      try {
        // Реєстрація користувача через Firebase
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        const user = userCredential.user;
        setUser(user); // Зберігаємо користувача в Zustand
        setIsSuccess(true); // Встановлюємо стан успіху
      } catch (error: any) {
        const errorCode = error.code;
        if (errorCode === "auth/email-already-in-use") {
          setFieldError("email", "This email is already in use.");
        } else if (errorCode === "auth/invalid-email") {
          setFieldError("email", "Invalid email format.");
        } else if (errorCode === "auth/weak-password") {
          setFieldError("password", "The password is too weak.");
        } else {
          setFieldError(
            "email",
            "Failed to register with the provided credentials."
          );
        }
      }
    },
  });

  // Повертаємо або компонент успіху, або форму реєстрації
  return isSuccess ? (
    <div className={style.success_screen}>
      <h4 className={style.success_title}>
        Thank you for joining us , now register
      </h4>
      <img
        src={"./images/Success.png"}
        alt="Success"
        className={style.success_img}
      />
    </div>
  ) : (
    // Відображаємо повідомлення про успіх
    <form className={style.form} onSubmit={handleSubmit}>
      <h3 className={style.form_title}>Register here!</h3>
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
        <Input
          id="confirmPassword"
          value={values.confirmPassword}
          type="password"
          placeholder="Confirm Password"
          onChange={handleChange}
          onBlur={handleBlur}
          name="confirmPassword"
          errorMessage={touched.confirmPassword && errors.confirmPassword}
        />
        {errors.email && (
          <div className={style.error_message}>{errors.email}</div>
        )}
        {errors.password && (
          <div className={style.error_message}>{errors.password}</div>
        )}
        <div className={style.form_btn_wrapper}>
          <Button
            type="submit"
            disabled={!isValid || !dirty}
            className={style.btn_submit}
          >
            Register
          </Button>
        </div>
      </div>
    </form>
  );
};
