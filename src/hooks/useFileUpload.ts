import { useState, useRef, ChangeEvent } from "react";

export const useFileUpload = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [imageError, setImageError] = useState<string | null>(null);
  const [photoURL, setPhotoURL] = useState<string | null>(null);

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

  return {
    fileInputRef,
    fileName,
    imageError,
    photoURL,
    setImageError,
    handleFileInputChange,
    handleUpload,
    getShortFileName,
  };
};
