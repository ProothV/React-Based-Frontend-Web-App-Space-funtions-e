import React from "react";
// import "./RocketrySection.css";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const RocketrySection = () => {
  // Pie Chart Data
  const pieData = {
    labels: ["Starlink Satellites", "Moon Missions", "Mars Missions", "Deep Space Probes"],
    datasets: [
      {
        data: [45, 25, 15, 15],
        backgroundColor: ["#ffcc00", "#1e90ff", "#ff5733", "#8e44ad"],
        borderWidth: 0,
      },
    ],
  };

  // Bar Chart Data
  const barData = {
    labels: ["2018", "2019", "2020", "2021", "2022", "2023"],
    datasets: [
      {
        label: "Rocket Launches",
        data: [15, 25, 40, 50, 65, 80],
        backgroundColor: "rgba(30, 144, 255, 0.8)",
        borderRadius: 10,
      },
    ],
  };

  // Rocket Missions
  const rocketMissions = [
    {
      name: "Falcon Heavy",
      description: "Launched multiple Starlink satellites and a Tesla Roadster into space.",
      date: "February 6, 2018",
    },
    {
      name: "Artemis I",
      description: "Uncrewed mission to test the Orion spacecraft for Moon landings.",
      date: "November 16, 2022",
    },
    {
      name: "Perseverance Rover",
      description: "Mars mission to explore Jezero Crater and collect samples.",
      date: "July 30, 2020",
    },
  ];

  return (
    <div className="rocketry-section-container">
      <div className="rocketry-animation-background"></div>

      {/* Title */}
      <h1 className="rocketry-title">
        The <span>Rocketry</span> Section
      </h1>
      <p className="rocketry-description">
        Discover the incredible achievements and future missions of space exploration.
      </p>

      {/* Historical Achievements */}
      <div className="historical-achievements">
        <h2>Historical Achievements</h2>
        <div className="achievement-cards">
          {rocketMissions.map((mission, index) => (
            <div className="achievement-card" key={index}>
              <h3>{mission.name}</h3>
              <p>{mission.description}</p>
              <span>{mission.date}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Graph and Statistics */}
      <div className="statistics-section">
        <div className="pie-chart-container">
          <h3>Mission Distribution</h3>
          <Pie data={pieData} />
        </div>
        <div className="bar-chart-container">
          <h3>Rocket Launch Growth</h3>
          <Bar data={barData} />
        </div>
      </div>
    </div>
  );
};

export default RocketrySection;
