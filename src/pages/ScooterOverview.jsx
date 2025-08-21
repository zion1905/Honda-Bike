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

      {/* 🚀 Price Table */}
     <div className="price-list">
  <h3>Price Table</h3>
  <table>
    <thead>
      <tr>
        <th>Variant</th>
        <th>STD</th>
        <th>DLX</th>
        <th>H SMART</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Ex-Showroom</td>
        <td>₹85,344</td>
        <td>₹95,864</td>
        <td>₹98,865</td>
      </tr>
      <tr>
        <td>Insurance</td>
        <td>₹6,809</td>
        <td>₹6,930</td>
        <td>₹6,965</td>
      </tr>
      <tr>
        <td>Road Tax</td>
        <td>₹11,734</td>
        <td>₹12,786</td>
        <td>₹13,087</td>
      </tr>
      <tr className="highlight">
        <td>On Road</td>
        <td>₹1,03,887</td>
        <td>₹1,15,580</td>
        <td>₹1,18,917</td>
      </tr>
      <tr>
        <td>Accessories</td>
        <td>₹4,980</td>
        <td>₹4,980</td>
        <td>₹4,980</td>
      </tr>
      <tr>
        <td>Regt & Handling</td>
        <td>₹1,985</td>
        <td>₹1,985</td>
        <td>₹1,985</td>
      </tr>
      <tr className="total-row">
        <td>Total Amount</td>
        <td>₹1,10,852</td>
        <td>₹1,22,545</td>
        <td>₹1,25,882</td>
      </tr>
    </tbody>
  </table>
</div>

    </div>
  );
};

export default ScooterOverview;
