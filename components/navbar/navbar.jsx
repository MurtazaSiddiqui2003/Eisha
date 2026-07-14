"use client";
import Image from 'next/image'

// Images
import logo from '../../assets/img/logo1.png';
// CSS
import './navbar.css'


import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar-wrapper">
      <div className="navbar-container">
        
        {/* Brand Anchor */}
            <a href='/'><Image src={logo} alt="LOG  O" Height='50px' Width='auto' id='logo' /></a>
        {/* <a href="/" className="nav-brand">
          THREADLAB
        </a> */}

        {/* Global Catalog Navigation links */}
        <div className="nav-links-group">
          <a href="/" className="nav-link">Home</a>
          <a href="/products" className="nav-link">Shop Collection</a>
          <a href="/about" className="nav-link" style={{ opacity: 0.5, pointerEvents: 'none' }}>About</a>
        </div>

        {/* Action Widgets */}
        <div className="nav-actions">
          
          <a href="/cart" className="cart-icon-btn">
            <span>Bag</span>
            <span className="cart-counter-bubble">2</span>
          </a>

          <a href="/admin" className="admin-portal-link">
            Admin Panel
          </a>

        </div>

      </div>
    </nav>
  );
}