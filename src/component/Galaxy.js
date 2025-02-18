import React, { useState } from "react";
// import "./GalaxyPoint.css";
import { FaRobot } from "react-icons/fa";
import { BsStars } from "react-icons/bs";

const GalaxyPoint = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [input, setInput] = useState("");
  const [showBot, setShowBot] = useState(false);
  const galaxyFacts = [
    "The Milky Way is 13.6 billion years old.",
    "There are more stars in the universe than grains of sand on Earth.",
    "Black holes can slow down time near their event horizons.",
    "A day on Venus is longer than a year on Venus.",
    "Saturn's moon, Titan, has lakes of liquid methane.",
  ];

  const handleSuggestionSubmit = () => {
    if (input.trim()) {
      setSuggestions([...suggestions, input]);
      setInput("");
    }
  };

  return (
    <div className="galaxy-point-container">
      <div className="galaxy-animation-background"></div>
      
      {/* Title and Introduction */}
      <div className="galaxy-intro">
        <h1 className="galaxy-title">
          Welcome to the <span>Galaxy Point</span>
        </h1>
        <p className="galaxy-description">
          Explore the cosmos, share your ideas, and interact with the future of space exploration.
        </p>
      </div>
      
      {/* Galaxy Facts Section */}
      <div className="galaxy-facts">
        <h2>Did You Know?</h2>
        <div className="galaxy-facts-list">
          {galaxyFacts.map((fact, index) => (
            <p key={index} className="galaxy-fact">
              <BsStars className="fact-icon" /> {fact}
            </p>
          ))}
        </div>
      </div>

      {/* User Suggestions */}
      <div className="suggestion-section">
        <h2>Share Your Galactic Ideas</h2>
        <div className="suggestion-box">
          <input
            type="text"
            placeholder="Enter your suggestion..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleSuggestionSubmit}>Submit</button>
        </div>
        <div className="suggestions-list">
          {suggestions.length > 0 && <h3>Community Suggestions:</h3>}
          {suggestions.map((suggestion, index) => (
            <p key={index} className="suggestion-item">
              {suggestion}
            </p>
          ))}
        </div>
      </div>

      {/* Interactive Bot */}
      <div className="bot-section">
        <button className="bot-toggle-button" onClick={() => setShowBot(!showBot)}>
          <FaRobot /> {showBot ? "Hide Bot" : "Ask the Galaxy Bot"}
        </button>
        {showBot && (
          <div className="bot-response">
            <p>Hello, Space Explorer! How can I assist you in exploring the cosmos today?</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalaxyPoint;
