import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import Form from "./Form";

const DisplayJSONDataByAPI: React.FC = () => {
  const navigate = useNavigate();

  const Logout = () => {
    localStorage.removeItem("formData");
    alert("You have been logged out successfully...");
    navigate("/");
  };

  return (
    <>
      <div>
        <h2>Next Page</h2>
        <p>Congratulations! You can now proceed to the next page.</p>
      </div>

      <Button variant="contained" onClick={Logout}>
        Logout
      </Button>
    </>
  );
};

export default DisplayJSONDataByAPI;
