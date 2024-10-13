import * as Yup from "yup";

export const emailValidationRule = () => {
  return Yup.string()
    .matches(
      /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,3}$/,
      "Must contain '@' and a domain name"
    )
    .required("Email is required");
};

export const passwordValidationRule = () => {
  return Yup.string()
    .min(6, "Password must be at least 6 or more characters long")
    .required("Password is required");
};

export const confirmPasswordValidationRule = () => {
  return Yup.string()
    .oneOf([Yup.ref("password")], "Password must be same")
    .required("Confirme password please");
};

export const photoValidationRule = () => {
  return Yup.mixed().required("You must have photo");
};

export const positonValidationRule = () => {
  return Yup.string().required("You must choose your position");
};

export const phoneValidationRule = () => {
  return Yup.string()
    .min(3, "Phone must contains 9 or more symbols")
    .required("You must write a phone");
};

export const nameValidationRule = () => {
    return Yup.string()
        .min(3, "Name must contains 3 symbols")
        .required("You must write name");
}