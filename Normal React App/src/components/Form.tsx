import React, { useState } from "react";

import { TextField, Button } from "@mui/material";
import Box from "@mui/material/Box";

import { useNavigate } from "react-router-dom";

import Home from "./Home";

interface FormData {
  name: string;
  phoneNo: number;
  email: string;
}

const Form: React.FC = () => {
  const [formDetail, setFormDetail] = useState<FormData>({
    name: "",
    phoneNo: 9,
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
  const handleFormSubmit = () => {
    if (formDetail.name && formDetail.phoneNo && formDetail.email) {
      localStorage.setItem("formData", JSON.stringify(formDetail));
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
                marginTop: 8,
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
              helperText="Enter Your Name"
              // required
            />
            <TextField
              // error
              id="outlined-number"
              type="number" 
              label="Phone Number"
              name="phoneNo"
              value={formDetail.phoneNo}
              onChange={handleFormChange}
              helperText="Enter Your Phone Number"
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
              helperText="Enter Your correct email"
              // required
            />
            <Button variant="contained" onClick={handleFormSubmit}>
              Submit
            </Button>
          </Box>
        </>
      )}
    </div>
  );
};

export default Form;
