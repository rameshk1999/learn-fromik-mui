import { TextField } from "@mui/material";
import { useField } from "formik";
import React from "react";

function MDateTime({ name, ...otherProps }) {
  const [field, meta] = useField(name);
  const configDateTime = {
    ...field,
    ...otherProps,
    variant: "outlined",
    type: "date",
    fullWidth: true,
    InputLabelProps: {
      shrink: true,
    },
  };
  if (meta && meta.touched && meta.error) {
    configDateTime.error = true;
    configDateTime.helperText = meta.error;
  }
  return <TextField {...configDateTime} />;
}

export default MDateTime;
