// src/components/Form/components/RadioButton.jsx
// eslint-disable-next-line no-unused-vars
import React, { FC, ChangeEvent } from "react";
import styles from "./Radio.module.scss";

interface Position {
  id: string;
  name: string;
}

interface RadioButtonProps {
  position?: Position;
  selectedPosition?: string;
  onChange?: (value: string) => void;
}

export const RadioButton: FC<RadioButtonProps> = ({
  position,
  selectedPosition,
  onChange,
}) => {
  if (!position) {
    return null;
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  console.log(">>>>>", selectedPosition, position.name, position);
  return (
    <label key={position.id} className={styles.pure_material_radio}>
      <input
        type="radio"
        value={position.id}
        name="group"
        checked={selectedPosition === String(position.id)}
        onChange={handleChange} // Use the handleChange function
        className={styles.radio_buttons__input}
      />
      <span className={styles.radio_buttons__span}>{position.name}</span>
    </label>
  );
};
