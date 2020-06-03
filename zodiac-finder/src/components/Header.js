import React from 'react'
import {Link} from 'react-router-dom';

export default function Header() {
    return (
      <div>
        <header className="title">
          <h2>Zodiac Signs</h2>
          <p style={pStyle}>Know Your Zodiac Sign Easily</p>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/about" style={linkStyle}>About</Link>
          
        </header>
      </div>
    );
}

const linkStyle = {
    color: '#fff',
    textDecoratio: 'none',
    fontWeight: 'bold'
}
const pStyle = {
    fontSize: '16px'
}
