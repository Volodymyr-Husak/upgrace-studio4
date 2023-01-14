import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";

import { Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import { LinkEl } from "./AppBar.styled";
import { LinkElMenu } from "./AppBar.styled";
import css from "./AppBar.module.css";

import logo from "../../images/logo/logo.jpg";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    beige: {
      main: "RGB(143, 110, 106)",
    },
  },
});

// const pages = ['Наші роботи', 'Прайс', 'Майстри', 'Контакти'];
const pages2 = [
  { name: "Головна", path: "/" },
  { name: "Наші роботи", path: "/our-works" },
  { name: "Прайс", path: "/price" },
  // { name: "Майстри", path: "/masters" },
  { name: "Контакти", path: "/contacts" },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="beige">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <Avatar
              alt="Logo"
              src={logo}
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              className={css.logo}
              variant="h6"
              // variant="body1"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                // fontFamily: 'monospace',
                fontWeight: 700,
                // letterSpacing: '.3rem',
                color: "#fff",
                textDecoration: "none",
              }}
            >
              Upgrace Studio
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages2.map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    {/* <Typography textAlign="center" >
                      {page}
                    </Typography> */}
                    <LinkElMenu
                      to={page.path}
                      // className={css.link_menu}
                    >
                      {page.name}
                    </LinkElMenu>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* <Avatar alt="Logo" src="/static/images/avatar/1.jpg" /> */}
            <Avatar
              alt="Logo"
              src={logo}
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
            {/* <img src="../../images/logo/logo.jpg" alt="Logo" width="100" /> */}
            {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
            <Typography
              className={css.logo}
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                // fontFamily: 'monospace',
                fontWeight: 700,
                // letterSpacing: '.3rem',
                color: "#fff",
                textDecoration: "none",
              }}
            >
              Upgrace Studio
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages2.map((page) => (
                <LinkEl key={page.name} to={page.path}>
                  {page.name}
                </LinkEl>
              ))}
            </Box>
            <Box sx={{ display: "flex" }}>
              <li style={{ listStyle: "none", marginRight: "10px" }}>
                <a href="https://www.instagram.com/upgrace_studio_/?igshid=YmMyMTA2M2Y%3D">
                  <Icon name="instagram" size="big" link color="black" />
                </a>
              </li>
              <li style={{ listStyle: "none" }}>
                <a href="tel:+380972137860">
                  <Icon name="phone" size="big" link color="black" />
                </a>
              </li>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;
