// src/pages/Products/BikeList.jsx
import React from 'react';
import '../../Styles/BikeList .css';

const bikes = [
  {
    name: 'Honda SP 125',
    cc: '123.94 cc',
    mileage: '63 kmpl',
    bhp: '10.72 bhp',
    weight: '116 kg',
    price: '₹ 94,221',
    rating: '4.6/5',
    ratingsCount: '3487 Ratings',
    image: 'https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/menu/RedWing/shine-125.jpg?h=240&iar=0&w=360',
    url: 'https://www.bikewale.com/honda-bikes/sp-125/'
  },
  {
    name: 'Honda CB 125 Hornet',
    cc: '123.94 cc',
    mileage: '53 kmpl',
    bhp: '10.99 bhp',
    weight: '124 kg',
    price: '₹ 1,12,000',
    rating: '4.6/5',
    ratingsCount: '38 Ratings',
    image: 'https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/motorcycle/CB-125/nav/CB125.jpg?h=240&iar=0&w=360',
    url: 'https://www.bikewale.com/honda-bikes/cb125-hornet/'
  },
   {
    name: 'Honda Shain',
    cc: '123.94 cc',
    mileage: '63 kmpl',
    bhp: '10.72 bhp',
    weight: '116 kg',
    price: '₹ 94,221',
    rating: '4.6/5',
    ratingsCount: '3487 Ratings',
    image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/45481/shine-right-side-view-2.jpeg?isig=0&q=80',
    url: 'https://www.bikewale.com/honda-bikes/sp-125/'
  },
   {
    name: 'Honda CB300',
    cc: '123.94 cc',
    mileage: '63 kmpl',
    bhp: '10.72 bhp',
    weight: '116 kg',
    price: '₹ 94,221',
    rating: '4.6/5',
    ratingsCount: '3487 Ratings',
    image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/200503/cb350-right-side-view.jpeg?isig=0&q=80',
    url: 'https://www.bikewale.com/honda-bikes/sp-125/'
  },
   {
    name: 'Honda Unicorn',
    cc: '123.94 cc',
    mileage: '63 kmpl',
    bhp: '10.72 bhp',
    weight: '116 kg',
    price: '₹ 94,221',
    rating: '4.6/5',
    ratingsCount: '3487 Ratings',
    image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/194689/unicorn-right-side-view.jpeg?isig=0&q=80',
    url: 'https://www.bikewale.com/honda-bikes/sp-125/'
  },
   {
    name: 'Honda Hunter 2.0',
    cc: '123.94 cc',
    mileage: '63 kmpl',
    bhp: '10.72 bhp',
    weight: '116 kg',
    price: '₹ 94,221',
    rating: '4.6/5',
    ratingsCount: '3487 Ratings',
    image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/156227/hornet-right-side-view-2.png?isig=0&q=80',
    url: 'https://www.bikewale.com/honda-bikes/sp-125/'
  },
   {
    name: 'Honda Hness CB350',
    cc: '123.94 cc',
    mileage: '63 kmpl',
    bhp: '10.72 bhp',
    weight: '116 kg',
    price: '₹ 94,221',
    rating: '4.6/5',
    ratingsCount: '3487 Ratings',
    image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/200501/hness-cb350-right-side-view-2.png?isig=0&q=80',
    url: 'https://www.bikewale.com/honda-bikes/sp-125/'
  },
   {
    name: 'Honda CB350RS',
    cc: '123.94 cc',
    mileage: '63 kmpl',
    bhp: '10.72 bhp',
    weight: '116 kg',
    price: '₹ 94,221',
    rating: '4.6/5',
    ratingsCount: '3487 Ratings',
    image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/199717/cb350rs-right-side-view-6.jpeg?isig=0&q=80',
    url: 'https://www.bikewale.com/honda-bikes/sp-125/'
  },
   {
    name: 'Honda SP 160',
    cc: '123.94 cc',
    mileage: '63 kmpl',
    bhp: '10.72 bhp',
    weight: '116 kg',
    price: '₹ 94,221',
    rating: '4.6/5',
    ratingsCount: '3487 Ratings',
    image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/154781/sp160-right-side-view-13.jpeg?isig=0&q=80',
    url: 'https://www.bikewale.com/honda-bikes/sp-125/'
  },
   {
    name: 'Honda shain 100',
    cc: '123.94 cc',
    mileage: '63 kmpl',
    bhp: '10.72 bhp',
    weight: '116 kg',
    price: '₹ 94,221',
    rating: '4.6/5',
    ratingsCount: '3487 Ratings',
    image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/208064/shine-100-right-side-view.jpeg?isig=0&q=80',
    url: 'https://www.bikewale.com/honda-bikes/sp-125/'
  },
   {
    name: 'Honda NX200',
    cc: '123.94 cc',
    mileage: '63 kmpl',
    bhp: '10.72 bhp',
    weight: '116 kg',
    price: '₹ 94,221',
    rating: '4.6/5',
    ratingsCount: '3487 Ratings',
    image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/197825/nx200-right-side-view-2.jpeg?isig=0&q=80',
    url: 'https://www.bikewale.com/honda-bikes/sp-125/'
  },
   {
    name: 'Honda NX500',
    cc: '123.94 cc',
    mileage: '63 kmpl',
    bhp: '10.72 bhp',
    weight: '116 kg',
    price: '₹ 94,221',
    rating: '4.6/5',
    ratingsCount: '3487 Ratings',
    image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/164401/nx500-right-side-view-6.png?isig=0&q=80',
    url: 'https://www.bikewale.com/honda-bikes/sp-125/'
  },
   {
    name: 'Honda CBR650R',
    cc: '123.94 cc',
    mileage: '63 kmpl',
    bhp: '10.72 bhp',
    weight: '116 kg',
    price: '₹ 94,221',
    rating: '4.6/5',
    ratingsCount: '3487 Ratings',
    image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/202631/cbr650r-right-front-three-quarter.jpeg?isig=0&q=80',
    url: 'https://www.bikewale.com/honda-bikes/sp-125/'
  },
   {
    name: 'Honda Livo',
    cc: '123.94 cc',
    mileage: '63 kmpl',
    bhp: '10.72 bhp',
    weight: '116 kg',
    price: '₹ 94,221',
    rating: '4.6/5',
    ratingsCount: '3487 Ratings',
    image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/155547/livo-right-side-view-2.png?isig=0&q=80',
    url: 'https://www.bikewale.com/honda-bikes/sp-125/'
  },
   {
    name: 'Honda CB300F Flex Fuel',
    cc: '123.94 cc',
    mileage: '63 kmpl',
    bhp: '10.72 bhp',
    weight: '116 kg',
    price: '₹ 94,221',
    rating: '4.6/5',
    ratingsCount: '3487 Ratings',
    image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/170223/cb300f-flex-fuel-right-side-view-3.jpeg?isig=0&q=80',
    url: 'https://www.bikewale.com/honda-bikes/sp-125/'
  },
   {
    name: 'Honda Rebel500',
    cc: '123.94 cc',
    mileage: '63 kmpl',
    bhp: '10.72 bhp',
    weight: '116 kg',
    price: '₹ 94,221',
    rating: '4.6/5',
    ratingsCount: '3487 Ratings',
    image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/202895/rebel-500-right-side-view-3.jpeg?isig=0&q=80',
    url: 'https://www.bikewale.com/honda-bikes/sp-125/'
  },
   {
    name: 'Honda CB1000 Hornet',
    cc: '123.94 cc',
    mileage: '63 kmpl',
    bhp: '10.72 bhp',
    weight: '116 kg',
    price: '₹ 94,221',
    rating: '4.6/5',
    ratingsCount: '3487 Ratings',
    image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/203642/cb-1000-hornet-right-side-view-2.jpeg?isig=0&q=80',
    url: 'https://www.bikewale.com/honda-bikes/sp-125/'
  },
   {
    name: 'Honda GoldWing Tour',
    cc: '123.94 cc',
    mileage: '63 kmpl',
    bhp: '10.72 bhp',
    weight: '116 kg',
    price: '₹ 94,221',
    rating: '4.6/5',
    ratingsCount: '3487 Ratings',
    image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/158873/goldwing-right-side-view-2.png?isig=0&q=80',
    url: 'https://www.bikewale.com/honda-bikes/sp-125/'
  },
   {
    name: 'Honda Transalp XL750',
    cc: '123.94 cc',
    mileage: '63 kmpl',
    bhp: '10.72 bhp',
    weight: '116 kg',
    price: '₹ 94,221',
    rating: '4.6/5',
    ratingsCount: '3487 Ratings',
    image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/204918/transalp-xl750-right-front-three-quarter-2.jpeg?isig=0&q=80',
    url: 'https://www.bikewale.com/honda-bikes/sp-125/'
  },
  
];

const BikeList = () => {
  return (
    <div className="bike-list">
      {bikes.map((bike, index) => (
        <div className="bike-card" key={index}>
          {/* Bike Image */}
          <a href={bike.url} target="_blank" rel="noopener noreferrer">
            <img src={bike.image} alt={bike.name} className="bike-image" />
          </a>

          {/* Bike Details */}
          <div className="bike-details">
            <h2 className="bike-name">{bike.name}</h2>
            <p className="bike-specs">
              {bike.cc} | {bike.mileage} | {bike.bhp} | {bike.weight}
            </p>
            <p className="bike-price">{bike.price}</p>

            {/* Ratings */}
            <p className="bike-rating">
              ⭐ {bike.rating} <span>({bike.ratingsCount})</span>
            </p>

            {/* On-Road Price Button */}
            <a
              href={bike.url}
              target="_blank"
              rel="noopener noreferrer"
              className="price-button"
            >
              Check On-Road Price
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BikeList;
