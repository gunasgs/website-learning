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
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Logo from "../Assets/greatlearning-brand.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const pages = [
  "career support",
  "success stories",
  "study abroad",
  "enterprise",
  "for recruiters",
  "more ",
];
const settings = ["free counselling webinars", "blog", "free online course"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#fff",
        color: "#000",
        height: "70px",
        boxShadow: 1,
        pt: "5px",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
            <img src={Logo} alt="logo" loading="lazy" className="logo-img" />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, }}>
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
                display: { xs: "block", md: "none", color: "#000" },
              }}
            >

              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} >
                  <Typography textAlign="center" sx={{ px: 2 }}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>


          <Box sx={{ flexGrow: 2, display: { xs: "none", md: "flex" } }}>
            <Button
              href="#text-buttons"
              variant="contained"
              size="large"
              endIcon={<KeyboardArrowDownIcon />}
              sx={{
                my: "auto",
                px: "12px",
                fontSize: "14px",
                textTransform: "capitalize",
                fontWeight: "700",
              }}
            >
              explore programs
            </Button>
            {pages.map((page) => (
              <Typography
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  px: "2px",
                  mx: 2,
                  color: "rgba(0,0,0,0.65)",
                  fontWeight: "600",
                  display: "block",

                  fontSize: "15px",
                  cursor: "pointer",
                  textTransform: "capitalize",
                  "&:hover": {
                    color: "#3079E8",
                  },
                }}
              >
                {page}
              </Typography>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" }, backgroundColor: "#F8F8F8" }}>
            <Button
              href="#text-buttons"
              sx={{
                fontWeight: "700",
                px: 3,
                py: "10px",
                "&:hover": {
                  boxShadow: 1,
                },
              }}
            >
              LOGIN
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
