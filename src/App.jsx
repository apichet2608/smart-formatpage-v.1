import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageFormat1 from "./Pages/Page-Format/main/page-format.jsx";
import Navbar from "./Components/common/Navbar/navbar.jsx";
import { useDarkMode } from "./Components/common/DarkModeContext/DarkModeContext.jsx";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer() {
  const { isDarkMode } = useDarkMode();
  const theme = useTheme();

  return (
    <div
      style={{ backgroundColor: isDarkMode ? "#E0E4E5" : "#FFFFFF" }}
      className="h-screen"
    >
      <Router>
        <Box
          sx={{
            display: "fixed",
            // bgcolor: isDarkMode ? theme.palette.background.default : "green",
          }}
        >
          <Navbar isDarkMode={isDarkMode} />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <div className="container mx-auto">
              <DrawerHeader />
              <Routes>
                <Route
                  path="/"
                  element={<PageFormat1 isDarkMode={isDarkMode} />}
                />
                <Route
                  path="/page"
                  element={<PageFormat1 isDarkMode={isDarkMode} />}
                />
              </Routes>
            </div>
          </Box>
        </Box>
      </Router>
    </div>
  );
}
