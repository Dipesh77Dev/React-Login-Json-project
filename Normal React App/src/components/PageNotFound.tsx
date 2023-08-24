import React from "react";

import { Container, Typography, Button, Box } from "@mui/material";

import { Link } from "react-router-dom";

const PageNotFound: React.FC = () => {
  return (
    <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "20%" }}>
      <Typography variant="h4" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        The page you are looking doesn't exist...
      </Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        style={{ marginTop: "20px" }}
      >
        <Button component={Link} to="/" variant="contained" color="primary">
          Go to Login Page
        </Button>
        <Button component={Link} to="/home" variant="contained" color="primary">
          Go to Home Page
        </Button>
      </Box>
    </Container>
  );
};

export default PageNotFound;






/*
import Link from "@mui/material/Link";

const link = "/api" || "/" || "/home";
const link1 = "/";
const link2 = "/home";

<Link href={link1} underline="none">
{'Go to Login'}
</Link>
<Link href={link2} underline="none">
{'Go to Data'}
</Link>
*/
