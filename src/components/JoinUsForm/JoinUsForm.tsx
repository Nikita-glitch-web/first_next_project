/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef, ChangeEvent, FC } from "react";
import classNames from "classnames";
import style from "./JoinUsForm.module.css";
import { Button } from "../Controls/Button";
import { RadioButton } from "../Radio/Radio";
import { Input } from "../Input/Input";
import { Preloader } from "../Preloader/Preloader";
import { InputMasked } from "../Input/InputMasked";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import useImageValidation from "../../hooks/useImageValidation";
import useApiRequest from "../../hooks/useRequest";
import {
  confirmPasswordValidationRule,
  emailValidationRule,
  nameValidationRule,
  passwordValidationRule,
  photoValidationRule,
  positonValidationRule,
  phoneValidationRule,
} from "@/utils/validationRules";

// Interface for form data
interface FormValues {
  name: string;
  email: string;
  phone: string;
  position: string;
  password: string;
  confirmPassword: string;
  photo: File | null;
}

// Interface for positon
interface Position {
  id: string;
  name: string;
}

// main form component
export const JoinUsForm: FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [positions, setPositions] = useState<Position[]>([]);
  const [selectedPosition, setSelectedPosition] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const { imageError, fileName, handleFileChange } = useImageValidation({});

  // Hook for post request
  const {
    makeRequest: makePostRequest,
    loading: postLoading,
    error: postError,
  } = useApiRequest<FormData>(
    "https://frontend-test-assignment-api.abz.agency/api/v1/users",
    "POST"
  );

  // Hook for get request
  const {
    makeRequest: makeGetRequest,
    loading: getLoading,
    error: getError,
  } = useApiRequest<void>(
    "https://frontend-test-assignment-api.abz.agency/api/v1/positions",
    "GET"
  );

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const data = await makeGetRequest(); // Use get request with hook
        if (data.positions) {
          setPositions(data.positions);
          if (data.positions.length > 0) {
            const defaultPosition = data.positions[0].id;
            setSelectedPosition(String(defaultPosition));
            setFieldValue("position", defaultPosition);
          }
        }
      } catch (error) {
        console.error("Ошибка при получении позиций:", getError);
      }
    };

    fetchPositions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initialValues: FormValues = {
    name: "",
    email: "",
    phone: "",
    position: selectedPosition,
    password: "",
    confirmPassword: "",
    photo: null,
  };

  const validationSchema = Yup.object({
    name: nameValidationRule(),
    email: emailValidationRule(),
    phone: phoneValidationRule(),
    position: positonValidationRule(),
    password: passwordValidationRule(),
    confirmPassword: confirmPasswordValidationRule(),
    photo: photoValidationRule(),
  });

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
    onSubmit: async (
      values: FormValues,
      { setFieldError }: FormikHelpers<FormValues>
    ) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("position_id", selectedPosition);
      formData.append("photo", values.photo as Blob);

      try {
        setIsSuccess(true);
      } catch (error) {
        setFieldError("email", "Ошибка при регистрации");
      }
    },
  });

  const handleUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileChange(file, setFieldValue);
    }
  };

  const getShortFileName = (name: string) => {
    const maxLength = 20;
    if (name.length <= maxLength) {
      return name;
    }
    return `${name.substring(0, 7)}...${name.substring(name.length - 10)}`;
  };

  return (
    <>
      {postLoading || getLoading ? (
        <Preloader />
      ) : isSuccess ? (
        <div className={style.success_screen}>
          <h4 className={style.success_title}>User successfully registered</h4>
          <img
            src={"./images/Success.png"}
            alt="Success"
            className={style.success_img}
          />
        </div>
      ) : (
        <form className={style.form} id="signUpForm" onSubmit={handleSubmit}>
          <h3 className={style.form_title}>Working with POST request</h3>
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
            <InputMasked
              id="phone"
              value={values.phone}
              type="tel"
              placeholder="Phone"
              onChange={handleChange}
              onBlur={handleBlur}
              name="phone"
              errorMessage={touched.phone && errors.phone}
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
            <div className={style.radio_wrapper}>
              <h2 className={style.radio_buttons__title}>
                Select your position
              </h2>
              {positions.map((position) => (
                <RadioButton
                  key={position.id}
                  position={position}
                  selectedPosition={selectedPosition}
                  onChange={(value) => {
                    setSelectedPosition(value);
                    setFieldValue("position", value);
                  }}
                />
              ))}
            </div>
            <div
              className={classNames(style.upload_container, {
                [style.error_border]: imageError,
              })}
            >
              <button
                type="button"
                onClick={handleUpload}
                className={classNames(style.upload_button, {
                  [style.error_btn_input]: imageError,
                })}
              >
                Upload
              </button>
              <input
                ref={fileInputRef}
                className={style.img_input}
                type="file"
                name="photo"
                onChange={handleFileInputChange}
                onBlur={handleBlur}
                style={{ display: "none" }}
              />
              <div className={style.image_preview_container}>
                {fileName ? getShortFileName(fileName) : "Upload your photo"}
              </div>
              {imageError && (
                <div className={style.error_message}>{imageError}</div>
              )}
            </div>
            {(postError || getError) && (
              <div className={style.error_message}>{postError || getError}</div>
            )}
            <div className={style.form_btn_wrapper}>
              <Button
                type="submit"
                disabled={!isValid || !dirty || postLoading}
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
