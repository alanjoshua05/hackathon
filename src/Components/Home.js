import React from "react";
import Spline from "@splinetool/react-spline";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { IconButton, Box, Grid, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material/styles";
import { useState, useEffect } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import ShareIcon from "@mui/icons-material/Share";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { keyframes } from "@mui/system";
import axios from "axios";
import "./Home.css";

function RoboArm() {
  return (
    <Spline scene="https://prod.spline.design/1VcUPwbb00tEoYPy/scene.splinecode" />
  );
}

function Navb() {
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
          position: "fixed",
          background: "white",
          backgroundColor: "rgba(107, 107, 107, 0.1)",
          backdropFilter: "blur(10px)",
          width: "100%", // Ensure the navbar spans the full width
          zIndex: 1000, // Make sure the navbar is on top of other elements
        }}
      >
        {isMobile ? (
          <>
            <Box p={2} sx={{ display: "flex", justifyContent: "flex-end" }}>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon sx={{ color: "white" }} />
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
              <MenuItem onClick={handleClose}>Home</MenuItem>
              <MenuItem onClick={handleClose}>About Us</MenuItem>
              <MenuItem onClick={handleClose}>Contact Us</MenuItem>
              <MenuItem onClick={handleClose}>Members</MenuItem>
            </Menu>
          </>
        ) : (
          <Box
            p={2.5}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              textDecoration: "none",
              marginLeft: "auto",
              // Adjust padding for desktop view
            }}
          >
            <ul
              style={{
                display: "flex",
                gap: "34px",
                margin: 0,
                padding: 0,
                listStyle: "none",
              }}
            >
              <li>
                <a style={{ textDecoration: "none", color: "black" }} href="">
                  Home
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none", color: "black" }} href="">
                  About Us
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none", color: "black" }} href="">
                  Contact Us
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none", color: "black" }} href="">
                  Members
                </a>
              </li>
            </ul>
          </Box>
        )}
      </Box>
    </Box>
  );
}
const translateXAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const Nav = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://mohanraj-web.github.io/MR-Exports/Link.json"
        );
        console.log("API Response:", response.data); // Log the response to check the structure
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("API Error:", error); // Log any error
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check this out!",
          text: "MR Global Export Company",
          url: data.Share_link, // Replace with your URL
        });
        console.log("Link shared successfully");
      } catch (error) {
        console.error("Error sharing the link:", error);
      }
    } else {
      console.log("Web Share API is not supported in your browser.");
    }
  };

  const handleClick = () => {
    const phoneNumber = data.Whatsapp;
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Box
        mt={35}
        sx={{
          background: "white",
          backgroundColor: "rgba(107, 107, 107, 0.1)",
          backdropFilter: "blur(10px)",
          width: "55px",
          height: "150px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px",
          animation: `${translateXAnimation} 1s linear`,
        }}
      >
        <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
          <li
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          >
            <a onClick={handleClick}>
              <WhatsAppIcon
                sx={{
                  height: "25px",
                  width: "25px",
                  color: "black",
                  marginTop: "17px",
                  cursor: "pointer",
                }}
              />
            </a>
          </li>
          {/* <li>
              <a
                href={attributes.Linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon
                  sx={{
                    height: "25px",
                    width: "25px",
                    color: "white",
                    marginTop: "17px",
                  }}
                />
              </a>
            </li> */}
          <li
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          >
            <a href={data.Instagram} target="_blank" rel="noopener noreferrer">
              <InstagramIcon
                sx={{
                  height: "25px",
                  width: "25px",
                  color: "black",
                  marginTop: "17px",
                }}
              />
            </a>
          </li>
          <li>
            <a onClick={handleShare}>
              <ShareIcon
                sx={{
                  height: "25px",
                  width: "25px",
                  color: "black",
                  marginTop: "17px",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                }}
              />
            </a>
          </li>
        </ul>
      </Box>
    </>
  );
};

function Cont() {
  return (
    <Box sx={{ height: "900px" }} mt={30}>
      <div className="text-center">
        <p className="text-5xl font-bold mb-2">
          <i>President</i>
        </p>
        <div className="inline-block w-24 border-t border-gray-500"></div>
      </div>
      <Grid container spacing={0} alignItems="center">
        <Grid
          item
          xs={12}
          lg={5}
          container
          justifyContent="center"
          alignItems="center"
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box mt={12}>
              <Avatar
                alt="Portrait of a young businessman"
                src="https://media.istockphoto.com/id/1363118407/photo/portrait-of-young-businessman.jpg?s=612x612&w=0&k=20&c=e9xjo1AdlIbr7ttZe3iBG3CBWKUBwdTMLkPus9DxA_s="
                sx={{
                  width: { xs: 230, sm: 160, md: 192, lg: 380 }, // Adjusted for better responsiveness
                  height: { xs: 230, sm: 160, md: 192, lg: 380 }, // Adjusted for better responsiveness
                  borderRadius: "50%",
                }}
              />
              <Box textAlign="center" mt={3}>
                <Typography variant="body1" color="text.primary">
                  <i>
                    <strong>Alan Joshua</strong> (The President)
                  </i>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  NGP Institute of Technology
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography
            variant="h5"
            sx={{
              fontSize: {
                xs: "1rem",
                sm: "1.25rem",
                md: "1.5rem",
                lg: "1.1rem",
              }, // Responsive font size
              textAlign: { xs: "center", lg: "center" }, // Center text on small screens, align left on large screens
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            adipisci, deleniti recusandae libero, blanditiis eos doloribus, quod
            accusantium obcaecati fuga velit ex est. Maiores, autem repudiandae
            dignissimos maxime vero ullam!Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolore adipisci, deleniti recusandae libero,
            blanditiis eos doloribus, quod accusantium obcaecati fuga velit ex
            est. Maiores, autem repudiandae dignissimos maxime vero ullam!Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Dolore adipisci,
            deleniti recusandae libero, blanditiis eos doloribus, quod
            accusantium obcaecati fuga velit ex est. Maiores, autem repudiandae
            dignissimos maxime vero ullam!Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolore adipisci, deleniti recusandae libero,
            blanditiis eos doloribus, quod accusantium obcaecati fuga velit ex
            est. Maiores, autem repudiandae dignissimos maxime vero ullam!
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

function Foot() {
  return (
    <footer className="bg-neutral-200 text-center text-white dark:bg-neutral-600">
      <hr className="bg-gray-600" />
      <div className="container pt-9">
        <div className="mb-9 flex justify-center">
          <a className="mr-9 text-neutral-800 dark:text-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          <a className="mr-9 text-neutral-800 dark:text-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a className="mr-9 text-neutral-800 dark:text-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a className="mr-9 text-neutral-800 dark:text-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a className="mr-9 text-neutral-800 dark:text-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>
          <a className="text-neutral-800 dark:text-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="bg-neutral-300 p-4 text-center text-gray-700">
        NGP Institute of Technology
      </div>
    </footer>
  );
}

function Reg() {
  return (
    <div>
        <p className="h1">Active clubs</p>
        <hr />
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            class="rounded-t-lg"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Wikipedia_space_ibiza%2803%29.jpg/640px-Wikipedia_space_ibiza%2803%29.jpg"
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div style={{ height: "100%", background: "rgba(227, 227, 227, 1)" }}>
      <Navb />
      {/* <Nav/> */}
      <div style={{ height: "900px", marginBottom: "20px" }}>
        <RoboArm />
      </div>
      <Cont />
      <Reg />
      <Foot />
    </div>
  );
}
