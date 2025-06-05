import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <h1><a href="/" className='logo'>ALKAN</a></h1>
      <nav>
        <ul className="nav-links">
          <li><a href="/links">links</a></li>
          <li><a href="/blogs">blogs</a></li>
          <li><a href="/posts">posts</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
