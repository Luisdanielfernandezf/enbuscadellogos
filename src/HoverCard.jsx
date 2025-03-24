import React, { useState, useEffect } from "react";
import "./HoverCard.css";



function HoverCard() {
  const [data, setData] = useState([]);
  const [hoverStates, setHoverStates] = useState([]);

  // Fetch data from JSON file
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./data.json");
        console.log("Response status:", response.status); // Debugging line

        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Fetched data:", data); // Debugging line
        setData(data);
        setHoverStates(new Array(data.length).fill(false)); // Initialize hover states
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    fetchData();
  }, []);

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  const handleMouseEnter = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = true;
    setHoverStates(newHoverStates);
  };

  const handleMouseLeave = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = false;
    setHoverStates(newHoverStates);
  };

  return (
    <div className="hover-card-container">
      {data.map((category, index) => (
        <div
          key={index}
          className="hover-card"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >


          <div
            className="hover-card-bg"
            style={{ backgroundImage: `url(${category.image})` }}
          ></div>
          <div className="hover-card-overlay"></div>
          {/* Dynamic Title */}
          <h2 className="hover-card-title">{category.title.replace(/-/g, ' ')}</h2>

          {/* Dynamic List Appearing on Hover */}
          <div className={`hover-card-list ${hoverStates[index] ? "show" : ""}`}>
            <ul>
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item.name}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HoverCard;
