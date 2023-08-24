import React from "react";

import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";

const InvalidUser: React.FC = () => {
  return (
    <>
      <Typography variant="h3" gutterBottom style={{ marginTop: "200px", textAlign: "center" }}>
        You are new, So please login first to get access...{" "}
      </Typography>
      <Button variant="contained" component={Link} to="/" style={{marginLeft: '47%'}}>
        Login
      </Button>
    </>
  );
};

export default InvalidUser;
