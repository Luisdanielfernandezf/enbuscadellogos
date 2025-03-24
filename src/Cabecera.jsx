import React from "react";
import SpotifyPlaylist from "./Spotify"; // Import your Spotify component
import Citas from "./Citas"; // Import your Citas component
import Photos from "./PhotoCarousel";
import HoverCard from "./HoverCard";
import "./citas.css";
import "./Cabecera.css";


function Cabecera() {
  return (
    <header className="header">

      <div className="spotify"> 
        <SpotifyPlaylist />
      </div>

      <div className="citas"> 
        <Citas/>
      </div>



      <div className="photos">
        <Photos />  
      </div>

      <div className="header-title">
        <h1>React App</h1>
      </div>


      <div className="Hover-cards">
        <HoverCard />  
      </div>
        
    </header>
  );
};

export default Cabecera;
