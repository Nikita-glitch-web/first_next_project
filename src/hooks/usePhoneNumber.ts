import { useState } from "react";

export const usePhoneNumber = (initialValue: string) => {
  const [phoneNumber, setPhoneNumber] = useState(initialValue);

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNumber(event.target.value);
  };

  return {
    phoneNumber,
    handlePhoneNumberChange,
  };
};
