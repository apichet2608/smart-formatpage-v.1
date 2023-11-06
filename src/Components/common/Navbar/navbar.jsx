import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import FujiLogo from "../../../../public/Fuji.png";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import Icon1 from "../../../../public/icon/icons8-donate-48.png";
import Icon2 from "../../../../public/icon/icons8-money-box-48.png";
import Icon3 from "../../../../public/icon/icons8-money-bag-48.png";
import PageTitle from "./Title/Title";
// import Pages from "./Pages/Page-2/main/page";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

// สร้าง mixin สำหรับสไตล์ของ Drawer เมื่อถูกปิด
const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        // sx={{ backgroundColor: "#42a5f5" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <PageTitle />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          "& .MuiDrawer-paper": {
            // backgroundColor: "#fafafa",
          },
        }}
      >
        <DrawerHeader>
          <img
            src={FujiLogo}
            alt="คำอธิบายภาพ"
            style={{
              width: 180,
              height: 45,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              objectFit: "contain",
            }}
          />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {open ? (
          <ListItem disablePadding sx={{ display: "block", mt: 1, pl: 1 }}>
            <ListItemText
              primary={
                <Typography
                  component="div"
                  variant="subtitle2"
                  fontWeight="bold"
                  sx={{
                    opacity: open ? 1 : 0,
                    color: "#616161",
                    fontFamily: "Arial, sans-serif",
                    fontSize: "16px",
                  }}
                >
                  Title
                </Typography>
              }
            />
          </ListItem>
        ) : null}
        <List>
          {["Page", "Page2", "Page3"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                component={Link}
                to={`/${text.toLowerCase().split(" ").join("-")}`}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {text === "Page" ? (
                    <img
                      style={{ width: "24px", height: "24px" }}
                      src={Icon1}
                    />
                  ) : text === "Page2" ? (
                    <img
                      style={{ width: "24px", height: "24px" }}
                      src={Icon2}
                    />
                  ) : text === "Page3" ? (
                    <img
                      style={{ width: "24px", height: "24px" }}
                      src={Icon3}
                    />
                  ) : text === "4" ? (
                    <StackedLineChartIcon />
                  ) : (
                    <StackedLineChartIcon />
                  )}
                </ListItemIcon>
                {/* <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} /> */}
                <ListItemText
                  primary={
                    <Typography
                      component="div"
                      variant="subtitle2"
                      fontWeight="bold"
                      sx={{
                        opacity: open ? 1 : 0,
                        color: "#616161",
                        fontFamily: "Arial, sans-serif",
                        fontSize: "16px",
                        // fontSize: 15,
                        // fontWeight: "medium",
                        lineHeight: "20px",
                        mb: "2px",
                        // textOverflow: "ellipsis",
                        // whiteSpace: "nowrap",
                        // overflow: "hidden",
                      }}
                    >
                      {text}
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </>
  );
}
