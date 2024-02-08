import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../src/AuthContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { logout } = useAuth();

  const handleToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex justify-center py-4" style={{ background: 'linear-gradient(to right, #141414, #222222)' }}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
        <div className="md:hidden">
            <button onClick={handleToggle}>
              <span className="hamburger"></span>
            </button>
            <p> </p>
          </div>
         
          <nav className={`md:flex md:items-center md:justify-between ${isMobileMenuOpen ? "block" : "hidden"}`}>
            
            <NavLink to="/" activeClassName="active" className="nav-link">home</NavLink>
            <NavLink to="/attendance" activeClassName="active" className="nav-link">attendance</NavLink>
            <NavLink to="/manager" activeClassName="active" className="nav-link">manager</NavLink>
            <button onClick={logout} className="nav-link">logout</button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
