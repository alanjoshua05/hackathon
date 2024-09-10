import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from "./Loader";

const AboutUs = () => {
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
            <Abt />
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
};

function Abt() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://alanjoshua05.github.io/dani/Jothi.json"
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
    <div className="container mt-24">
      <div className="container justify-center text-4xl flex">
        Student Development Cell
      </div>
      <div className="container mt-20">
        <p className="text-justify">{data.article[0]?.art}</p>
      </div>
    </div>
  );
}

export default AboutUs;
