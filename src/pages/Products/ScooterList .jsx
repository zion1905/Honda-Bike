import React from 'react';
import '../../Styles/scooterlist .css';

const scooters = [
  {
    name: "Activa125",
    image: "https://www.honda2wheelersindia.com/_next/image?url=https%3A%2F%2Fedge.sitecorecloud.io%2Fhondamotorc388f-hmsi8ece-prodb777-e813%2Fmedia%2FProject%2FHONDA2WI%2Fhonda2wheelersindia%2Fmotorcycle%2FPLP-images%2FActiva-125.png%3Fh%3D638%26iar%3D0%26w%3D1038&w=1080&q=75&dpl=dpl_HbiW4NxwRQRS9faDhpg4EGDC1JrN",
    colors: "🟥 ⚫ ⚪ 🟤",
  },
  {
    name: "Activa110",
    image: "https://www.honda2wheelersindia.com/_next/image?url=https%3A%2F%2Fedge.sitecorecloud.io%2Fhondamotorc388f-hmsi8ece-prodb777-e813%2Fmedia%2FProject%2FHONDA2WI%2Fhonda2wheelersindia%2Fmotorcycle%2FPLP-images%2FActiva-110.png%3Fh%3D638%26iar%3D0%26w%3D1038&w=1080&q=75&dpl=dpl_HbiW4NxwRQRS9faDhpg4EGDC1JrN",
    colors: "🔵 ⚫ 🟡",
  },
  {
    name: "Dio125",
    image: "https://www.honda2wheelersindia.com/_next/image?url=https%3A%2F%2Fedge.sitecorecloud.io%2Fhondamotorc388f-hmsi8ece-prodb777-e813%2Fmedia%2FProject%2FHONDA2WI%2Fhonda2wheelersindia%2Fmotorcycle%2FPLP-images%2FDio-125.png%3Fh%3D638%26iar%3D0%26w%3D1038&w=1080&q=75&dpl=dpl_HbiW4NxwRQRS9faDhpg4EGDC1JrN",
    colors: "🔵 ⚫ 🟥",
  },
  {
    name: "Dio110",
    image: "https://www.honda2wheelersindia.com/_next/image?url=https%3A%2F%2Fedge.sitecorecloud.io%2Fhondamotorc388f-hmsi8ece-prodb777-e813%2Fmedia%2FProject%2FHONDA2WI%2Fhonda2wheelersindia%2Fmotorcycle%2FPLP-images%2FDio-110.png%3Fh%3D638%26iar%3D0%26w%3D1038&w=1080&q=75&dpl=dpl_HbiW4NxwRQRS9faDhpg4EGDC1JrN",
    colors: "⚫ ⚪ 🟣",
  },
];

const ScooterList = () => {
  return (
    <div className="scooter-page">
      {/* VIDEO BANNER */}
      <div className="video-banner">
        <video autoPlay muted loop className="banner-video">
          <source src="/videos/banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay-text">
          <p>
            The product shown may vary from the actual product available in the market. Accessories shown may not be part of standard equipment. All features and colours may not be part of all variants. All riding actions in the film are performed in a controlled environment under expert supervision. Please don’t imitate.
          </p>
        </div>
      </div>

      {/* SCOOTER GRID */}
      <main className="scooter-grid">
        {scooters.map((scooter, index) => (
          <div key={index} className="scooter-card">
            <img src={scooter.image} alt={scooter.name} />
            <h3>{scooter.name}</h3>
            <p>Colors: {scooter.colors}</p>
            <button className="explore-btn">Explore</button>
          </div>
        ))}
      </main>
    </div>
  );
};

export default ScooterList;
