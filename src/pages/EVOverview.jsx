// src/components/EVOverview.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/EVOverview.css";

const EVOverview = () => {
  const location = useLocation();
  const ev = location.state?.ev;

  // If no data was passed, show a fallback
  if (!ev) {
    return <p>No EV selected. Please go back and choose one.</p>;
  }

  return (
    <div className="ev-overview-container">
      {/* Tabs */}
      <div className="ev-tabs">
        <span className="active">Overview</span>
        <Link to="/ev-colours-container">Colours</Link>
      </div>

      {/* Overview Section */}
      <div className="ev-content">
        <div className="ev-image">
          <img src={ev.image} alt={ev.name} />
        </div>
        <div className="ev-details">
          <h2>{ev.name}</h2>
          <p className="price">
            {ev.price} <span>{ev.priceNote}</span>
          </p>
          <p className="description">{ev.description}</p>
          <Link to="/contact-container" className="booking">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EVOverview;
