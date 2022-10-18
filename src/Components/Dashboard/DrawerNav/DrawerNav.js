import React from "react";
import "./DrawerNav.css";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Pages from "../Pages/Pages/Pages";
import SearchIcon from "@mui/icons-material/Search";
import MarkChatUnreadOutlinedIcon from "@mui/icons-material/MarkChatUnreadOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import SidebarHome from "../SidebarHome/SidebarHome";

const drawerWidth = 290;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  color: "white",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const DrawerNav = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} style={{ background: "#fff" }}>
          <Toolbar>
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <div style={{ color: "rgb(5, 154, 84)" }} className="page-nav">
              <div>
                <h2
                  style={{
                    display: "inline-block",
                    fontWeight: 600,
                    width: 200,
                  }}
                >
                  Job Management
                </h2>
              </div>

              <div className="page-nav-icons">
                <div className="nav_search">
                  <SearchIcon />
                  <input type="text" placeholder="Search" />
                </div>

                <MarkChatUnreadOutlinedIcon
                  className="nav-icon"
                  style={{ marginRight: 40, marginLeft: 20 }}
                />
                <EmailOutlinedIcon
                  className="nav-icon"
                  style={{ marginRight: 40 }}
                />
                <TranslateOutlinedIcon
                  className="nav-icon"
                  style={{ marginRight: 40 }}
                />
              </div>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader
            style={{
              backgroundColor: "rgb(5, 154, 84)",
            }}
          >
            <div className="sidebar-tops">
              <div className="sidebar-avatar">
                <Stack direction="row" spacing={2}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeOpBzZ5ZzJnje_hCvMVsL6ZLCs7oT2yGivf0ZBaQJ0A&s"
                  />
                </Stack>
              </div>
              <div className="sidebar-text">
                <h4>Anarul Islam</h4>
                <h6>Admin</h6>
              </div>
              <div className="sidebar-icon"></div>
            </div>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <LogoutOutlinedIcon style={{ color: "white" }} />
              ) : (
                <LogoutOutlinedIcon style={{ color: "white" }} />
              )}
            </IconButton>
          </DrawerHeader>

          <div>
            <SidebarHome></SidebarHome>
          </div>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <Pages />
        </Main>
      </Box>
    </div>
  );
};

export default DrawerNav;
