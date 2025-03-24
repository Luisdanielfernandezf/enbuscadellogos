import React, { useEffect, useState } from "react";
import "./spotify.css";

function SpotifyPlaylist()  {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100); // Simulate fade-in effect
  }, []);

  return (
    <div id="spotify-section" title="Gracias a tu buen amigo Murci" className={loaded ? "spotify-container loaded" : "spotify-container"}>
      <div className="floating-bg floating-bg-1"></div>
      <div className="floating-bg floating-bg-2"></div>
      
      <h3 className="playlist-title">
        <a
          href="https://open.spotify.com/playlist/4U6oC18Lr7FMGQdsjwRHTd?si=a9aba974ecc8445b"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          
          
          {/* ||Looping typing effect|| <span class="typing-effect">Spotify Expert Selection</span>*/}

          <span class="typing-effect">Spotify Expert Selection</span>




        </a>
      </h3>
      
      <iframe
        src="https://open.spotify.com/embed/playlist/4U6oC18Lr7FMGQdsjwRHTd?si=a9aba974ecc8445b"
        width="400"
        height="100"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
        className="spotify-iframe"
      ></iframe>
    </div>
  );
};

export default SpotifyPlaylist;
