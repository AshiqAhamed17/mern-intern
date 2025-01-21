import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#333', textAlign: 'center' }}>
      <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
        <li style={{ display: 'inline', marginRight: '15px' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        </li>
        <li style={{ display: 'inline', marginRight: '15px' }}>
          <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
        </li>
        <li style={{ display: 'inline', marginRight: '15px' }}>
          <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;