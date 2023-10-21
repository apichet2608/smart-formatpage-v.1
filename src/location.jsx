import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { NavLink, useLocation } from "react-router-dom";

export default function MiniDrawer() {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    const getPageTitle = () => {
      switch (location.pathname) {
        case "/":
          return "Page";
        case "/page/page":
          return "Page";
        case "/page/page2":
          return "Page2";
        case "/page/page3":
          return "Page3";
        default:
          return "";
      }
    };
    // /page/print
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
