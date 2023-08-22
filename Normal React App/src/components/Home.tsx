import React from "react";

import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const isFormValid = localStorage.getItem("formData") !== null;

  const handleDisplayJSON = () => {
    let navigation = confirm("Are you sure you want to navigate");
    if (navigation) {
      navigate("/api");
    } else {
      navigate("/home");
    }
  };

  return (
    <>
      {isFormValid ? "" : <Home />}
      <div>
        <p>
          Congratulations! You had successfully accessed this page, you can now
          proceed to the next page, by clicking on the "Next" button.
        </p>
      </div>
      <Button variant="contained" onClick={handleDisplayJSON}>
        Next Page
      </Button>
    </>
  );
};

export default Home;
