// src/pages/HomePage.jsx
import React from 'react';
import '../styles/Home.css';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Embedded YouTube Background Video */}
      <div className="video-background">
        <iframe
          src="https://www.youtube.com/embed/BYorH-BYVlU?autoplay=1&mute=1&loop=1&playlist=BYorH-BYVlU&controls=0&showinfo=0&modestbranding=1"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Background Video"
        ></iframe>
      </div>

      <div className="homepage-overlay">
        <h1>Cumulative Motorcycle Production</h1>
        <h2>500,000,000 <span>units</span></h2>
        <p>Driven by innovation. Powered by trust.</p>
      </div>
    </div>
  );
};

export default HomePage;
