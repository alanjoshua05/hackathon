import React from "react";
import Typography from "@mui/material/Typography";
import { IconButton, Box, Grid, Button, Avatar } from "@mui/material";
import { useState, useEffect } from "react";
import "./Home.css";
import ngp from "./ngplogo.png";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from "./Loader";

const Home2 = () => {
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
      <div>
        {loading ? (
          <div className="loader">
            {/* You can customize the loader here */}
            <p>
              <Loader />
            </p>
          </div>
        ) : (
          <div>
            <Carousel />
            <Cont />
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
};


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState({ carousel: [] }); // Initialize with an empty carousel array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.carousel.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      goToNext();
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [data.carousel.length]); // Re-run when data.carousel.length changes

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://alanproject24.github.io/SDC-Api/Home.json"
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
    return <div></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.carousel.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box position="relative" width="100%" margin="auto">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
        width="100%"
      >
        {data.carousel.map((image, index) => (
          <Box
            key={index}
            component="img"
            src={image.src}
            alt={image.label}
            sx={{
              display: index === currentIndex ? "block" : "none",
              width: "100%",
              height: { xs: "500px", lg: "800px" }, // Responsive height
              objectFit: "cover", // Ensures the image covers the entire box
              objectPosition: "center", // Centers the image
              transition: "opacity 0.5s ease-in-out", // Smooth transition
            }}
          />
        ))}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 2,
            borderRadius: 1,
            backgroundColor: "rgba(8, 8, 8, 0.5)", // Increased opacity for better visibility
            textAlign: "center",
            width: "100%", // Full width of the carousel
            height: {lg:"17%",xs:"30%"}, // Full height of the carousel
          }}
          position="absolute"
          top={0}
          left={0}
          color="white"
        >
          <Box sx={{ zIndex: 3 }}>
            <h5 style={{ margin: 0 }}>{data.carousel[currentIndex].label}</h5>
            <p style={{ margin: "4px 0" }}>
              {data.carousel[currentIndex].description}
            </p>
            {data.carousel[currentIndex].link && (
              <a target="_blank" href={data.carousel[currentIndex].link}>
                <button
                  className="btn mt-2"
                  style={{
                    borderRadius: "9px",
                    background: "black",
                    color: "white",
                    fontWeight: "500",
                    transition: "transform 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  {data.carousel[currentIndex].button}
                </button>
              </a>
            )}
          </Box>
        </Box>
      </Box>

      <IconButton
        onClick={goToPrevious}
        sx={{
          position: "absolute",
          top: "90%",
          left: 16,
          transform: "translateY(-50%)",
        }}
      >
        <ArrowBackIos style={{ color: "white" }} />
      </IconButton>

      <IconButton
        onClick={goToNext}
        sx={{
          position: "absolute",
          top: "90%",
          right: 16,
          transform: "translateY(-50%)",
          
        }}
      >
        <ArrowForwardIos style={{ color: "white" }} />
      </IconButton>

      <Box display="flex" justifyContent="center" mt={2}>
        {data.carousel.map((_, index) => (
          <Button
            key={index}
            onClick={() => setCurrentIndex(index)}
            sx={{
              width: 12,
              height: 12,
              minWidth: 12,
              borderRadius: "50%",
              margin: "0 4px",
              backgroundColor:
                index === currentIndex ? "white" : "rgba(255, 255, 255, 0.5)",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};


function Cont() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://alanproject24.github.io/SDC-Api/Home.json"
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
    return <div></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <Box sx={{ height: "" }} mt={14}>
      <div className="text-center">
        <p className="text-5xl font-bold mb-2">President</p>
        <div
          style={{ width: "160px" }}
          className="inline-block border-t border-gray-500"
        ></div>
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
            {data.president.map((item) => (
              <Box mt={12}>
                <Avatar
                  alt="Portrait of a young businessman"
                  src={item.image}
                  sx={{
                    width: { xs: 230, sm: 160, md: 192, lg: 380 }, // Adjusted for better responsiveness
                    height: { xs: 230, sm: 160, md: 192, lg: 380 }, // Adjusted for better responsiveness
                    borderRadius: "50%",
                  }}
                />
                <Box textAlign="center" mt={3}>
                  <Typography variant="body1" color="text.primary">
                    <i>
                      <strong>{item.name}</strong> (The President)
                    </i>
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          {data.president.map((item) => (
            <Typography
              mt={5}
              p={2}
              variant="h5"
              sx={{
                fontSize: {
                  xs: "1rem",
                  sm: "1.25rem",
                  md: "1.5rem",
                  lg: "1.1rem",
                }, // Responsive font size
                textAlign: { xs: "justify", lg: "justify" }, // Center text on small screens, align left on large screens
              }}
            >
              {item.about}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home2;
