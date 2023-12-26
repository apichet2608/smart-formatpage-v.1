import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { NavLink, useLocation } from "react-router-dom";

export default function Title() {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    const getPageTitle = () => {
      switch (location.pathname) {
        case "/page":
          return "Page1";

        default:
          return "";
      }
    };
    const title = getPageTitle();
    setPageTitle(title);
  }, [location.pathname]);

  return (
    <>
      <Typography variant="h6" noWrap component="div">
        {pageTitle}
      </Typography>
    </>
  );
}
