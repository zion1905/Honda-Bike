// src/components/EVOverview.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../Styles/EVOverview.css";

const EVOverview = () => {
  return (
    <div className="ev-overview-container">
      {/* Tabs */}
      <div className="ev-tabs">
        <span className="active">Overview</span>
        <Link to="/comparison-container">Price</Link>
        <Link to="/ev-colours-container">Colours</Link>
      </div>

      {/* Overview Section */}
      <div className="ev-content">
        <div className="ev-image">
          <img
            src="https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/honda-activa-e-standard1732724252825.jpg?q=80"
            alt="Honda Activa e"
          />
        </div>
        <div className="ev-details">
          <h2>Honda Activa e (Standard)</h2>
          <p className="price">₹ 1,17,076 <span>Ex-Showroom</span></p>
          <p className="description">
            The Honda Activa e is an electric scooter designed for city commuting,
            offering a smooth ride, modern features, and an eco-friendly alternative
            to petrol scooters.
          </p>
          <Link to="/contact-container" className="booking">Book Now</Link>
        </div>
      </div>
    </div>
  );
};

export default EVOverview;
