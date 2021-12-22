import { Button } from "@mui/material";
import { useFormikContext } from "formik";
import React from "react";

export default function MSubmit({ children, ...otherProps }) {
  const { submitForm } = useFormikContext();

  const handleSubmit = (values) => {
    submitForm();
  };

  const configButton = {
    fullWidth: true,
    variant: "contained",
    color: "primary",
    onClick: handleSubmit,
  };
  return <Button {...configButton}>{children}</Button>;
}
