import React, { useContext, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Button
} from 'reactstrap';
import {useRouter} from 'next/router';
import {ThemeContext} from '../../context/theme';

 const MyNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const toggle = () => setIsOpen(!isOpen);
  const {theme,isLight, setIsLight} = useContext(ThemeContext);
  return (
    <div>
      <Navbar color={isLight?"light":"dark"}  expand="md">
        <NavbarBrand onClick={()=> router.push('/')} 
        className={`navbar-logo text-${isLight?"dark":"light"}`}>Blogger</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className={`text-${isLight?"dark":"muted"}`}>Buy me a beer🍺</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={`text-${isLight?"dark":"muted"}`}>Find me</NavLink>
            </NavItem>
          </Nav>
         <Button onClick={()=>{
           setIsLight(!isLight);
         }} color={isLight?"dark":"light"}>{isLight?"dark":"light"} Mode</Button>
        </Collapse>
      </Navbar>
      <style jsx>
        {
          `
            .navbar-logo{
              color:${theme.headingColor}
            }
          `
        }
      </style>
    </div>

  )
}
 
export default MyNavbar;