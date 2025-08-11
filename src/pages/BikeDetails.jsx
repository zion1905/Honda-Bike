// src/pages/Products/BikeDetails.jsx
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../Styles/BikeDetails.css";

const BikeDetails = () => {
  const location = useLocation();
  const { bike } = location.state; // Get bike from navigation

  const [selectedImage, setSelectedImage] = useState(bike.image);

  return (
    <div className="bike-details-container">
      <h1>{bike.name}</h1>
      <img src={selectedImage} alt={bike.name} className="bike-main-image" />

      <p className="bike-price">Price: {bike.price}</p>

      <div className="color-picker">
        <h3>Choose Color:</h3>
        {bike.colors.map((color, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(color.image)}
            style={{
              background: color.name.toLowerCase(),
              width: "30px",
              height: "30px",
              margin: "5px",
              border: "2px solid #ccc",
              cursor: "pointer",
            }}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default BikeDetails;
