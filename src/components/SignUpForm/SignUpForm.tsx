/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import {
  createUserWithEmailAndPassword,
  UserCredential,
  AuthError,
  getAuth,
} from "firebase/auth";
import Image from "next/image";
import img from "../../../public/images/Success.png";
import { useAuthStore } from "../../store/auth/useAuthStore";
import { Input } from "../Input/Input";
import { Button } from "../Controls/Button";
import style from "./SignUpForm.module.scss";
import {
  emailValidationRule,
  passwordValidationRule,
  nameValidationRule,
  confirmPasswordValidationRule,
} from "../../utils/validationRules";

// Ініціалізуємо Firebase auth
const auth = getAuth();

// Interface for form data
interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// Main form component
export const SignUpForm: FC = () => {
  const { setUser } = useAuthStore();
  const [isSuccess, setIsSuccess] = React.useState<boolean>(false);

  const initialValues: FormValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: nameValidationRule(),
    email: emailValidationRule(),
    password: passwordValidationRule(),
    confirmPassword: confirmPasswordValidationRule(),
  });

  // Formik hook
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
      values: FormValues,
      { setFieldError }: FormikHelpers<FormValues>
    ) => {
      try {
        const userCredential: UserCredential =
          await createUserWithEmailAndPassword(
            auth,
            values.email,
            values.password
          );
        const user = userCredential.user;
        setUser(user); // Зберігаємо користувача в Zustand
        setIsSuccess(true);
      } catch (error) {
        const authError = error as AuthError;
        setFieldError(
          "email",
          authError.message || "Error during registration"
        );
      }
    },
  });

  return (
    <>
      {isSuccess ? (
        <div className={style.success_screen}>
          <h4 className={style.success_title}>User successfully registered</h4>
          <img
            src={"/images/Success.png"}
            alt="Success"
            className={style.success_img}
          />
        </div>
      ) : (
        <form className={style.form} id="signUpForm" onSubmit={handleSubmit}>
          <h3 className={style.form_title}>Sign Up</h3>
          <div className={style.form_content_wrapper}>
            <Input
              id="name"
              value={values.name}
              type="text"
              placeholder="Your name"
              onChange={handleChange}
              onBlur={handleBlur}
              name="name"
              errorMessage={touched.name && errors.name}
            />
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
                Sign up
              </Button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};
