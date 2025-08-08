import React from 'react';
import '../../Styles/AccessoryList .css';

const accessories = [
  {
    title: "Vehicle Accessories",
    description: "Customize your Honda with durable, functional accessories.",
    image: "https://image.made-in-china.com/202f0j00bOeVyskMPjcu/Luxury-Sport-Style-Full-Set-Universal-Leather-Car-Seat-Cover.webp", // replace with your uploaded URL if needed
  },
  {
    title: "Wearable Accessories",
    description: "Show your Honda pride with branded merchandise.",
    image: "https://www.hondacarindia.com/_next/image?url=https%3A%2F%2Fwww.hondacarindia.com%2Fweb-data%2Fmerchandise%2Fbanner%2FDigital_Mobile%20Banner_375x508px-2.jpg&w=3840&q=75", // replace with actual image URL
  },
  {
    title: "Merchandise Accessories",
    description: "Premium gear to complement your Honda experience.",
    image: "https://shop.barrybourke.com.au/images/thumbs/0003071_honda-jacket-with-hood_415.jpeg", // replace with actual image URL
  },
  {
    title: "Genuine Lubes & Chemicals",
    description: "Keep your bike running smoothly with authentic products.",
    image: "https://images.jdmagicbox.com/comp/def_content/diesel-oil-dealers/998e1630d8-diesel-oil-dealers-3-ratc6.jpg", // replace with actual image URL
  },
];

const AccessoryList = () => {
  return (
    <section className="accessory-section">
      <h2 className="accessory-title">Why Buy Honda Accessories</h2>
      <p className="accessory-subtitle">
        Enhance your riding experience with Honda accessories designed for performance and style.
      </p>
      <div className="accessory-list">
        {accessories.map((item, index) => (
          <div className="accessory-card" key={index}>
            <img src={item.image} alt={item.title} className="accessory-image" />
            <div className="accessory-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AccessoryList;
