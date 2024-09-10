import React from "react";
import Typography from "@mui/material/Typography";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Pagination,
} from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import SearchIcon from "@mui/icons-material/Search";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic from "./Starter.jpg";
import "./club.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from "./Loader";

export default function Club() {
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
            <div>
              <Box
                component="img"
                src={pic}
                sx={{
                  width: "100%",
                  height: { xs: "300px", md: "760px" }, // Responsive height
                  objectFit: "cover", // Ensures the image covers the entire box
                  objectPosition: "center", // Centers the image
                  transition: "opacity 0.5s ease-in-out", // Smooth transition
                }}
              />
            </div>
            <About />
            <Products />
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
}

const Products = () => {
  const itemsPerPage = 3;
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]); // Initialize with an empty array
  const [error, setError] = useState(null); // To handle any errors
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://alanproject24.github.io/SDC-Api/Club.json"
        );
        setData(response.data); // Update state with the array of products
      } catch (error) {
        console.error("Error fetching data:", error); // Log error to the console
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data.length === 0) {
    return <div></div>;
  }

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase()); // Update search term and convert to lower case
    setPage(1); // Reset page to 1 when searching
  };

  // Filter products based on search term
  const filteredProducts = data.filter((item) =>
    item.Club_name.toLowerCase().includes(searchTerm)
  );

  const displayPosts = filteredProducts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  // Slick Carousel settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };

  return (
    <Box mt={10} p={{ lg: 7, md: 2, sm: 2, xs: 2 }}>
      <div>
        <p className="text-3xl md:text-5xl mb-2" id="title">
          Club Activity
        </p>
        <hr className="my-4" />
        <Box mt={5} id="product" sx={{ width: { lg: "30%", sm: "60%" } }}>
          <div className="input-group mb-5 mt-2">
            <span className="input-group-text" id="basic-addon1">
              <SearchIcon />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search for club..."
              aria-label="Product"
              aria-describedby="basic-addon1"
              onChange={handleSearch}
            />
          </div>
        </Box>
      </div>
      <br />
      <Grid container spacing={4}>
        {displayPosts.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="div"
                sx={{ height: "100%", width: "100%" }} // Fixed height and full width
              >
                <Box>
                  <Slider {...settings}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "230px",
                      }}
                    >
                      <img
                        src={item.images.img1}
                        style={{
                          width: "100%",
                          height: "230px",
                          objectFit: "cover",
                        }}
                        alt="Product Image 1"
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "230px",
                      }}
                    >
                      <img
                        src={item.images.img2}
                        style={{
                          width: "100%",
                          height: "230px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </Slider>
                </Box>
              </CardMedia>
              <CardContent>
                <Typography variant="h5" component="div">
                  {item.Club_name}
                </Typography>
                <br />
                <Typography variant="body2" color="text.secondary">
                  {item.Club_detail}
                </Typography>
                <br />

                <a
                  target="blank"
                  href={item.Form_link}
                  style={{ textDecoration: "none" }}
                >
                  <button
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
                    className="btn mt-4"
                  >
                    Register Now!
                  </button>
                </a>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={Math.ceil(filteredProducts.length / itemsPerPage)}
        page={page}
        onChange={handleChange}
        color="primary"
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      />
    </Box>
  );
};

function About() {
  return (
    <Box>
      <Box mt={{ xs: 6, md: 13 }} className="text-center">
        <p id="title" className="text-3xl md:text-5xl mb-2">
          <i>Learning & Fun Beyond Classrooms</i>
        </p>
        <Box
          className="inline-block border-t border-gray-500"
          sx={{
            width: { xs: "80%", sm: "60%", md: "500px" },
            mx: "auto",
          }}
        ></Box>
      </Box>
      <Box>
        <p
          className="text-justify px-6 py-8 md:px-12 md:py-8"
          style={{ lineHeight: "1.60" }}
        >
          {/* Dr. NGP Institute of Technology goes beyond traditional textbooks to
          focus on the holistic development of its students. At NGP iTECH,
          learning extends beyond the classroom through various workshops,
          sessions, and club activities designed to cultivate both existing and
          new skills. These opportunities encourage students to explore their
          potential in a supportive environment. Joining a club not only
          enriches their academic life but also makes it more engaging,
          rewarding, and enjoyable. It helps students connect with like-minded
          peers and develop their passions. NGP iTECH is committed to fostering
          local and intercultural relationships, shaping students into
          well-rounded individuals, and broadening their perspectives, as true
          education is about preparing students to be better human beings. */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          autem maiores sequi unde quasi ea illum omnis expedita nisi? Ex unde
          libero, neque in culpa ipsum velit ea consequatur quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          autem maiores sequi unde quasi ea illum omnis expedita nisi? Ex unde
          libero, neque in culpa ipsum velit ea consequatur quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          autem maiores sequi unde quasi ea illum omnis expedita nisi? Ex unde
          libero, neque in culpa ipsum velit ea consequatur quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          autem maiores sequi unde quasi ea illum omnis expedita nisi? Ex unde
          libero, neque in culpa ipsum velit ea consequatur quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          autem maiores sequi unde quasi ea illum omnis expedita nisi? Ex unde
          libero, neque in culpa ipsum velit ea consequatur quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          autem maiores sequi unde quasi ea illum omnis expedita nisi? Ex unde
          libero, neque in culpa ipsum velit ea consequatur quis.
        </p>
      </Box>
    </Box>
  );
}
