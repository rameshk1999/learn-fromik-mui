import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import { useField, useFormikContext } from "formik";
import { TextField } from "@mui/material";

export default function MSelect({ name, options, label, ...otherProps }) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  const handleChange = (event) => {
    setFieldValue(name, event.target.value);
  };

  const configSelect = {
    ...field,
    ...otherProps,
    select: true,
    fullWidth: true,
    variant: "outlined",
    onChange: handleChange,
  };
  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  return (
    <TextField {...configSelect} label={label}>
      {options.map((country, index) => (
        <MenuItem value={country.country} key={index}>
          {country.country}
        </MenuItem>
      ))}
    </TextField>
  );
}
