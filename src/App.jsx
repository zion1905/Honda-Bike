// App.jsx
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import RideCards from "./pages/RideCards";
import ImageCarousel from "./pages/ImageCarousel";
import CommunityCarousel from './pages/CommunityCarousel';
import EVList from "./pages/Products/EVList"; // Make sure this exists
import MotorcycleList from "./pages/Products/MotorcycleList";
import ScooterList from "./pages/Products/ScooterList ";
import AccessoryList from "./pages/Products/AccessoryList ";
import DealerNetworkSection from "./pages/dealer/DealerNetworkSection";
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
        <Route path="/motorcycle-page" element={<MotorcycleList/>} />
   
        <Route path= "/scooter-page" element ={<ScooterList/>} />
        <Route path ='/accessory-section' element ={<AccessoryList/>} />
        <Route path="/dealer-content" element ={<DealerNetworkSection/>} />
        {/* <Route path="/coverage-section" element ={<ExtendedWarranty/>}/> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
