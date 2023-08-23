import React from "react";
import Link from "@mui/material/Link";

const PageNotFound: React.FC = () => {
    const link = "/api" || "/" || "/home"
  return (
    <>
      <div>Page Not Found</div>
      <Link href={link} underline="none">
        {'Go to Login'}
      </Link>
    </>
  );
};

export default PageNotFound;
