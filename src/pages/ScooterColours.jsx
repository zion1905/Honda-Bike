// src/components/ScooterColours.jsx
import React, { useState } from "react";
import "../Styles/ScooterColours.css";

const ScooterColours = () => {
    const colours = [
        {
            name: "Majestic Brown Metallic",
            hex: "#5A3923",
            image: "https://www.honda2wheelersindia.com/_next/image?url=https%3A%2F%2Fedge.sitecorecloud.io%2Fhondamotorc388f-hmsi8ece-prodb777-e813%2Fmedia%2FProject%2FHONDA2WI%2Fhonda2wheelersindia%2Fmotorcycle%2FPLP-images%2FActiva-125.png%3Fh%3D638%26iar%3D0%26w%3D1038&w=1080&q=75&dpl=dpl_HbiW4NxwRQRS9faDhpg4EGDC1JrN",

        },
        {
            name: "Pearl Amazing White Matte",
            hex: "#F5F5F5",
            image: "https://www.honda2wheelersindia.com/_next/image?url=https%3A%2F%2Fedge.sitecorecloud.io%2Fhondamotorc388f-hmsi8ece-prodb777-e813%2Fmedia%2FProject%2FHONDA2WI%2Fhonda2wheelersindia%2Fmotorcycle%2FPLP-images%2FActiva-110.png%3Fh%3D638%26iar%3D0%26w%3D1038&w=1080&q=75&dpl=dpl_HbiW4NxwRQRS9faDhpg4EGDC1JrN",

        },
        {
            name: "Strontium Silver Metallic & Igneous Black",
            hex: "#BBBBBB",
            image: "https://www.honda2wheelersindia.com/_next/image?url=https%3A%2F%2Fedge.sitecorecloud.io%2Fhondamotorc388f-hmsi8ece-prodb777-e813%2Fmedia%2FProject%2FHONDA2WI%2Fhonda2wheelersindia%2Fmotorcycle%2FPLP-images%2FDio-125.png%3Fh%3D638%26iar%3D0%26w%3D1038&w=1080&q=75&dpl=dpl_HbiW4NxwRQRS9faDhpg4EGDC1JrN"
        },


        {
            name: "Black",
            hex: "#000000",
            image: "https://www.honda2wheelersindia.com/_next/image?url=https%3A%2F%2Fedge.sitecorecloud.io%2Fhondamotorc388f-hmsi8ece-prodb777-e813%2Fmedia%2FProject%2FHONDA2WI%2Fhonda2wheelersindia%2Fmotorcycle%2FPLP-images%2FDio-110.png%3Fh%3D638%26iar%3D0%26w%3D1038&w=1080&q=75&dpl=dpl_HbiW4NxwRQRS9faDhpg4EGDC1JrN",
        },

    ];

    const [selectedColour, setSelectedColour] = useState(colours[0]);

    return (
        <div className="scooter-colours-container">
            <div className="scooter-image">
                <img src={selectedColour.image} alt={selectedColour.name} />
            </div>

            <div className="colour-palette">
                {colours.map((colour, idx) => (
                    <div
                        key={idx}
                        className={`colour-swatch ${selectedColour.name === colour.name ? "active" : ""
                            }`}
                        style={{ backgroundColor: colour.hex }}
                        onClick={() => setSelectedColour(colour)}
                        title={colour.name}
                    />
                ))}
            </div>

            <p className="selected-colour">
                Color: {selectedColour.name}
            </p>
        </div>
    );
};

export default ScooterColours;
