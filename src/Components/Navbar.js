import React from 'react';
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  IconButton,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material/styles";
import ngp from "./ngplogo.png";
import { Link } from "react-router-dom";

function Navbar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <Box>
        <Box
          sx={{
            background: "white",
            width: "100%", // Ensure the navbar spans the full width
            zIndex: 1000, // Make sure the navbar is on top of other elements
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
          }}
        ><Box sx={{ flexGrow: 1 }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img
            src="" // Replace with your logo path
            alt="Logo"
            style={{ height: '55px',position:"absolute",marginTop:"5px" }} className="ml-3" // Adjust the height as needed
          />
        </Link>
      </Box>
          {isMobile ? (
            <>
              <Box p={2} sx={{ display: "flex", justifyContent: "flex-end" }}>
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenu}
                >
                  <MenuIcon sx={{ color: "black" }} />
                </IconButton>
              </Box>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Link style={{ textDecoration: "none",color:"black" }} to={"/"}>
                  <MenuItem onClick={handleClose}>Home</MenuItem>
                </Link>
                <Link style={{ textDecoration: "none",color:"black" }} to={"/about"}>
                  {" "}
                  <MenuItem onClick={handleClose}>About Us</MenuItem>
                </Link>
                <Link style={{ textDecoration: "none",color:"black" }} to={"/clubs"}>
                  <MenuItem onClick={handleClose}>Clubs</MenuItem>
                </Link>
                <Link style={{ textDecoration: "none",color:"black" }} to={"/members"}>
                  <MenuItem onClick={handleClose}>Members</MenuItem>
                </Link>
              </Menu>
            </>
          ) : (
            <Box
              p={2.5}
              mr={5}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                textDecoration: "none",
                marginLeft: "auto",
              }}
            >
              <ul
                style={{
                  display: "flex",
                  gap: "43px",
                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                }}
              >
                <li className="hover-underline cursor-pointer">
                  <Link style={{ textDecoration: "none" }} to={"/"}>
                    <a style={{ textDecoration: "none", color: "black",fontSize:"16px",fontWeight:"500" }} href="">
                      Home
                    </a>
                  </Link>
                </li>
                <li className="hover-underline cursor-pointer">
                  <Link style={{ textDecoration: "none" }} to={"/about"}>
                    <a style={{ textDecoration: "none", color: "black",fontSize:"16px",fontWeight:"500" }} href="">
                      About Us
                    </a>
                  </Link>
                </li>
                <li className="hover-underline cursor-pointer">
                  <Link style={{ textDecoration: "none" }} to={"/clubs"}>
                    <a style={{ textDecoration: "none", color: "black",fontSize:"16px",fontWeight:"500" }} href="">
                      Clubs
                    </a>
                  </Link>
                </li>
                <li className="hover-underline cursor-pointer">
                  <Link style={{ textDecoration: "none" }} to={"/members"}>
                    <a style={{ textDecoration: "none", color: "black",fontSize:"16px",fontWeight:"500" }} href="">
                      Members
                    </a>
                  </Link>
                </li>
              </ul>
            </Box>
          )}
        </Box>
      </Box>
    );
  }
export default Navbar;
