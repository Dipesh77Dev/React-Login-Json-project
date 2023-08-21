import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface FormData {
  name: string;
  email: string;
}

const Form: React.FC = () => {
  const navigate = useNavigate();

  const [formDetail, setFormDetail] = useState<FormData>({
    name: "",
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

  const handleFormSubmit = () => {
    if (formDetail.name && formDetail.email) {
      localStorage.setItem("formData", JSON.stringify(formDetail));
      setIsFormValid(true);
      alert("Your Data had been successfully saved");
      navigate('/api');
    }
  };

  return (
    <div>
      <TextField
        label="Name"
        name="name"
        value={formDetail.name}
        onChange={handleFormChange}
        required
      />
      <TextField
        label="Email"
        name="email"
        value={formDetail.email}
        onChange={handleFormChange}
        required
      />
      <Button variant="contained" onClick={handleFormSubmit}>
        Save & Proceed
      </Button>
    </div>
  );
};

export default Form;
