import React from "react";
import SpaceBackground from "./image/space-background.png"; // Replace with a space-themed background
import AstronautImage from "./image/astronaut.png"; // Replace with an astronaut or exploration image
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      {/* Background Image */}
      <div className="about-background-image-container">
        <img src={SpaceBackground} alt="Space Background" />
        
      </div>
      
      {/* Section Content */}
      <div className="about-section-image-container">
        <img src={AstronautImage} alt="Astronaut Exploration" className="flying" />
        {/* <img src={SpaceBackground} alt="Space Background" /> */}
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About Us</p>
        <h1 className="primary-heading">
          Explore the Wonders of the Cosmos
        </h1>
        <p className="primary-text">
          Join us on an extraordinary journey through the universe. From
          breathtaking celestial events to space exploration, our mission is to
          ignite your passion for the stars.
        </p>
        <p className="primary-text">
          Experience the awe-inspiring beauty of space and connect with the
          mysteries of the cosmos. Let us guide you to explore the final
          frontier.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
