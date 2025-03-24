import React from "react";
import "./Website.css";

function Website () {
  const websiteURL = "https://rogerhaus.com/ai-art";
  const previewImage = "/preview_images/rogerhaus.jpeg"; // Replace with an actual preview image

  return (
    <div className="website-preview" onClick={() => window.open(websiteURL, "_blank")}>
      <img src={previewImage} alt="AI Art Preview" className="preview-image" />
      <div className="preview-overlay">
        <h2>Explore AI Art</h2>
        <p>Click to visit rogerhaus.com</p>
      </div>
    </div>
  );
};

export default Website;


