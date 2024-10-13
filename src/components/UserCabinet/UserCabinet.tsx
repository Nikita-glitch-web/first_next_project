import React, { useState, useRef, ChangeEvent } from "react";
import { updateProfile } from "firebase/auth";
import { useAuthStore } from "@/store/auth";
import { Button } from "../Controls/Button";
import { Input } from "../Input/Input";
import { InputMasked } from "../Input/InputMasked";
import { Preloader } from "../Preloader/Preloader";
import style from "./UserCabinet.module.css";
import { doc, updateDoc } from "firebase/firestore"; // Для оновлення в Firestore
import { db } from "../../store/auth/firebase.config"; // Імпорт конфігурації Firestore
import classNames from "classnames";

export const UpdateProfile: React.FC = () => {
  const { user } = useAuthStore(); // Отримуємо користувача зі стану

  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const fileInputRef = useRef<HTMLInputElement | null>(null); // для роботи з інпутом для фото
  const [fileName, setFileName] = useState<string | null>(null);
  const [imageError, setImageError] = useState<string | null>(null);

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNumber(event.target.value);
  };

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setPhotoURL(URL.createObjectURL(file)); // Встановлюємо URL зображення
      setImageError(null); // Скидаємо помилку
    }
  };

  const handleUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Відкриваємо інпут при кліці на кнопку
    }
  };

  const getShortFileName = (name: string) => {
    const maxLength = 20;
    if (name.length <= maxLength) {
      return name;
    }
    return `${name.substring(0, 7)}...${name.substring(name.length - 10)}`;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      if (user) {
        // Оновлюємо фото профілю
        await updateProfile(user, { photoURL });

        // Оновлюємо номер телефону у Firestore
        const userDocRef = doc(db, "users", user.uid); // Отримуємо документ користувача
        await updateDoc(userDocRef, {
          phoneNumber: phoneNumber, // Оновлюємо номер телефону у Firestore
        });

        setSuccessMessage("Profile updated successfully!");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      setErrorMessage("Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Якщо користувач не залогінений
  if (!user) {
    return (
      <div className={style.form_content_wrapper}>
        <h2 className={style.form_title}>Please Login</h2>
        <p className={style.text}>You need to log in to update your profile.</p>
      </div>
    );
  }

  return (
    <div className={style.form_content_wrapper}>
      {loading ? (
        <Preloader />
      ) : (
                  <form className={style.form} onSubmit={handleSubmit}>
                      <h3 className={style.title}>Update your profile here</h3>
          <div className={style.form_group}>
            <InputMasked
              id="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              type="tel"
              placeholder="Enter your phone number"
              errorMessage={undefined}
              name={""}
              onBlur={function (
                event: React.FocusEvent<HTMLInputElement>
              ): void {
                throw new Error("Function not implemented.");
              }}
            />
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
              style={{ display: "none" }} // Приховуємо інпут
            />
            <div className={style.image_preview_container}>
              {fileName ? getShortFileName(fileName) : "Upload your photo"}
            </div>
            {imageError && (
              <div className={style.error_message}>{imageError}</div>
            )}
          </div>
          <div className={style.form_btn_wrapper}>
            <Button type="submit" className={style.submit_btn}>
              Update Profile
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default UpdateProfile;
