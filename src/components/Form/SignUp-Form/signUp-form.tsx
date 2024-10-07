import React, { FC, useState } from "react";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Button } from "../../Controls/Button";
import { Preloader } from "../../preloader/Preloader";
import { Input } from "../../input";
import { useAuthStore } from "../../../store/auth/useAuthStore";
import style from "../Form.module.css";

const SignUpForm: FC = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false); // Додаємо стан для прелоадера
  const { signUp } = useAuthStore(); // Використання Zustand для збереження стану користувача

  // Ініціалізація значень форми
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  // Валідація форми
  const validationSchema = Yup.object().shape({
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
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  // Логіка обробки форми
  const handleSubmitForm = async (
    values: typeof initialValues,
    { setFieldError }: FormikHelpers<typeof initialValues>
  ) => {
    setLoading(true); // Активуємо прелоадер під час надсилання форми
    try {
      await signUp({ email: values.email, password: values.password });
      setIsSuccess(true);
    } catch (error: any) {
      setFieldError("email", "Failed to submit the form");
    } finally {
      setLoading(false); // Вимикаємо прелоадер після завершення
    }
  };

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
    onSubmit: handleSubmitForm,
  });

  if (loading) {
    return <Preloader />; // Показуємо прелоадер, поки триває реєстрація
  }

  return isSuccess ? (
    <div className={style.success_screen}>
      <h4 className={style.success_title}>Thank you for signing up!</h4>
    </div>
  ) : (
    <form className={style.form} onSubmit={handleSubmit}>
      <h3 className={style.form_title}>Register</h3>
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

export default SignUpForm;
