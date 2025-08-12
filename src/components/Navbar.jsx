import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMouseEnter = (menu) => {
    if (window.innerWidth > 768) setOpenDropdown(menu);
  };
  const handleMouseLeave = () => setOpenDropdown(null);

  const toggleDropdown = (menu) => {
    if (openDropdown === menu) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(menu);
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">HONDA</Link>

      <ul className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
        <li
          className={`dropdown ${openDropdown === 'sales' ? 'open' : ''}`}
          onMouseEnter={() => handleMouseEnter('sales')}
          onMouseLeave={handleMouseLeave}
          onClick={() => toggleDropdown('sales')}
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
          className={`dropdown ${openDropdown === 'services' ? 'open' : ''}`}
          onMouseEnter={() => handleMouseEnter('services')}
          onMouseLeave={handleMouseLeave}
          onClick={() => toggleDropdown('services')}
        >
          <Link to="#">Services ▾</Link>
          {openDropdown === 'services' && (
            <ul className="dropdown-menu">
              <li><Link to="/warranty">Warranty</Link></li>
              <li><Link to="/recall">Recall Campaign</Link></li>
            </ul>
          )}
        </li>

        <li
          className={`dropdown ${openDropdown === 'about' ? 'open' : ''}`}
          onMouseEnter={() => handleMouseEnter('about')}
          onMouseLeave={handleMouseLeave}
          onClick={() => toggleDropdown('about')}
        >
          <Link to="#">About Honda ▾</Link>
          {openDropdown === 'about' && (
            <ul className="dropdown-menu">
              <li><Link to="#">Corporate</Link></li>
              <li><Link to="#">Honda Global</Link></li>
              <li><Link to="#">Honda Cars India Ltd</Link></li>
              <li><Link to="#">Honda Car Power Sales Ltd</Link></li>
              <li><Link to="#">Honda Power Pack Energy Pvt Ltd</Link></li>
              <li><Link to="#">Technology</Link></li>
              <li><Link to="#">Racing</Link></li>
              <li><Link to="#">Careers</Link></li>
            </ul>
          )}
        </li>

        <li>
          <Link to="/contact-container">Contact Us</Link>
        </li>
      </ul>

      <div className="navbar-icons">
        <i className="fas fa-search"></i>
        <i className="fas fa-bars" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}></i>
      </div>
    </nav>
  );
};

export default Navbar;
