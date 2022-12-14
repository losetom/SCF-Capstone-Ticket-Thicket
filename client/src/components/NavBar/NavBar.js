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
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import { UserContext } from '../../context/UserProvider';

function NavBar() {
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
        <MDBNavbar expand='lg' light bgColor='light'>
          <MDBContainer fluid>
            <MDBNavbarBrand href='/'>TicketThicket</MDBNavbarBrand>
    
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
                <MDBNavbarItem>
                  <MDBNavbarLink active aria-current='page' href='me'>
                    Home
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='logout' tabIndex={-1} aria-disabled='true' onClick={handleLogoutClick}></MDBNavbarLink>
                </MDBNavbarItem>
    
                <MDBNavbarItem>
                  <MDBDropdown>
                    <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                      More...
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem><Link to="/tickets">Tickets</Link></MDBDropdownItem>
                      {/* <MDBDropdownItem link>Sell Tickets</MDBDropdownItem> */}
                      <MDBDropdownItem onClick={handleLogoutClick}><Link to="/logout">Logout</Link></MDBDropdownItem>
                      <MDBDropdownItem><Link to="/tickets/new">New Ticket</Link></MDBDropdownItem>
                      <MDBDropdownItem><Link to="/myaccount">My Account</Link></MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>
    
              </MDBNavbarNav>
    
              <form className='d-flex input-group w-auto'>
                <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
                <MDBBtn color='primary'>Search</MDBBtn>
              </form>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      );
}
// https://static.vecteezy.com/system/resources/previews/003/284/622/non_2x/retro-ticket-in-vintage-style-vector.jpg
export default NavBar