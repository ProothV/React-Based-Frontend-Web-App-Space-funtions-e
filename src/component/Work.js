import React from "react";
import SatelliteImage from "./image/satellite.png"; // Replace with a satellite image
import EarthImage from "./image/earth.gif"; // Replace with an Earth or space image
import SatiImage from "./image/gal.gif"
// import "./SatelliteWork.css"; // Add your custom styles here

const SatelliteWork = () => {
  return (
    <div className="satellite-work-container">
      <div className="satellite-work-content">
        <p className="section-subheading">Our Mission</p>
        <h1 className="section-heading">Revolutionizing Space Communication</h1>
        <p className="section-text">
          Explore how our satellites are enhancing communication, monitoring
          Earth's climate, and enabling groundbreaking discoveries in space
          technology.
        </p>
        <div className="satellite-features">
          <div className="feature-card">
            <img src={SatelliteImage} alt="Satellite" />
            <h3>Advanced Satellites</h3>
            <p>State-of-the-art satellites with high-precision communication.</p>
          </div>
          <div className="feature-card">
            <img src={EarthImage} alt="Earth" />
            <h3>Earth Monitoring</h3>
            <p>Continuous observation for climate research and disaster management.</p>
          </div>
          <div className="feature-card">
            <img src={SatiImage} alt="Space Exploration" />
            <h3>Space Exploration</h3>
            <p>Pushing boundaries to explore the unexplored regions of space.</p>
          </div>
        </div>
        <button className="primary-button">Discover More</button>
      </div>
    </div>
  );
};

export default SatelliteWork;
