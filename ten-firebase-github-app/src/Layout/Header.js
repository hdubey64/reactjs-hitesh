import React, { useState, useContext, useEffect } from "react";
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
   const context = useContext(UserContext);

   const [isOpen, setIsOpen] = useState(false);

   const toggle = () => setIsOpen(!isOpen);

   useEffect(() => {
      console.log("log: context asd", context);
   }, [context]);

   return (
      <Navbar color="info" ligh expand="md">
         {" "}
         <NavbarBrand>
            <Link to="/" className="text-white">
               LCO gitfire App
            </Link>
         </NavbarBrand>
         <NavbarText className="text-white">
            {context?.user?.email ? context?.user?.email : ""}
         </NavbarText>
         <NavbarToggler onClick={toggle} />
         <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto">
               {context?.user ? (
                  <NavItem>
                     <NavLink tag={Link} to="/" className="text-white">
                        Logout
                     </NavLink>
                  </NavItem>
               ) : (
                  <>
                     <NavItem>
                        <NavLink tag={Link} to="/signup" className="text-white">
                           Sign Up
                        </NavLink>
                     </NavItem>
                     <NavItem>
                        <NavLink tag={Link} to="/signin" className="text-white">
                           Sign In
                        </NavLink>
                     </NavItem>
                  </>
               )}
            </Nav>
         </Collapse>
      </Navbar>
   );
};

export default Header;
