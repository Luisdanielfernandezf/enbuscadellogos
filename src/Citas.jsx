import React, { useState, useEffect } from "react";
import "./citas.css";

function Citas() {
  const [quotes, setQuotes] = useState([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    // Fetch quotes from quotes.json
    const fetchQuotes = async () => {
      try {
        const response = await fetch("/quotes.json");
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        setQuotes(data.quotes);
      } catch (error) {
        console.error("Error fetching quotes:", error);
      }
    };

    fetchQuotes();
  }, []);

  useEffect(() => {
    // Set up interval to rotate quotes
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 15000); // Change quote every 5 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [quotes]);

  if (quotes.length === 0) {
    return <div>Loading quotes...</div>;
  }

  const currentQuote = quotes[currentQuoteIndex];

  return (
    <section className="quotes-section">
      <blockquote className="quote">
        <p>{currentQuote.text}</p>
        <footer>- {currentQuote.author}</footer>
      </blockquote>
    </section>
  );
}

export default Citas;
