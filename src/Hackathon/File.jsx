import React, { useState } from "react";
import "./file.css";
import { LinearProgress, Box, Typography, Grid, Button } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import DownloadIcon from "@mui/icons-material/Download";
import apk from "../Hackathon/kpowercare_signed.apk";

const FileUploader = () => {
  const [apkFile, setApkFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploaded, setUploaded] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setApkFile(file);
      setProgress(0);

      const simulateUpload = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            clearInterval(simulateUpload);
            return 100;
          }
          return Math.min(oldProgress + 10, 100);
        });
      }, 500);
    }
  };
  const handleUploadClick = () => {
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      setUploaded(true);
    }, 5000);
  };

  return (
    <div id="" className="flex justify-center items-center min-h-screen">
      <Box
        sx={{ background: "rgba(236, 236, 236, 0.59)" }}
        className="relative flex flex-col rounded-xl  text-gray-700 shadow-md"
      >
        <div
          id="glassy-effect"
          className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-cyan-600 to-cyan-400 bg-clip-border text-white shadow-lg shadow-cyan-500/40"
        >
          <h3 className="block font-sans text-3xl  font-semibold leading-snug tracking-normal text-dark antialiased">
            Byte Blenders
          </h3>
        </div>

        <Grid container spacing={1} style={{ padding: "3rem" }}>
          <Grid item xs={12} md={6}>
            <label className="custum-file-upload" htmlFor="file">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill=""
                  viewBox="0 0 24 24"
                >
                  <path
                    fill=""
                    d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="text">
                <span>Click to upload APK</span>
              </div>
              <input
                type="file"
                id="file"
                accept=".apk"
                onChange={handleFileChange}
              />
            </label>
            <Box sx={{ width: "300px", mt: 2 }}>
              <LinearProgress
                sx={{ color: "white", background: "white" }}
                variant="determinate"
                value={progress}
              />
            </Box>
            {progress === 100 && (
              <div>
                <Typography
                  className=""
                  variant="body1"
                  sx={{ mt: 2 }}
                >
                  <strong className="">File name: </strong>
                  {apkFile.name}
                </Typography>
                <Typography className="" mt={1} variant="body1">
                  <strong className="">File size: </strong>
                  {(apkFile.size / (1024 * 1024)).toFixed(2)} MB
                </Typography>
              </div>
            )}
          </Grid>

          <Grid item xs={12} md={6}>
            {apkFile && (
              <div>
                {progress === 100 && (
                  <Box ml={5}>
                    <div className="mb-0 flex gap-2">
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                      </label>
                      <p className="">Root detection</p>
                    </div>
                    <div className="mb-0 flex gap-2">
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                      </label>
                      <p className="">Screenshot & Screen record</p>
                    </div>
                    <div className="mb-0 flex gap-2">
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                      </label>
                      <p className="">Storage permission manage</p>
                    </div>
                    <div className="mb-0 flex gap-2">
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                      </label>
                      <p className="">Firewall manage</p>
                    </div>
                    <div className="mb-0 flex gap-2">
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                      </label>
                      <p className="">Data encryption</p>
                    </div>
                    <div className="mb-0 flex gap-2">
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                      </label>
                      <p className="">App lock</p>
                    </div>
                    <div className="mb-0 flex gap-2">
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                      </label>
                      <p className="">Clipboard security</p>
                    </div>
                    <Box mt={2} sx={{ float: "right" }}>
                      <div className="flex gap-3">
                        {uploaded ? (
                          <Button
                            startIcon={<DownloadIcon />}
                            variant="contained"
                            color="secondary"
                            sx={{ ml: 2 }}
                            href={apk}
                            download
                          >
                            Download Apk
                          </Button>
                        ) : (
                          <Button
                            startIcon={<FileUploadIcon />}
                            variant="contained"
                            color="primary"
                            onClick={handleUploadClick}
                            disabled={uploading}
                          >
                            {uploading ? "Uploading..." : "Upload"}{" "}
                          </Button>
                        )}
                      </div>
                    </Box>
                  </Box>
                )}
              </div>
            )}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default FileUploader;
