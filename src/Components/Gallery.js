import React from "react";
import Navbar from "./Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Typography from "@mui/material/Typography";
import { Box,Grid } from "@mui/material";
import Footer from "./Footer";

const Gallery = () => {
  return (
    <div>
      <Navbar />
      <Gal />
      <Footer/>
    </div>
  );
};

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/1000/600/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/1000/600/",
  },
  {
    original: "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg",
    thumbnail: "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg",
  },
  {
    original: "https://media.istockphoto.com/id/974238866/photo/audience-listens-to-the-lecturer-at-the-conference.jpg?s=612x612&w=0&k=20&c=p_BQCJWRQQtZYnQlOtZMzTjeB_csic8OofTCAKLwT0M=",
    thumbnail: "https://media.istockphoto.com/id/974238866/photo/audience-listens-to-the-lecturer-at-the-conference.jpg?s=612x612&w=0&k=20&c=p_BQCJWRQQtZYnQlOtZMzTjeB_csic8OofTCAKLwT0M=",
  },
  {
    original: "https://www.adobe.com/content/dam/www/us/en/events/overview-page/eventshub_evergreen_opengraph_1200x630_2x.jpg",
    thumbnail: "https://www.adobe.com/content/dam/www/us/en/events/overview-page/eventshub_evergreen_opengraph_1200x630_2x.jpg",
  }
];

function Gal() {
  return (
    <div>
    
      <Typography mt={10} className="text-center" variant="h2" color="initial">
        Gallery
        
      </Typography>
      
      <div className="p-3">
      <Box mt={10} className="">
          <p className="text-4xl mb-2">
            <i>Yogo day</i>
          </p>
          <div style={{width:"110px"}} className="inline-block border-t border-gray-500"></div>
        </Box>
        <Box mt={8}>
          <ImageGallery
            items={images}
            showPlayButton={true}
            showFullscreenButton={true}
            slideInterval={1000}
            slideOnThumbnailOver={true}
            showIndex={true}
            onPlay={() => {
              alert("slideshow is now playing!");
            }}
          />
        </Box>
        
      </div>
      <div className="p-3">
      <Box mt={10} className="">
          <p className="text-4xl mb-2">
            <i>Henosis</i>
          </p>
          <div style={{width:"110px"}} className="inline-block border-t border-gray-500"></div>
        </Box>
        <Box mt={8}>
          <ImageGallery
            items={images}
            showPlayButton={true}
            showFullscreenButton={true}
            slideInterval={1000}
            slideOnThumbnailOver={true}
            showIndex={true}
            onPlay={() => {
              alert("slideshow is now playing!");
            }}
          />
        </Box>
      </div>
    </div>
  );
}



export default Gallery;
