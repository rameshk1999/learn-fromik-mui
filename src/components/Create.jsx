import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import {
  MCheckbox,
  MDateTime,
  MRadio,
  MSelect,
  MSubmit,
  MTextField,
} from "../lib";
import Countries from "../lib/utils/Countries";

const form_initial_values = {
  firstName: "",
  lastName: "",
  gender: "",
  email: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  country: "",
  arrivalDate: "",
  departureDate: "",
  message: "",
  termsOfSerice: false,
};

const form_validations = Yup.object().shape({
  firstName: Yup.string().min(5).max(35).required("First Name is required"),
  lastName: Yup.string().min(5).max(35).required("Last Name is required"),
  email: Yup.string()
    .email("please enter valid email")
    .min(5)
    .max(35)
    .required("Email is required"),
  gender: Yup.string().required("Gender is required"),
  phone: Yup.string().min(5).max(35).required("Phone is required"),
  addressLine1: Yup.string()
    .min(4)
    .max(45)
    .required("AddressLine1 is required"),
  addressLine2: Yup.string()
    .min(4)
    .max(45)
    .required("AddressLine2 is required"),
  city: Yup.string().min(5).max(35).required("Last Name is required"),
  state: Yup.string().min(5).max(35).required("Last Name is required"),
  country: Yup.string().required("Country is required"),
  arrivalDate: Yup.date().required("Arrival Date is required"),
  departureDate: Yup.date().required("Departure Date  is required"),
  message: Yup.string().min(5).max(35).required("Message is required"),
  termsOfSerice: Yup.boolean()
    .oneOf([true], "Terms of Conditions accepted")
    .required("Terms of Conditions must be accepted"),
});

function Create() {
  console.log(Countries);

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Grid container>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}>
        <Container component="main" maxWidth="md">
          <Box sx={{ mx: 6, my: 8 }}>
            <Formik
              initialValues={form_initial_values}
              validationSchema={form_validations}
              onSubmit={handleSubmit}
            >
              {(handleSubmit) => (
                <Box sx={{ mt: 1 }}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Typography variant="h5" component="h2">
                        User Details
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MTextField name="firstName" label="First Name" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MTextField name="lastName" label="Last Name" />
                    </Grid>
                    <Grid item xs={12}>
                      <MRadio name="gender" label="Gender" legend={"Gender"} />
                    </Grid>
                    <Grid item xs={12}>
                      <MTextField name="email" label="Email" />
                    </Grid>
                    <Grid item xs={12}>
                      <MTextField name="phone" label="Phone" />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h5" component="h2">
                        Address
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <MTextField name="addressLine1" label="AddressLine1" />
                    </Grid>
                    <Grid item xs={12}>
                      <MTextField name="addressLine2" label="AddressLine2" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MTextField name="city" label="City" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MTextField name="state" label="State" />
                    </Grid>
                    <Grid item xs={12}>
                      <MSelect
                        name="country"
                        label="Country"
                        options={Countries}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h5" component="h2">
                        Booking Details
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MDateTime name="arrivalDate" label="Arrival Date" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MDateTime name="departureDate" label="Departure Date" />
                    </Grid>
                    <Grid item xs={12}>
                      <MTextField
                        name="message"
                        label="Message"
                        multiline
                        rows={4}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <MCheckbox
                        name="termsOfSerice"
                        label="Terms and Conditions"
                        legend="Terms of Service"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <MSubmit>Submit</MSubmit>
                    </Grid>
                  </Grid>
                </Box>
              )}
            </Formik>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
}

export default Create;
