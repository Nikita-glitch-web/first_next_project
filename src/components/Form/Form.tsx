import React, { FC, useState, useRef, ChangeEvent } from "react";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Button } from "../Controls/Button";
import { Input, InputMasked, Preloader } from "./components";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useAuthStore } from "./useAuthStore";
import useApiRequest from "./useRequest"; // Переконайтеся, що шлях правильний
import style from "../components/Form/Form.module.css";

// Props interface для визначення типу форми
interface FormProps {
  type: "login" | "register" | "upload"; // Тип форми
}

const FormComponent: FC<FormProps> = ({ type }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { setUser } = useAuthStore(); // Використання Zustand для збереження стану користувача

  // Для типу "upload" передаємо URL та метод
  const { makeRequest, loading, error } = useApiRequest(
    type === "upload" ? "/api/upload" : "", // URL для "upload"
    type === "upload" ? "POST" : "GET" // Метод для "upload"
  );

  // Ініціалізація значень форми в залежності від типу
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: type === "register" ? "" : undefined,
    name: type === "upload" ? "" : undefined,
    phone: type === "upload" ? "" : undefined,
    position: type === "upload" ? "" : undefined,
    photo: null as File | null, // Поле photo тепер типу File або null
  };

  // Валідація форми в залежності від типу
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
    confirmPassword: Yup.lazy(() =>
      type === "register"
        ? Yup.string()
            .oneOf([Yup.ref("password")], "Passwords must match")
            .required("Confirm Password is required")
        : Yup.string().nullable()
    ),
    name: Yup.lazy(() =>
      type === "upload"
        ? Yup.string()
            .min(3, "Name must be at least 3 characters")
            .required("Name is required")
        : Yup.string().nullable()
    ),
    phone: Yup.lazy(() =>
      type === "upload"
        ? Yup.string()
            .min(3, "Phone must be at least 3 characters")
            .required("Phone is required")
        : Yup.string().nullable()
    ),
    position: Yup.lazy(() =>
      type === "upload"
        ? Yup.string().required("Position is required")
        : Yup.string().nullable()
    ),
    photo: Yup.lazy(() =>
      type === "upload"
        ? Yup.mixed()
            .required("Photo is required")
            .test("fileFormat", "Unsupported Format", (value) => {
              if (value && value instanceof File) {
                return ["image/jpeg", "image/png"].includes(value.type);
              }
              return false; // Якщо value не є файлом
            })
        : Yup.mixed().nullable()
    ),
  });

  // Логіка обробки форми в залежності від типу
  const handleSubmitForm = async (
    values: typeof initialValues,
    { setFieldError }: FormikHelpers<typeof initialValues>
  ) => {
    try {
      if (type === "register") {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          values.email!,
          values.password!
        );
        setUser(userCredential.user);
      } else if (type === "login") {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          values.email!,
          values.password!
        );
        setUser(userCredential.user);
      } else if (type === "upload") {
        const formData = new FormData();
        formData.append("name", values.name!);
        formData.append("email", values.email!);
        formData.append("phone", values.phone!);
        formData.append("position", values.position!);
        formData.append("photo", values.photo as File); // Переконалися, що це File
        await makeRequest(formData);
      }
      setIsSuccess(true);
    } catch (error: any) {
      setFieldError("email", "Failed to submit the form");
    }
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    isValid,
    dirty,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmitForm,
  });

  // Обробка зміни файлу
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFieldValue("photo", file); // Оновлюємо значення photo в Formik
  };

  if (loading) return <Preloader />;

  return isSuccess ? (
    <div className={style.success_screen}>
      <h4 className={style.success_title}>Thank you!</h4>
    </div>
  ) : (
    <form className={style.form} onSubmit={handleSubmit}>
      <h3 className={style.form_title}>
        {type === "register"
          ? "Register"
          : type === "login"
          ? "Login"
          : "Upload Image"}
      </h3>
      <div className={style.form_content_wrapper}>
        {type !== "upload" && (
          <>
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
          </>
        )}

        {type === "register" && (
          <Input
            id="confirmPassword"
            value={values.confirmPassword!}
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
            onBlur={handleBlur}
            name="confirmPassword"
            errorMessage={touched.confirmPassword && errors.confirmPassword}
          />
        )}

        {type === "upload" && (
          <>
            <Input
              id="name"
              value={values.name!}
              type="text"
              placeholder="Your name"
              onChange={handleChange}
              onBlur={handleBlur}
              name="name"
              errorMessage={touched.name && errors.name}
            />
            <InputMasked
              id="phone"
              value={values.phone!}
              type="tel"
              placeholder="Phone"
              onChange={handleChange}
              onBlur={handleBlur}
              name="phone"
              errorMessage={touched.phone && errors.phone}
            />
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className={style.file_input}
            />
            {errors.photo && (
              <div className={style.error_message}>{errors.photo}</div>
            )}
          </>
        )}

        <div className={style.form_btn_wrapper}>
          <Button
            type="submit"
            disabled={!isValid || !dirty}
            className={style.btn_submit}
          >
            {type === "register"
              ? "Register"
              : type === "login"
              ? "Login"
              : "Upload"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default FormComponent;
