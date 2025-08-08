import React from 'react';
import '../Styles/RideCards.css';

const rideData = [
  {
    id: 1,
    tag: 'EV',
    title: 'Electrify Your Dreams',
    description: 'Discover the future where cutting-edge design meets electric performance and style.',
    image: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    tag: 'REDWING',
    title: 'Explore With Every Ride',
    description: 'Enjoy amazing journeys packed with world-class features and high-quality riding comfort.',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    tag: 'BIGWING',
    title: 'Excites the World',
    description: 'Explore boldly, follow your passion, and discover the extraordinary with every turn.',
    image: 'https://images.pexels.com/photos/3369486/pexels-photo-3369486.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const RideCards = () => {
  return (
    <section className="ride-section">
      <h2 className="ride-heading">The Ride That Moves You</h2>
      <div className="ride-cards">
        {rideData.map((item) => (
          <div className="ride-card" key={item.id} style={{ backgroundImage: `url(${item.image})` }}>
            <div className="ride-overlay">
              <span className="ride-tag">{item.tag}</span>
              <h3 className="ride-title">{item.title}</h3>
              <p className="ride-description">{item.description}</p>
              <a href="#" className="ride-link">View all <span>→</span></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RideCards;
