// App.jsx
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import RideCards from "./pages/RideCards";
import ImageCarousel from "./pages/ImageCarousel";
import CommunityCarousel from './pages/CommunityCarousel';
import EVList from "./pages/sales/EVList"; // Make sure this exists
import ScooterList from "./pages/sales/ScooterList ";
// import DealerNetworkSection from "./pages/dealer/DealerNetworkSection";
import EVOverview from "./pages/EVOverview";
import EVComparison from "./pages/EVComparison";
import EVColours from "./pages/EVColours";
import BikeList from "./pages/sales/BikeList ";
import ContactForm from "./pages/ContactForm ";
import BikeDetails from "./pages/BikeDetails";
import ScooterOverview from "./pages/ScooterOverview";
import ScooterColours from "./pages/ScooterColours";

// import ExtendedWarranty from "./pages/Services/Maintenance/ExtendedWarranty";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <RideCards />
              <ImageCarousel />
              <CommunityCarousel />

            </>
          }
        />
        <Route path="/evlist" element={<EVList />} />
        <Route path="/bike-list" element={<BikeList/>} />
   
        <Route path= "/scooter-page" element ={<ScooterList/>} />
        <Route path="/ev-overview-container" element ={<EVOverview/>} />
        {/* <Route path="/coverage-section" element ={<ExtendedWarranty/>}/> */}
        <Route path="/comparison-container" element = {<EVComparison/>} />
        <Route path="/ev-colours-container" element = {<EVColours/>} />
        <Route path="/contact-container" element = {<ContactForm/>} />
                <Route path="/bike-details-container" element={<BikeDetails />} />
   <Route path='/scooter-overview-container' element ={<ScooterOverview/>} />
   <Route path="/scooter-colours-container" element ={<ScooterColours/>} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
