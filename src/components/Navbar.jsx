import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMouseEnter = (menu) => setOpenDropdown(menu);
  const handleMouseLeave = () => setOpenDropdown(null);

  return (
    <nav className="navbar">
      <div className="navbar-logo">HONDA</div>

      <ul className="navbar-links">
        <li
          className="dropdown"
          onMouseEnter={() => handleMouseEnter('products')}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="#">Products ▾</Link>
          {openDropdown === 'products' && (
            <ul className="dropdown-menu">
              <li><Link to="/evlist">EV</Link></li>
              <li><Link to="/motorcycle-page">Motorcycles</Link></li>
              <li><Link to="/scooter-page">Scooters</Link></li>
              <li><Link to="/accessory-section">Accessories</Link></li>
            </ul>
          )}
        </li>

        <li
          className="dropdown"
          onMouseEnter={() => handleMouseEnter('dealer')}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="#">Dealer Network ▾</Link>
          {openDropdown === 'dealer' && (
            <ul className="dropdown-menu">
              <li><Link to="/dealer-content">Our Network</Link></li>
              <li><Link to="#">Dealer Locator</Link></li>
              <li><Link to="#">Become a Dealer</Link></li>
              <li><Link to="#">Find a Distributor</Link></li>
            </ul>
          )}
        </li>

        <li
          className="dropdown"
          onMouseEnter={() => handleMouseEnter('services')}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="#">Services ▾</Link>
          {openDropdown === 'services' && (
            <ul className="dropdown-menu">

              <li className="dropdown-submenu">
                <Link to="#">Maintenance ▸</Link>
                <ul className="dropdown-submenu-menu">
                  <li><Link to="/coverage-section">Extended Warranty</Link></li>
                  <li><Link to="/maintenance/checkup">Extended Warranty Plus</Link></li>
                  <li><Link to="/maintenance/service-centers">Annual Maintenance Contract (AMC)</Link></li>
                  <li><Link to="/maintenance/tips">Road Side Assistance (RSA)</Link></li>
                  <li><Link to="/maintenance/faq">EV Care Package</Link></li>
                  <li><Link to="/maintenance/faq">Know Your Vehicle</Link></li>

                </ul>
              </li>

              <li><Link to="/warranty">Warranty</Link></li>
              <li><Link to="/recall">Recall Campaign</Link></li>

            </ul>
          )}
        </li>


        <li
          className="dropdown"
          onMouseEnter={() => handleMouseEnter('about')}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="#">About Honda ▾</Link>
          {openDropdown === 'about' && (
            <ul className="dropdown-menu">
              <li><Link to="#">Corpotrate</Link></li>
              <li><Link to="#">Honda Globel</Link></li>
              <li><Link to="#">Honda cars Indian Ltd</Link></li>
                            <li><Link to="#">Honda Globel</Link></li>
              <li><Link to="#">Honda car Indian power products Ltd</Link></li>
              <li><Link to="#">Honda power pack Enerdy Pvt Ltd</Link></li>
              <li><Link to="#">Technology</Link></li>
              <li><Link to="#">Racing</Link></li>
              <li><Link to="#">Careers</Link></li>

            </ul>
          )}
        </li>

        <li
          className="dropdown"
          onMouseEnter={() => handleMouseEnter('sustainability')}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="#">Sustainability ▾</Link>
          {openDropdown === 'sustainability' && (
            <ul className="dropdown-menu">
              <li><Link to="#">Environment</Link></li>
              <li><Link to="#">Safety </Link></li>
                            <li><Link to="#">CSR </Link></li>

            </ul>
          )}
        </li>

        <li
          className="dropdown"
          onMouseEnter={() => handleMouseEnter('resources')}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="#">Resources ▾</Link>
          {openDropdown === 'resources' && (
            <ul className="dropdown-menu">
              <li><Link to="#">BrochuOwener's Manual</Link></li>
              <li><Link to="#">Video Gallery</Link></li>
              <li><Link to="#">Honda Genuine parts</Link></li>
                            <li><Link to="#">Press release</Link></li>
              <li><Link to="#">Awards</Link></li>

            </ul>
          )}
        </li>

        <li
          className="dropdown"
          onMouseEnter={() => handleMouseEnter('contact')}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="#">Contact Us </Link>
          {openDropdown === 'contact' && (
            <ul className="dropdown-menu">
            
            </ul>
          )}
        </li>
      </ul>

      <div className="navbar-icons">
        <i className="fas fa-search"></i>
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;
