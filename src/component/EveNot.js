import React, { useState, useEffect } from "react";
// import "./EventsNotifications.css";

const EventsNotifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample data for notifications and events
  const notifications = [
    "Join us for the Space Exploration Webinar on Jan 15th!",
    "Our satellite successfully launched on Dec 12th.",
    "New blog post: 'How Satellites Revolutionize Communication'!",
    "Upcoming event: Space Camp 2024 registration is open!",
  ];

  const events = [
    {
      title: "Satellite Launch Success",
      date: "December 12, 2023",
      description: "Our latest satellite launch was a resounding success, paving the way for advanced space communication.",
    },
    {
      title: "Astronomy Night",
      date: "November 28, 2023",
      description: "A memorable stargazing event featuring live Q&A with leading astronomers.",
    },
    {
      title: "Space Exploration Webinar",
      date: "January 15, 2024",
      description: "Join us for an exclusive webinar on the latest trends in space exploration.",
    },
  ];

  // Sliding text effect for notifications
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % notifications.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [notifications.length]);

  return (
    <div className="events-notifications-container">
      {/* Notifications Section */}
      <div className="notifications-section">
        <p className="section-subheading">Notifications</p>
        <div className="notification-slider">
          <p className="sliding-text">{notifications[currentIndex]}</p>
        </div>
      </div>

      {/* Events Section */}
      <div className="events-section">
        <p className="section-subheading">Recent & Upcoming Events</p>
        <div className="events-list">
          {events.map((event, index) => (
            <div className="event-card" key={index}>
              <h3 className="event-title">{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <p className="event-description">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsNotifications;
