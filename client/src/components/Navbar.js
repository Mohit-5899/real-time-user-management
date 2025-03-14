import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">User Management System</Link>
      </div>
      <div className="navbar-menu">
        <Link to="/" className="navbar-item">Home</Link>
        <Link to="/profile" className="navbar-item">Profile</Link>
        <Link to="/map" className="navbar-item">Map</Link>
        <Link to="/analytics" className="navbar-item">Analytics</Link>
        <Link to="/login" className="navbar-item">Login</Link>
        <Link to="/register" className="navbar-item">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;