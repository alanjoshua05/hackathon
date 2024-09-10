// import AboutUs from "./Components/AboutUs";
// import Club from "./Components/Club";
// import Gallery from "./Components/Gallery";
// import Home2 from "./Components/Home2";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Members from "./Components/Members";
// import { useState,useEffect } from "react";

// function App() {
  
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route index element={<Home2 />} />
//           <Route path="/clubs" element={<Club />} />
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/members" element={<Members />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import React from 'react'
import FileUploader from './Hackathon/File'
export default function App() {
  return (
    <div>
      <FileUploader/>
    </div>
  )
}
