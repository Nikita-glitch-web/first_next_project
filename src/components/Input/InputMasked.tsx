import React, { FC, FocusEvent, ChangeEvent } from "react";
import InputMask from "react-input-mask";
import { Input } from "./Input";
import styles from "./Input.module.scss";
import { InputProps } from "./types";

export const InputMasked: FC<InputProps> = ({
  value,
  onFocus,
  onBlur,
  onChange,
  name,
  ...rest
}) => {
  return (
    <div>
      <InputMask
        mask="+380 (99) 999-99-99"
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        name={name}
      >
        {/* @ts-ignore */}
        {(inputProps: any) => (
          <Input {...inputProps} {...rest} placeholder="Phone" />
        )}
      </InputMask>
      <label className={styles.label_phone} htmlFor="phone">
        +38 (XX) XXX - XX - XX
      </label>
    </div>
  );
};
