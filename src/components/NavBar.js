/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import '../App.css';

const NavBar = () => (
  <nav className="panel-bg nav">
    <ul className="navbar">
      <li>
        <a href="#" className="logo">
          Bookstore CMS
        </a>
      </li>
      <li>
        <a>
          BOOKS
        </a>
      </li>
      <li>
        <a>
          CATEGORIES
        </a>
      </li>
    </ul>
    <PersonIcon className="Oval Mask" />
  </nav>
);

export default NavBar;
