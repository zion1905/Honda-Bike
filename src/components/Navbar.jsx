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
          onMouseEnter={() => handleMouseEnter('sales')}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="#">Sales ▾</Link>
          {openDropdown === 'sales' && (
            <ul className="dropdown-menu">
              <li><Link to="/evlist">EV</Link></li>
              <li><Link to="/bike-list">Motorcycles</Link></li>
              <li><Link to="/scooter-page">Scooters</Link></li>
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
              <li><Link to="#">Honda car Indian power sales Ltd</Link></li>
              <li><Link to="#">Honda power pack Enerdy Pvt Ltd</Link></li>
              <li><Link to="#">Technology</Link></li>
              <li><Link to="#">Racing</Link></li>
              <li><Link to="#">Careers</Link></li>

            </ul>
          )}
        </li>
        <li
          className="dropdown"
          onMouseEnter={() => handleMouseEnter('contact')}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/contact-container">Contact Us </Link>
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
