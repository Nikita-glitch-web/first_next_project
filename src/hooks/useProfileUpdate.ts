import { useState, useRef, ChangeEvent } from "react";
import { updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../store/auth/useAuthStore";
import { User } from "firebase/auth";

//перенести звідси код в useAuthStore
export const useUpdateProfile = (user: User | null) => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdateProfile = async (phoneNumber: string) => {
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
          phoneNumber, // Оновлюємо номер телефону у Firestore
        });

        setSuccessMessage(
          "Success! You have successfully updated your profile."
        );
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      setErrorMessage("Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    successMessage,
    errorMessage,
    photoURL,
    setPhotoURL,
    handleUpdateProfile,
  };
};
