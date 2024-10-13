import React, { useState } from "react";
import { updateProfile } from "firebase/auth";
import { useAuthStore } from "@/store/auth";
import { Button } from "../Controls/Button";
import { Input } from "../Input/Input";
import { InputMasked } from "../Input/InputMasked";
import { Preloader } from "../Preloader/Preloader";
import style from "./profile.module.css";
import { doc, updateDoc } from "firebase/firestore"; // Для оновлення в Firestore
import { db } from "../../store/auth/firebase.config"; // Імпорт конфігурації Firestore

export const UpdateProfile: React.FC = () => {
  const { user } = useAuthStore(); // Отримуємо користувача зі стану

  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNumber(event.target.value);
  };

  const handlePhotoURLChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhotoURL(event.target.value);
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

  return (
    <div className={style.form_content_wrapper}>
      <h2 className={style.form_title}>Update Your Profile</h2>
      {loading ? (
        <Preloader />
      ) : (
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.form_group}>
            <label htmlFor="phoneNumber">Phone Number</label>
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
          <div className={style.form_group}>
            <label htmlFor="photoURL">Profile Photo URL</label>
            <Input
              id="photoURL"
              value={photoURL}
              onChange={handlePhotoURLChange}
              type="text"
              placeholder="Enter URL for profile photo"
              errorMessage={undefined}
              name={""}
              onBlur={function (
                event: React.FocusEvent<HTMLInputElement>
              ): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
          {errorMessage && (
            <div className={style.error_message}>{errorMessage}</div>
          )}
          {successMessage && (
            <div className={style.success_message}>{successMessage}</div>
          )}
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
