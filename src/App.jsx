import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PageFormat1 from "./Pages/Page-Format/main/page-format.jsx";
import Navbar from "./Components/common/Navbar/navbar.jsx";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer() {
  return (
    <Router>
      <Box sx={{ display: "fixed" }}>
        <Navbar />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div className="container mx-auto">
            <DrawerHeader />
            <Routes>
              <Route path="/" element={<PageFormat1 />} />
              <Route path="/page" element={<PageFormat1 />} />
            </Routes>
          </div>
        </Box>
      </Box>
    </Router>
  );
}
