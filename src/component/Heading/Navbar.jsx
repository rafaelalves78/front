import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,

  NavBtnLink,

} from './NavbarElements';
import logo from '../../image/boatroca.svg';

import Search from '../Search'


const Navbar = props => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <Bars />
        <NavMenu>

          <Search />
          <NavLink to='/signup' activeStyle>
            Sign Up
          </NavLink>

          <NavBtnLink to='/login'>Sign In</NavBtnLink>
        </NavMenu>

      </Nav>
    </>
  );
};

export default Navbar;