import React, { FC, FocusEvent, ChangeEvent } from "react";

export interface InputProps {
  id: string;
  errorMessage: string | false | undefined;
  value: string;
  placeholder: string;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  name: string;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
  tooltip?: string;
}