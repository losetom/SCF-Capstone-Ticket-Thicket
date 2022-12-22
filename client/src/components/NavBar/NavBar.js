import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import { UserContext } from '../../context/UserProvider';
import "../CSS/NavBar.css"

function NavBar({darkMode, setDarkMode}) {
    const [showBasic, setShowBasic] = useState(false)
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()

    const handleLogoutClick = () => {
        const config = {
            method: "DELETE"
        }
        fetch('/logout', config)
        setUser({ username: "" })
        navigate("/login")
    }

    return (
        <MDBNavbar style={{color: darkMode ? "white" : "black" }} expand='lg' light bgColor={darkMode ? 'dark' : 'light'}>
          <MDBContainer fluid>
            <MDBNavbarBrand style={{color: darkMode ? "white" : "black" }}>TicketThicket</MDBNavbarBrand>
    
            <MDBNavbarToggler
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setShowBasic(!showBasic)}
            >
              <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>
    
            <MDBCollapse navbar show={showBasic}>
              <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                <div style={{
                      // border: "1px solid red",
                      paddingTop: "1%",
                      marginBottom: "1%"
                    }}>
                <MDBNavbarItem >
                  {/* <MDBNavbarLink active aria-current='page'> */}
                    <NavLink to='/' >
                    Home
                    </NavLink>
                  {/* </MDBNavbarLink> */}
                </MDBNavbarItem>
                </div>
                <MDBNavbarItem>
                  <MDBNavbarLink href='logout' tabIndex={-1} aria-disabled='true' onClick={handleLogoutClick}></MDBNavbarLink>
                </MDBNavbarItem>
    
                <MDBNavbarItem>
                  <MDBDropdown>
                    <MDBDropdownToggle tag='a' className='nav-link' role='button' style={{color: darkMode ? "white" : "black", marginTop: "5%" }}>
                      More...
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem><NavLink to="/tickets">Tickets</NavLink></MDBDropdownItem>
                      {/* <MDBDropdownItem link>Sell Tickets</MDBDropdownItem> */}
                      <MDBDropdownItem onClick={handleLogoutClick}><NavLink to="/logout">Logout</NavLink></MDBDropdownItem>
                      <MDBDropdownItem><NavLink to="/tickets/new">New Ticket</NavLink></MDBDropdownItem>
                      <MDBDropdownItem><NavLink to="/myaccount">My Account</NavLink></MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>

                <MDBNavbarItem className="about-link">
                    <NavLink>
                      About
                    </NavLink>
                </MDBNavbarItem>

                <MDBNavbarItem className='services-link'>
                    <NavLink>
                      Services
                    </NavLink>
                </MDBNavbarItem>

                <MDBNavbarItem className='contact-link'>
                    <NavLink>
                      Contact Us
                    </NavLink>
                </MDBNavbarItem>

                
    
              </MDBNavbarNav>
    
              {/* <form className='d-flex input-group w-auto'>
                <input type='search' className='form-control' placeholder='Search for artist, events, or venues...' aria-label='Search' />
                <MDBBtn color='primary'>Search</MDBBtn>
              </form> */}

              
            </MDBCollapse>
            <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
          </MDBContainer>
        </MDBNavbar>
      );
}
// https://static.vecteezy.com/system/resources/previews/003/284/622/non_2x/retro-ticket-in-vintage-style-vector.jpg
export default NavBar