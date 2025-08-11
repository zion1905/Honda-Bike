// src/pages/Products/BikeList.jsx
import React from 'react';
import '../../Styles/BikeList .css';
import {Link} from 'react-router-dom'
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
  colors: [
      { name: "Red", image: "https://imgd.aeplcdn.com/1056x594/n/g67bafb_1809975.jpg?q=80" },
      { name: "Blue", image: "https://imgd.aeplcdn.com/1056x594/n/1q6bafb_1809979.jpg?q=80" },
      { name: "Black", image: "https://imgd.aeplcdn.com/1056x594/n/zdqbafb_1809981.jpg?q=80" },
      { name: "Mat Marvel Blue Metallic", image: "https://imgd.aeplcdn.com/1056x594/n/905bafb_1809983.jpg?q=80"},
      { name: "Mat Axis Grey Metallic", image: "https://imgd.aeplcdn.com/1056x594/n/u2nbafb_1809977.jpg?q=80"},
 ]
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
  colors: [
      { name: "Red", image: "https://imgd.aeplcdn.com/1056x594/n/50d6qgb_1855474.jpg?q=80" },
      { name: "Blue", image: "https://imgd.aeplcdn.com/1056x594/n/50d6qgb_1855474.jpg?q=80" },
      { name: "Black", image: "https://imgd.aeplcdn.com/1056x594/n/uh06qgb_1855470.jpg?q=80" },
      { name: "Pearl Siren Blue with Lemon Ice Yellow", image: "https://imgd.aeplcdn.com/1056x594/n/b63oqgb_1855468.jpg?q=80"},
 ]
},
{
  name: 'Honda Shain',
  cc: '123.94 cc',
  mileage: '55 kmpl',
  bhp: '10.59 bhp',
  weight: '116 kg',
  price: '₹ 94,221',
  rating: '4.6/5',
  ratingsCount: '3487 Ratings',
  image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/45481/shine-right-side-view-2.jpeg?isig=0&q=80',
  colors: [
      { name: "Red", image: "https://imgd.aeplcdn.com/1056x594/n/sobtkgb_1848452.jpg?q=80" },
      { name: "Blue", image: "https://imgd.aeplcdn.com/1056x594/n/otgtkgb_1848458.jpg?q=80" },
      { name: "Black", image: "https://imgd.aeplcdn.com/1056x594/n/zdqbafb_1809981.jpg?q=80" },
      { name: "Genny Grey Metallic", image: "https://imgd.aeplcdn.com/1056x594/n/om9tkgb_1848456.jpg?q=80"},
      { name: "Matte Axis Gray Metallic", image: "https://imgd.aeplcdn.com/1056x594/n/ppdtkgb_1848454.jpg?q=80"},
      { name: "Mat Axis Grey Metallic", image: "https://imgd.aeplcdn.com/1056x594/n/u2nbafb_1809977.jpg?q=80"},

 ]
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

  colors: [
      { name: "Red", image: "https://imgd.aeplcdn.com/1056x594/n/lwasnfb_1825021.jpg?q=80" },
      { name: "Black", image: "https://imgd.aeplcdn.com/1056x594/n/t0hsnfb_1825029.jpg?q=80" },
      { name: "Pearl Deep Ground Gray", image: "https://imgd.aeplcdn.com/1056x594/n/0wfsnfb_1825027.jpg?q=80" },
      { name: "Mat Dune Brown", image: "https://imgd.aeplcdn.com/1056x594/n/wtesnfb_1825025.jpg?q=80"},
      { name: "Mat Axis Grey Metallic", image: "https://imgd.aeplcdn.com/1056x594/n/xfcsnfb_1825023.jpg?q=80"},
 ]},
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
    colors: [
      { name: "Red", image: "https://imgd.aeplcdn.com/1056x594/n/ypqds9b_1803741.jpg?q=80" },
      { name: "Mat Axis Grey Metallic", image: "https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/honda-select-model-mat-axis-gray-metallic-1669210943319.png?q=800" },
      { name: "Black", image: "https://imgd.aeplcdn.com/1056x594/n/nc5ds9b_1803743.jpg?q=80" },
    ]
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
    colors: [
      { name: "Red", image: "https://imgd.aeplcdn.com/1056x594/n/uhd9hgb_1844284.png?q=80" },
      { name: "Blue", image: "https://imgd.aeplcdn.com/1056x594/n/5ib9hgb_1844282.png?q=80" },
      { name: "Pearl Igneous Black - OBD 2", image: "https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/honda-select-model-pearl-igneous-black---obd-2-1693228291632.png?q=800" },
      { name: "Mat Axis Grey Metallic", image: "https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/honda-select-model-matte-axis-grey-metallic---obd2-1693228309007.png?q=80"},
 ]
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
    colors: [
      { name: "Red", image: "https://imgd.aeplcdn.com/1056x594/n/g67bafb_1809975.jpg?q=80" },
      { name: "Blue", image: "https://imgd.aeplcdn.com/1056x594/n/ijarnfb_1824961.jpg?q=80" },
      { name: "Rebel Red Metallic", image: "https://imgd.aeplcdn.com/1056x594/n/vuvqnfb_1824959.jpg?q=80" },
      { name: "Mat Axis Grey Metallic", image: "https://imgd.aeplcdn.com/1056x594/n/3wuqnfb_1824957.jpg?q=80"},
            { name: "Pearl Igneous Black", image: "https://imgd.aeplcdn.com/1056x594/n/uatqnfb_1824955.jpg?q=80" },
      { name: "block", image: "https://imgd.aeplcdn.com/1056x594/n/zternfb_1824965.jpg?q=80" },

 ]
},
// {
//   name: 'Honda CB350RS',
//   cc: '123.94 cc',
//   mileage: '63 kmpl',
//   bhp: '10.72 bhp',
//   weight: '116 kg',
//   price: '₹ 94,221',
//   rating: '4.6/5',
//   ratingsCount: '3487 Ratings',
//   image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/199717/cb350rs-right-side-view-6.jpeg?isig=0&q=80',
//     colors: [
//       { name: "Red", image: "https://imgd.aeplcdn.com/1056x594/n/g67bafb_1809975.jpg?q=80" },
//       { name: "Blue", image: "https://imgd.aeplcdn.com/1056x594/n/1q6bafb_1809979.jpg?q=80" },
//       { name: "Black", image: "https://imgd.aeplcdn.com/1056x594/n/zdqbafb_1809981.jpg?q=80" },
//       { name: "Mat Marvel Blue Metallic", image: "https://imgd.aeplcdn.com/1056x594/n/905bafb_1809983.jpg?q=80"},
//       { name: "Mat Axis Grey Metallic", image: "https://imgd.aeplcdn.com/1056x594/n/u2nbafb_1809977.jpg?q=80"},
//  ]
// },
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
    colors: [
      { name: "Red", image: "https://imgd.aeplcdn.com/1056x594/n/y2r5kgb_1848412.jpg?q=80" },
      { name: "Blue", image: "https://imgd.aeplcdn.com/1056x594/n/b1s5kgb_1848414.jpg?q=80" },
      { name: "Black", image: "https://imgd.aeplcdn.com/1056x594/n/2mo5kgb_1848408.jpg?q=80" },
      { name: "Mat Axis Grey Metallic", image: "https://imgd.aeplcdn.com/1056x594/n/f0p5kgb_1848410.jpg?q=80"},
 ]
},
// {
//   name: 'Honda shain 100',
//   cc: '123.94 cc',
//   mileage: '63 kmpl',
//   bhp: '10.72 bhp',
//   weight: '116 kg',
//   price: '₹ 94,221',
//   rating: '4.6/5',
//   ratingsCount: '3487 Ratings',
//   image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/208064/shine-100-right-side-view.jpeg?isig=0&q=80',
//     colors: [
//       { name: "Red", image: "https://imgd.aeplcdn.com/1056x594/n/g67bafb_1809975.jpg?q=80" },
//       { name: "Blue", image: "https://imgd.aeplcdn.com/1056x594/n/1q6bafb_1809979.jpg?q=80" },
//       { name: "Black", image: "https://imgd.aeplcdn.com/1056x594/n/zdqbafb_1809981.jpg?q=80" },
//       { name: "Mat Marvel Blue Metallic", image: "https://imgd.aeplcdn.com/1056x594/n/905bafb_1809983.jpg?q=80"},
//       { name: "Mat Axis Grey Metallic", image: "https://imgd.aeplcdn.com/1056x594/n/u2nbafb_1809977.jpg?q=80"},
//  ]
// },
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
    colors: [
      { name: "Red", image: "https://imgd.aeplcdn.com/1056x594/n/j4g5kgb_1848398.jpg?q=80" },
      { name: "Blue", image: "https://imgd.aeplcdn.com/1056x594/n/h595kgb_1848396.jpg?q=80" },
      { name: "Black", image: "https://imgd.aeplcdn.com/1056x594/n/agi5kgb_1848400.jpg?q=80" },
 ]
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
    colors: [
      { name: "Pearl Horizon White", image: "https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/honda-select-model-pearl-horizon-white-1705657375652.png?q=80" },
      { name: "Grand Prix Red", image: "https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/honda-select-model-grand-prix-red-1705657002952.png?q=80" },
      { name: "Black", image: "https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/honda-select-model-matte-gunpowder-black-metallic-1705657006951.png?q=80" },
 ]
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
    colors: [
      { name: "Red", image: "https://imgd.aeplcdn.com/1056x594/n/mbvs3fb_1834949.jpg?q=800" },
      { name: "Black", image: "https://imgd.aeplcdn.com/1056x594/n/p0at3fb_1834951.jpg?q=80" },
    ]
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
    colors: [
      { name: "Pearl Siren Blue", image: "https://imgd.aeplcdn.com/1056x594/n/ngpnigb_1845530.jpg?q=80" },
      { name: "Blue", image: "https://imgd.aeplcdn.com/1056x594/n/1q6bafb_1809979.jpg?q=80" },
      { name: "Pearl Igneous Black", image: "https://imgd.aeplcdn.com/1056x594/n/ozlnigb_1845524.jpg?q=80" },
 ]
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
    colors: [
      { name: "Red", image: "https://imgd.aeplcdn.com/1056x594/n/x970a9b_1782915.jpg?q=80" },
      { name: "Mat Axis Grey Metallic", image: "https://imgd.aeplcdn.com/1056x594/n/l4n0a9b_1782917.jpg?q=80"},
 ]
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
    colors: [
      { name: "Black", image: "https://imgd.aeplcdn.com/1056x594/n/1qf6vfb_1835677.jpg?q=800" },
 ]
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
    colors: [
      { name: "Black", image: "https://imgd.aeplcdn.com/1056x594/n/54bn0gb_1836512.jpg?q=80" },
 ]
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
  colors: [
      { name: "Bordeaux Red Metallic", image: "https://imgd.aeplcdn.com/1056x594/n/tvidbgb_1837930.jpg?q=80" },
      { name: "Black", image: "https://imgd.aeplcdn.com/1056x594/n/jtgcbgb_1837898.avif?q=80" },
 ]
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
  colors: [
      { name: "White", image: "https://imgd.aeplcdn.com/1056x594/n/0cmuegb_1841326.jpg?q=80" },
      { name: "Black", image: "https://imgd.aeplcdn.com/1056x594/n/1qouegb_1841328.jpg?q=80" },
 ]
}
   
  
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

            {/* Pass bike data to next page */}
            <Link to="/bike-details-container" state={{ bike }}>
              Book Now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BikeList;


