import React, { FormEvent, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuthStore } from "@/store/auth";
import { Button } from "../Controls/Button";
import { InputMasked } from "../Input/InputMasked";
import { Preloader } from "../Preloader/Preloader";
import style from "./UserProfile.module.css";
import classNames from "classnames";
import { useUpdateProfile } from "./hooks/useProfileUpdate";
import { useFileUpload } from "../../hooks/useFileUpload";
import { usePhoneNumber } from "../../hooks/usePhoneNumber";

export const UpdateProfile: React.FC = () => {
  const { user } = useAuthStore();
  const router = useRouter();

  const { loading, successMessage, errorMessage, handleUpdateProfile } =
    useUpdateProfile();
  const { phoneNumber, handlePhoneNumberChange } = usePhoneNumber(
    user?.phoneNumber || ""
  );
  const {
    fileInputRef,
    fileName,
    imageError,
    handleFileInputChange,
    handleUpload,
    getShortFileName,
  } = useFileUpload();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await handleUpdateProfile(phoneNumber);
  };

  useEffect(() => {
    if (!user) {
      router.push("/403");
    }
  }, [user, router]);

  return (
    <div className={style.form_content_wrapper}>
      {loading ? (
        <Preloader />
      ) : (
        <form className={style.form} onSubmit={handleSubmit}>
          <h3 className={style.title}>Update your profile here</h3>
          <div className={style.form_content_wrapper}>
            <InputMasked
              id="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              type="tel"
              placeholder="Enter your phone number"
              errorMessage={errorMessage}
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
              className={classNames(style.upload_button)}
            >
              Upload
            </button>
            <input
              ref={fileInputRef}
              className={style.img_input}
              type="file"
              name="photo"
              onChange={handleFileInputChange}
              style={{ display: "none" }}
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
