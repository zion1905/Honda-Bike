// src/pages/Products/EVList.jsx
import React from 'react';
import '../../Styles/EvList.css';
import {Link} from 'react-router-dom'
const evProducts = [
  {
    name: 'ACTIVA e:',
    image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/honda-activa-e-standard1732724252825.jpg?q=80',
  },
  {
    name: 'QC1',
    image: 'https://images.timesdrive.in/thumb/msid-151101288,thumbsize-632775,width-450,height-254,resizemode-75/151101288.jpg',
  },
];

const EVList = () => {
  return (
    <>
          {/* Banner Section */}
      <div className="ev-banner">
        <img
          src="https://static.toiimg.com/photo/115743761.cms"
          alt="EV Banner"
          className="ev-banner-image"
        />
      </div>
      <div id='ev-list'></div>
      <div className="ev-list">
        {evProducts.map((product, index) => (
          <div className="ev-card" key={index}>
            <img src={product.image} alt={product.name} className="ev-image" />
            <div className="ev-details">
              <h2>{product.name}</h2>

              <Link to="/ev-overview-container" className="explore-button">
                Explore <span>↗</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default EVList;
