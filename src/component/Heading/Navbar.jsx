import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,

  NavBtnLink,
  NavSearch
} from './NavbarElements';
import logo from '../../image/boatroca.svg';


const Navbar = props => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavSearch>
            <input type="text" placeholder="Find car,mobile phone and more..."></input>
          </NavSearch>

          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>

          <NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
        </NavMenu>

      </Nav>
    </>
  );
};

export default Navbar;