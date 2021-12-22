import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useField, useFormikContext } from "formik";
import { FormControl, FormLabel } from "@mui/material";

export default function MCheckbox({ name, legend, label, ...otherProps }) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (evt) => {
    const { checked } = evt.target;
    setFieldValue(name, checked);
  };
  const configCheck = {
    ...field,
    ...otherProps,
    onChange: handleChange,
  };
  if (meta && meta.touched && meta.error) {
    configCheck.error = true;
    configCheck.helperText = meta.error;
  }
  return (
    <FormControl>
      <FormGroup>
        <FormLabel component="legend">{legend}</FormLabel>
        <FormControlLabel
          control={<Checkbox {...configCheck} />}
          label={label}
        />
      </FormGroup>
    </FormControl>
  );
}
