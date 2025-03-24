import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import App from "./App"; // Import your main App component
import Cabecera from "./Cabecera.jsx"; // Import the Cabecera component
import Website from "./Website.jsx";
import BlogPreview from "./BlogPreview.jsx";
import BlogPage from "./BlogPage.jsx";
import HoverCard from "./HoverCard.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>

      <div>
        <Cabecera />
        <main className="main-content" style={{ paddingTop: "200px" }}> {/* Add padding to avoid content being hidden behind the fixed header */}


        <section className="grid-item"> <HoverCard /> </section>

          
        </main>
      </div>


  </StrictMode>
);
