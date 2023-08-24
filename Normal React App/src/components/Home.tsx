import React from "react";

import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import InvalidUser from "./InvalidUser";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const getData = localStorage.getItem('formData');

  const handleDisplayJSON = () => {
    let navigation = confirm("Are you sure you want to navigate");
    let finalNavigate = navigation ? navigate("/api") : navigate("/home");
    return finalNavigate;
  };

  return (
    <>
      {getData ? (
        <Box sx={{ width: "100%", textAlign: "center"}} style={{marginTop: '150px'}}>
          <Typography variant="h3" gutterBottom>
            Congratulations! You had successfully accessed this page, you can
            now proceed to the next page, by clicking on the "Next" button.{" "}
          </Typography>
          <Button variant="contained" onClick={handleDisplayJSON}>
            Next Page
          </Button>
        </Box>
      ) : (
        <>
         <InvalidUser />
        </>
      )}
    </>
  );
};

export default Home;





/*
if (navigation) {
  navigate("/api");
} else {
  navigate("/home");
}


{showOrNot ? "" : <Home />}
{userData ? <Home /> : "Plz Login"}


const userData = JSON.parse(localStorage.getItem("formData") || "{}");
const userData = localStorage.getItem("formData") !== null;
console.log(userData);

const showOrNot: any = userData ? navigate("/home") : navigate("/");
const showOrNot: any = userData;


 const [isFormValid, setIsFormValid] = React.useState(false);

  if (isFormValid) {
    const getData = localStorage.getItem("formData") !== null;
    setIsFormValid(true);
    navigate('/home')
    return getData;
  }
  else{
    navigate('/')
  }


*/
