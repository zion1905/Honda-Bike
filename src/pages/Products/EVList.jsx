// src/pages/Products/EVList.jsx
import React from 'react';
import '../../styles/evlist.css';

const evProducts = [
  {
    name: 'ACTIVA e:',
    colors: ['#a6d8db', '#c0c0c0', '#404040', '#e6e6e6', '#5b5dbb'],
    image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/honda-activa-e-standard1732724252825.jpg?q=80',
  },
  {
    name: 'QC1',
    colors: ['#a6d8db', '#c0c0c0', '#404040', '#e6e6e6', '#5b5dbb'],
    image: 'https://images.timesdrive.in/thumb/msid-151101288,thumbsize-632775,width-450,height-254,resizemode-75/151101288.jpg',
  },
];

const EVList = () => {
  return (
    <>
      <div id='ev-list'></div>
      <div className="ev-list">
        {evProducts.map((product, index) => (
          <div className="ev-card" key={index}>
            <img src={product.image} alt={product.name} className="ev-image" />
            <div className="ev-details">
              <h2>{product.name}</h2>
              <div className="ev-colors">
                <span>Colors:</span>
                {product.colors.map((color, i) => (
                  <span
                    key={i}
                    className="color-dot"
                    style={{ backgroundColor: color }}
                  ></span>
                ))}
              </div>
              <button className="explore-button">
                Explore <span>↗</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default EVList;
