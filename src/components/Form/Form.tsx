/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef, ChangeEvent, FC } from "react";
import classNames from "classnames";
import style from "./Form.module.css";
import { Button } from "../Controls/Button";
import { Input, InputMasked, RadioButton } from "./components";
import { Preloader } from "./components";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import useImageValidation from "./useImageValidation";
import useApiRequest from "./useRequest";

// Интерфейс для данных формы
interface FormValues {
  name: string;
  email: string;
  phone: string;
  position: string;
  photo: File | null;
}

// Интерфейс для позиции
interface Position {
  id: string;
  name: string;
}

// Основной компонент формы
export const UploadImageForm: FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [positions, setPositions] = useState<Position[]>([]);
  const [selectedPosition, setSelectedPosition] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const { imageError, fileName, handleFileChange } = useImageValidation({});

  // Хук для POST запроса
  const {
    makeRequest: makePostRequest,
    loading: postLoading,
    error: postError,
  } = useApiRequest<FormData>(
    "https://frontend-test-assignment-api.abz.agency/api/v1/users",
    "POST"
  );

  // Хук для GET запроса
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
        const data = await makeGetRequest(); // Используем GET запрос через хук
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
    photo: null,
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Имя должно содержать минимум 3 символа")
      .required("Имя обязательно"),
    email: Yup.string()
      .matches(
        /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,3}$/,
        "Должно содержать '@' и доменное имя"
      )
      .required("Электронная почта обязательна"),
    phone: Yup.string()
      .min(3, "Телефон должен содержать минимум 3 символа")
      .required("Телефон обязателен"),
    position: Yup.string().required("Позиция обязательна"),
    photo: Yup.mixed().required("Фото обязательно"),
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
        await makePostRequest(formData); // Вызов POST запроса через хук
        setIsSuccess(true);
      } catch {
        setFieldError("photo", "Не удалось отправить данные");
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
