import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import {useRouter} from 'next/router';

 const MyNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand onClick={()=> router.push('/')} 
        className="navbar-logo">Blogger</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>Buy me a beer🍺</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Find me</NavLink>
            </NavItem>
          </Nav>
          <NavbarText className="cursive">Life goes on..</NavbarText>
        </Collapse>
      </Navbar>
    </div>

  )
}
 
export default MyNavbar;