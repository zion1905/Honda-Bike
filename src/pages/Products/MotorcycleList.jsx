import React from 'react';
import '../../Styles/MotorcycleList.css';

const hondaBikes = [
    { name: "Shine100", image: "https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/menu/RedWing/shine-100.jpg?h=240&iar=0&w=360" },
    { name: "Shine100 DX", image: "https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/motorcycle/shine-100-dx/Nav/Shine-100-DX.jpg?h=240&iar=0&w=360" },
    { name: "Livo", image: "https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/menu/RedWing/Livo.jpg?h=240&iar=0&w=360" },
    { name: "Shine125", image: "https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/menu/RedWing/shine-125.jpg?h=240&iar=0&w=360" },
    { name: "SP125", image: "https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/menu/RedWing/sp-125.jpg?h=240&iar=0&w=360" },
    { name: "CB125 Hornet", image: "https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/motorcycle/CB-125/nav/CB125.jpg?h=240&iar=0&w=360" },
    { name: "Unicorn", image: "https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/menu/RedWing/Unicorn.jpg?h=240&iar=0&w=360" },
    { name: "SP160", image: "https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/menu/RedWing/sp-160.jpg?h=240&iar=0&w=360" },
    { name: "NX 200", image: "https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/menu/RedWing/NX200.jpg?h=240&iar=0&w=360" },
    {name: 'Hornet 2.0', image:'https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/menu/RedWing/Hornet.jpg?h=240&iar=0&w=360'}

];
const bigWingBikes = [
    { name: "Hornet 2.0", image: "https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/menu/RedWing/Hornet.jpg?h=240&iar=0&w=360" },
    { name: "NX 200", image: "https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/menu/RedWing/NX200.jpg?h=240&iar=0&w=360" },
    { name: "Hornet 2.o", image: "https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/menu/RedWing/Hornet.jpg?h=240&iar=0&w=360" },
    { name: "CB300F", image: "https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/menu/BigWing/CB300F.jpg?h=240&iar=0&w=360" },
    { name: "CB300R", image: "https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/menu/BigWing/CB300R-menu.jpg?h=240&iar=0&w=360" },
    { name: "CB350", image: "https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/menu/BigWing/CB350-menu.jpg?h=240&iar=0&w=360" },
    { name: "CB350H'ness", image: "https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/menu/BigWing/Hness.jpg?h=240&iar=0&w=360" },
    { name: "CB350RS", image: "https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/menu/BigWing/CB350RS.jpg?h=240&iar=0&w=360" },
    { name: "NX500", image: "https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/menu/BigWing/NX500.jpg?h=240&iar=0&w=360" },
    { name: "Rebel500", image: "https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/menu/BigWing/Rebel500.png?h=240&iar=0&w=360" },
    { name: "CB650R", image: "https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/menu/BigWing/CB650R-new.png?h=240&iar=0&w=360" },
    { name: "CBR650R", image: "https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/menu/BigWing/CBR650R-new.png?h=240&iar=0&w=360" },
    { name: "Hornet 750", image: "https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/menu/BigWing/hornet-750.png?h=240&iar=0&w=360" },
    { name: "XL 750 Transapl", image: "https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/menu/BigWing/xl750-transalp.png?h=240&iar=0&w=360" },
    { name: "X-Adv", image: "https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/menu/BigWing/x-adv.png?h=240&iar=0&w=360" },
    { name: "Hornet 1000sp", image: "https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/menu/BigWing/hornet-1000sp.png?h=240&iar=0&w=360" },
    { name: "GoldenWing Tour", image: "https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/Goldwing-Tour--New-(1).png?h=240&iar=0&w=360" },
];
const MotorcycleList = () => {
  return (
    <div className="motorcycle-page">
      <div className="column">
        <h2 className="column-title">Honda</h2>
        <div className="bike-grid">
          {hondaBikes.map((bike, index) => (
            <div key={index} className="bike-card">
              <img src={bike.image} alt={bike.name} />
              <p>{bike.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="column">
        <h2 className="column-title">Honda BigWing</h2>
        <div className="bike-grid">
          {bigWingBikes.map((bike, index) => (
            <div key={index} className="bike-card">
              <img src={bike.image} alt={bike.name} />
              <p>{bike.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MotorcycleList;
