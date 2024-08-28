/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import classNames from "classnames";
import style from "../components/Form/Form.module.css";
import { Button } from "../components/Controls/Button";
import { Input } from "../components/Form/components/Input";
import { Preloader } from "../components/Form/components/Preloader";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import useApiRequest from "../components/Form/useRequest";

// Interface for form data
interface LoginFormValues {
  email: string;
  password: string;
}

// Main Login form component
export const LoginForm: FC = () => {
  const {
    makeRequest: makePostRequest,
    loading: postLoading,
    error: postError,
  } = useApiRequest<{ email: string; password: string }>(
    "https://your-login-api-endpoint.com/login", // Replace with your login API endpoint
    "POST"
  );

  const initialValues: LoginFormValues = {
    email: "",
    password: "",
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
      values: LoginFormValues,
      { setFieldError }: FormikHelpers<LoginFormValues>
    ) => {
      try {
        await makePostRequest(values); // Call POST request through hook
        alert("Login successful!"); // Handle successful login
      } catch {
        setFieldError("email", "Failed to login with the provided credentials");
      }
    },
  });

  return (
    <>
      {postLoading ? (
        <Preloader />
      ) : (
        <form className={style.form} onSubmit={handleSubmit}>
          <h3 className={style.form_title}>Login</h3>
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
            {postError && (
              <div className={style.error_message}>{postError}</div>
            )}
            <div className={style.form_btn_wrapper}>
              <Button
                type="submit"
                disabled={!isValid || !dirty || postLoading}
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
