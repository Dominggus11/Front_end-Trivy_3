import React, { useState } from 'react';
import './header.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function Header(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className='header'>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="me-auto">
          RnD Developer
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="../scanimage/ScanImage.js">Scan Image</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="../misconfiguration/tables.js">
                Misconfiguration
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;