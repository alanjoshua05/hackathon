import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { AppBar, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Navbar from "./Navbar";
import "./club.css";
import Loader from "./Loader";

const Members = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <Navbar />
      <Con/>
    </div>
  );
};

function Con() {
  const screenSizeAbove1020 = useMediaQuery("(min-width:1024px)");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://alanproject24.github.io/SDC-Api/Members.json"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div><Loader/></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="bg-white py-24 mt-2 sm:py-32">
      <Typography
        id="title"
        variant=""
        display={"flex"}
        justifyContent={"center"}
        color="initial"
        sx={{
          fontSize: { lg: "53px", xs: "28px", md: "35px", sm: "28px" },
          fontWeight: "800",
        }}
        className="text-center"
      >
        Student Development Cell
      </Typography>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t  border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {data.top.map((res) => (
            <div className="p-4" key={res.id}>
              <div className="mb-4 text-center opacity-90">
                <a href="#" className="relative block">
                  <img
                    alt="profil"
                    src={res.img}
                    className="mx-auto object-cover rounded-full h-40 w-40 "
                  />
                </a>
              </div>
              <div className="text-center">
                <p className="text-2xl text-gray-800 dark:text-white">
                  {res.Name}
                </p>
                <p className="text-xl font-light text-gray-500 dark:text-gray-200">
                  {res.Designation}
                </p>
                <>
                  <Box>
                    {screenSizeAbove1020 && (
                      <p className="max-w-xs py-4 font-light text-gray-500 text-md dark:text-gray-400">
                        {res.description}
                      </p>
                    )}
                  </Box>
                </>
              </div>
            </div>
          ))}
        </div>
        <Typography
          mt={10}
          id="title"
          variant=""
          display={"flex"}
          color="initial"
          sx={{
            fontSize: { lg: "35px", xs: "28px", md: "30px", sm: "29px" },
            fontWeight: "800",
          }}
          className="text-center"
        >
          Executive Members
        </Typography>
        <div className="mx-auto mt-3 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t  border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {data.executives.map((res) => (
            <div className="p-4" key={res.id}>
              <div className="mb-4 text-center opacity-90">
                <a href="#" className="relative block">
                  <img
                    alt="profil"
                    src={res.img}
                    className="mx-auto object-cover rounded-full h-40 w-40 "
                  />
                </a>
              </div>
              <div className="text-center">
                <p className="text-2xl text-gray-800 dark:text-white">
                  {res.Name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Members;
