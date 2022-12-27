import React, { useState, useContext } from "react";
import {
   Collapse,
   Navbar,
   NavbarToggler,
   NavbarBrand,
   Nav,
   NavItem,
   NavLink,
   NavbarText,
} from "reactstrap";

import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const Header = () => {
    const context = useContext{UserContext}

    const
       return (
      <Navbar color="info" ligh expand="md">
         {" "}
         <NavbarBrand>
            <Link to="/" className="text-white">
               LCO gitfire App
            </Link>
         </NavbarBrand>
         <NavbarToggler />
         <Collapse navbar>
            <Nav className="ms-auto">
               <NavItem>
                  <NavLink tag={Link} to="/" className="text-white">
                     Sign In
                  </NavLink>
               </NavItem>
               <NavItem>
                  <NavLink tag={Link} to="/" className="text-white">
                     Sign Up
                  </NavLink>
               </NavItem>
               <NavItem>
                  <NavLink tag={Link} to="/" className="text-white">
                     Logout
                  </NavLink>
               </NavItem>
            </Nav>
         </Collapse>
      </Navbar>
   );
};

export default Header;
