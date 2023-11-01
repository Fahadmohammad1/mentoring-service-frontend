"use client";

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
import { useEffect, useState } from "react";
import { Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Link from "next/link";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { tokenKey } from "@/constants/tokenKey";
import { getFromLocalStorage } from "@/utils/local-storage";
import { setUser } from "@/redux/features/user/userSlice";
import { IUser } from "@/types";
import { BsFillBookmarkCheckFill } from "react-icons/bs";

const pages = ["Services", "Become mentor", "Blog"];
const settings = ["Profile", "Login", "Logout"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<HTMLElement | null>(null);
  const [anchorElUser, setAnchorElUser] = useState<HTMLElement | null>(null);

  const dispatch = useAppDispatch();

  const userData = getFromLocalStorage(tokenKey);

  if (userData) {
    const { userId, email, role } = getUserInfo() as IUser;

    dispatch(setUser({ userId, email, role }));
  }

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // const handleOpenModal = () => setOpen(true);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { user } = useAppSelector((state) => state.user);

  const handleLogout = () => {
    removeUserInfo(tokenKey);
    dispatch(setUser({ userId: null, email: null, role: null }));
  };

  return (
    <AppBar
      style={{
        background: isScrolled ? "#4EAC95" : "#fff",
        transition: "background-color 0.3s ease",
      }}
      position="fixed"
      className="text-black z-50 shadow-none xl:px-7"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontSize: "35px",
              fontFamily: "monospace",
              fontWeight: 800,
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
          >
            <Link href="/">MENTOR</Link>
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
              {pages.map((page) => (
                <MenuItem
                  className="text-black"
                  key={page}
                  onClick={handleCloseNavMenu}
                >
                  {page === "Services" && (
                    <Link href="/services">
                      <Typography textAlign="center">{page}</Typography>
                    </Link>
                  )}
                  {page === "Become mentor" && (
                    <Link href="/services/create">
                      <Typography textAlign="center">{page}</Typography>
                    </Link>
                  )}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "#151D34",
              textDecoration: "none",
            }}
          >
            MENTOR
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                className="text-black"
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page === "Services" && (
                  <Link href="/services">
                    <Typography textAlign="center">{page}</Typography>
                  </Link>
                )}
                {page === "Become mentor" && (
                  <Link href="/services/create">
                    <Typography textAlign="center">{page}</Typography>
                  </Link>
                )}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <div className="flex items-center">
              <Badge badgeContent={1} color="error">
                <span>
                  <BsFillBookmarkCheckFill className="text-xl"></BsFillBookmarkCheckFill>
                </span>
              </Badge>
              <IconButton
                className="mr-3"
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={3} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png"
                  />
                </IconButton>
              </Tooltip>
            </div>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  {setting === "Profile" && (
                    <Link href="/profile">
                      <Typography className="px-4" textAlign="center">
                        Profile
                      </Typography>
                    </Link>
                  )}
                  {!user.email && setting === "Login" && (
                    <Link href="/login">
                      <Typography className="px-4" textAlign="center">
                        Login
                      </Typography>
                    </Link>
                  )}
                  {user.email && setting === "Logout" && (
                    <Typography className="px-4" textAlign="center">
                      <button onClick={handleLogout}>Logout</button>
                    </Typography>
                  )}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
