import React from "react";
// import "./TeamSection.css"; // Custom CSS
import TeamMember1 from "./image/team-member1.png"; // Replace with team member image
import TeamMember2 from "./image/team-member2.png"; // Replace with team member image
import TeamMember3 from "./image/team-member3.png"; // Replace with team member image

const TeamSection = () => {
  const team = [
    {
      name: "John Doe",
      role: "Astrophysicist",
      img: TeamMember1,
      description: "Exploring the mysteries of the universe with advanced research.",
    },
    {
      name: "Jane Smith",
      role: "Mission Specialist",
      img: TeamMember2,
      description: "Leading space missions and ensuring their success.",
    },
    {
      name: "Alex Johnson",
      role: "Satellite Engineer",
      img: TeamMember3,
      description: "Designing and maintaining cutting-edge satellite systems.",
    },
  ];

  return (
    <div className="team-section-container team">
      <div className="team-intro">
        <p className="section-subheading">Meet Our Team</p>
        <h1 className="section-heading">The Minds Behind the Mission</h1>
        <p className="section-text">
          Our team of experts is dedicated to revolutionizing space exploration 
          and technology. With their passion and expertise, we’re reaching new heights.
        </p>
      </div>
      <div className="team-members">
        {team.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.img} alt={member.name} className="team-image" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <p className="team-description">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
