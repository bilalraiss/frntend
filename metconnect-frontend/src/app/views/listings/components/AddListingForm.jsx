import { DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Icon,
  Radio,
  RadioGroup,
  styled, TextareaAutosize,
} from "@mui/material";
import { Span } from "app/components/Typography";
import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));

const AddListingForm = () => {
  const [state, setState] = useState({ date: new Date() });

  useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== state.password) return false;

      return true;
    });
    return () => ValidatorForm.removeValidationRule("isPasswordMatch");
  }, [state.password]);

  const handleSubmit = (event) => {
    // console.log("submitted");
    // console.log(event);
  };

  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleDateChange = (date) => setState({ ...state, date });

  const {
    username,
    firstName,
    creditCard,
    mobile,
    password,
    confirmPassword,
    gender,
    date,
    email,
  } = state;

  return (
    <div>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <Grid container spacing={6}>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <TextField
              type="text"
              name="username"
              id="standard-basic"
              value={username || ""}
              onChange={handleChange}
              errorMessages={["this field is required"]}
              label="Item Name (Min length 4, Max length 50)"
              validators={["required", "minStringLength: 4", "maxStringLength: 50"]}
            />

            <TextField
              type="Number"
              name="firstName"
              label="Quantity"
              onChange={handleChange}
              value={firstName || ""}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />

            <TextField
              sx={{ mb: 2 }}
              type={"currency"}
              name="price"
              label="Price Per Unit"
              onChange={handleChange}
              value={creditCard || ""}
              errorMessages={["this field is required"]}
              validators={["required", "minStringLength:16", "maxStringLength: 16"]}
            />

            <TextField
              sx={{ mb: 4 }}
              type="text"
              name="location"
              value={mobile || ""}
              label="Location"
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={date}
                onChange={handleDateChange}
                renderInput={(props) => (
                  <TextField
                    {...props}
                    label="Delivery By"
                    id="mui-pickers-date"
                    sx={{ mb: 2, width: "100%" }}
                  />
                )}
              />
            </LocalizationProvider>

          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>

            <TextField
              name="feature"
              type="text"
              label="Features or Specifications"
              value={password || ""}
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
            <TextareaAutosize
              style={{ width: 630, height: 240 }}
              sx={{ mb: 2 }}
              type="text"
              name="details"
              placeholder={"Description"}
              onChange={handleChange}
              label="Description"
              value={confirmPassword || ""}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />

            <TextField
              type="email"
              name="email"
              label="Email"
              value={email || ""}
              onChange={handleChange}
              validators={["required", "isEmail"]}
              errorMessages={["this field is required", "email is not valid"]}
            />

            <RadioGroup
              row
              name="role"
              sx={{ mb: 2 }}
              value={gender || ""}
              onChange={handleChange}
            >
              <FormControlLabel
                value="Investor"
                label="Investor"
                labelPlacement="end"
                control={<Radio color="secondary" />}
              />

              <FormControlLabel
                value="Seller"
                label="Seller"
                labelPlacement="end"
                control={<Radio color="secondary" />}
              />

              <FormControlLabel
                value="Buyer"
                label="Buyer"
                labelPlacement="end"
                control={<Radio color="secondary" />}
              />
            </RadioGroup>

            <FormControlLabel
              control={<Checkbox />}
              label="I have read and agree to the terms of service."
            />
          </Grid>
        </Grid>

        <Button color="primary" variant="contained" type="submit">
          <Icon>send</Icon>
          <Span sx={{ pl: 1, textTransform: "capitalize" }}>Submit</Span>
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default AddListingForm;
