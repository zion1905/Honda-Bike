// src/components/ScooterOverview.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
 import "../Styles/ScooterOverview.css";

const ScooterOverview = () => {
  const location = useLocation();
  const scooter = location.state?.scooter;

  // If no data was passed, show a fallback
  if (!scooter) {
    return <p>No scooter selected. Please go back and choose one.</p>;
  }

  return (
    <div className="scooter-overview-container">
      {/* Tabs */}
      <div className="scooter-tabs">
        <span className="active">Overview</span>
        <Link to="/scooter-colours-container">Colours</Link>
      </div>

      {/* Overview Section */}
      <div className="scooter-content">
        <div className="scooter-image">
          <img src={scooter.image} alt={scooter.name} />
        </div>
        <div className="scooter-details">
          <h2>{scooter.name}</h2>
          <p className="price">
            {scooter.price} <span>{scooter.priceNote}</span>
          </p>
          <p className="description">{scooter.description}</p>
          <Link to="/contact-container" className="booking">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScooterOverview;
