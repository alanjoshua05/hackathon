import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import "./Home.css";
import ngp from "./ngplogo.png";

const Footer = () => {
  return (
    <div>
      <Box mt={15}>
        <Grid
          container
          spacing={0}
          sx={{ background: "rgba(243, 243, 243, 1)" }}
        >
          <Grid item lg={6} sm={12} xs={12}>
            <Box sx={{ display: "flex",justifyContent:{md:"start",sm:"center",xs:"center"} }} p={{ xs: 10, lg: 15 }} src={ngp}>
              <img
                src=""
                alt="Logo"
                style={{ maxWidth: "110px", height: "auto" }}
              />
            </Box>
          </Grid>
          <Grid item lg={6} sm={12} xs={12}>
            <Box
              sx={{ display: "flex", justifyContent: "center" }}
              p={{ xs: 2, lg: 6 }}
            >
              <ul className="" style={{ listStyle: "none", padding: 0 }}>
                <li>
                  <div
                    style={{ display: "flex", gap: "12px", marginTop: "16px" }}
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ddc0a7e9e0adc94ddd98921c68ed3a530bde05c27f52933b34cb48417ca4c87?placeholderIfAbsent=true&apiKey=6bcee3e3ed9847128d266201399eebb6"
                      alt="Location Icon"
                      style={{
                        width: "32px",
                        height: "32px",
                        objectFit: "contain",
                      }}
                    />
                    <div>
                      <Typography variant="body2">
                        ABC Institute of Technology <br />
                        ABC Nagar, Kalapatti Road <br />
                        Coimbatore-641048
                      </Typography>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    style={{ display: "flex", gap: "12px", marginTop: "16px" }}
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb6268bb4e2f5e260117485b01da0c61652778d1683c43ef19a46c7ee8bbbb64?placeholderIfAbsent=true&apiKey=6bcee3e3ed9847128d266201399eebb6"
                      alt="Phone Icon"
                      style={{
                        width: "32px",
                        height: "32px",
                        objectFit: "contain",
                      }}
                    />
                    <div>
                      <Typography variant="body2">
                        +91 422 - 236 9105 <br />
                        +91 90252 86806
                      </Typography>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    style={{ display: "flex", gap: "12px", marginTop: "16px" }}
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca4f4a7934880312b9b13c66ea0bab70db17d6e4a1ea50c03cf23ae469e372a3?placeholderIfAbsent=true&apiKey=6bcee3e3ed9847128d266201399eebb6"
                      alt="Email Icon"
                      style={{
                        width: "32px",
                        height: "32px",
                        objectFit: "contain",
                      }}
                    />
                    <div>
                      <Typography variant="body2">
                        info@abc.ac.in <br />
                        principal@abc.ac.in
                      </Typography>
                    </div>
                  </div>
                </li>
              </ul>
            </Box>
          </Grid>
        </Grid>
        <div
          className="flex justify-center"
          style={{ background: "rgba(13, 91, 170, 1)", color: "white" }}
        >
          <Typography variant="body2" className="p-1">
            Developed by{" "}
            <a
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "700",
              }}
              href="https://alanport.netlify.app/"
              target="blank"
            >
              <span>Alan</span>
            </a>
          </Typography>
        </div>
      </Box>
    </div>
  );
};

export default Footer;
