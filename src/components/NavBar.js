import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import '../App.css';

const NavBar = () => (
  <nav className="panel-bg nav">
    <ul className="navbar">
      <li className="logo nav-item">
        Bookstore CMS
      </li>
      <li className="nav-item">
        BOOKS
      </li>
      <li className="nav_category nav-item">
        CATEGORIES
      </li>
    </ul>
    <PersonIcon className="Oval Mask" />
  </nav>
);

export default NavBar;
