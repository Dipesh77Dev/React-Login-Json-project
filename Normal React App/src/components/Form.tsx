import React, { useState } from "react";

import { TextField, Button } from "@mui/material";
import Box from "@mui/material/Box";

import { useNavigate } from "react-router-dom";

import Home from "./Home";

interface FormData {
  name: string;
  phoneNo: string;
  email: string;
}

const Form: React.FC = () => {
  const [formDetail, setFormDetail] = useState<FormData>({
    name: "",
    phoneNo: "",
    email: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormDetail((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  // validation -

  const [nameError, setNameError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateName = () => {
    if (!formDetail.name) {
      setNameError("Name is required");
    } else {
      setNameError("");
    }
  };

  const validatePhoneNumber = () => {
    if (!formDetail.phoneNo) {
      setPhoneNumberError("Phone number is required");
    } else if (!/^\d{10}$/.test(formDetail.phoneNo)) {
      setPhoneNumberError("Invalid phone number");
    } else {
      setPhoneNumberError("");
    }
  };

  const validateEmail = () => {
    if (!formDetail.email) {
      setEmailError("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(formDetail.email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handleFormSubmit = () => {
    validateName();
    validatePhoneNumber();
    validateEmail();

    if (
      !nameError &&
      !phoneNumberError &&
      !emailError &&
      formDetail.name &&
      formDetail.phoneNo &&
      formDetail.email
    ) {
      localStorage.setItem("formData", JSON.stringify(formDetail));
      console.log(formDetail);
      setIsFormValid(true);
      alert("Your Data had been successfully saved");
      navigate("/home");
    }
  };

  return (
    <div>
      {isFormValid ? (
        <Home />
      ) : (
        <>
          <Box
            component="form"
            sx={{
              marginTop: "70px",
              width: 700,
              height: 500,
              marginLeft: "auto",
              marginRight: "auto",
              backgroundColor: "slategray",
              "& .MuiTextField-root": {
                marginLeft: 15,
                width: "55ch",
                p: 2,
                marginTop: 2,
              },
              "& .MuiButton-root": {
                marginLeft: 20,
                width: "40ch",
                marginTop: 6,
              },
            }}
            autoComplete="off"
            noValidate
          >
            <TextField
              // error
              id="outlined-required"
              type="text"
              label="Name"
              name="name"
              value={formDetail.name}
              onChange={handleFormChange}
              placeholder="Please Enter Your Name"
              // helperText="Enter Your Name"
              onBlur={validateName}
              error={!!nameError}
              helperText={nameError}
              // required
            />
            <TextField
              // error
              id="outlined-number"
              type="text"
              label="Phone Number"
              name="phoneNo"
              value={formDetail.phoneNo}
              onChange={handleFormChange}
              // helperText="Enter Your Phone Number"
              onBlur={validatePhoneNumber}
              error={!!phoneNumberError}
              helperText={phoneNumberError}
              // required
            />
            <TextField
              // error
              id="outlined-required"
              type="email"
              label="Email"
              name="email"
              value={formDetail.email}
              onChange={handleFormChange}
              // helperText="Enter Your correct email"
              onBlur={validateEmail}
              error={!!emailError}
              helperText={emailError}
              // required
            />
            <Button variant="contained" onClick={handleFormSubmit} style={{width: '30%', marginLeft: '35%'}}>
              Login
            </Button>
          </Box>
        </>
      )}
    </div>
  );
};

export default Form;




/*
if (formDetail.name && formDetail.phoneNo && formDetail.email) {
  localStorage.setItem("formData", JSON.stringify(formDetail));
  console.log(formDetail);
  // setIsFormValid(true);
  alert("Your Data had been successfully saved");
  navigate("/home");
}
*/
