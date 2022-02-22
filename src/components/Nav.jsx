import React from 'react';
import SearchBar from './SearchBar.jsx';
import logo from '../img/favicon.png'
import './Nav.css';
import { Link } from 'react-router-dom'

function Nav({ onSearch }) {
      return (
            <div>
                  <nav className='navbar'>
                        <div className='nav_section'>
                              <Link to="/">
                                    <img src={logo} alt="logo" className='logo' />
                                    <p>Weather App</p>
                              </Link>
                              <Link to="/about">
                                    <span>About</span>
                              </Link>
                        </div>

                        <div className='nav_section'>
                              <SearchBar onSearch={onSearch} />
                        </div>

                  </nav >
            </div >
      );
};

export default Nav;
