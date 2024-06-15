import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="/home">Home</a></li>
        <li className="nav-item"><a href="/doctor">Doctor</a></li>
        <li className="nav-item"><a href="/user">User</a></li>
        <li className="nav-item"><a href="/admin">Admin</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
