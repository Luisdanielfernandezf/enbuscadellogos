import React, { useState, useEffect } from "react";
import "./PhotoCarousel.css";

const photos = [
  "/carousel/1.jpg",
  "/carousel/2.jpg",
  "/carousel/3.jpg",
  "/carousel/4.jpg",
  "/carousel/5.jpg",
  "/carousel/6.jpg",
  "/carousel/7.jpg",
];

function Photos() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Automatically change photo every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Handle user click to change photo
  const handlePhotoClick = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  return (
    <div className="photo-container" onClick={handlePhotoClick}>
      <img
        src={photos[currentPhotoIndex]}
        alt="Slideshow"
        className="photo-image"
      />

    </div>
  );
}

export default Photos;