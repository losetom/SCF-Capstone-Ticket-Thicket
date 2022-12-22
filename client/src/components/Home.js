import { useContext } from "react";
import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar/NavBar";
import { UserContext } from "../context/UserProvider";
import "./CSS/Home.css";
import {
  MDBInputGroup,
  MDBInput,
  MDBIcon,
  MDBAlert,
  MDBBtn,
  MDBLabel,
} from "mdb-react-ui-kit";
// import NavBar from './NavBar/NavBar'

function Home({ darkMode }) {
  const { user } = useContext(UserContext);

  return (
    <>
      <div
        className="home"
        style={{
          backgroundColor: darkMode ? "black" : "white",
        }}
      >
        {/* <NavBar /> */}
        {/* <img src='https://static.vecteezy.com/system/resources/previews/003/284/622/non_2x/retro-ticket-in-vintage-style-vector.jpg'></img> */}
        <br></br>

        <h1>Welcome {user.username}!</h1>

        <br></br>

        <h3>
          Buy, Sell, and Trade Millions of Tickets For Almost Live Any Event!
        </h3>
      </div>

      <br></br>

      <div className="search-div">
        <MDBInputGroup className="input-group">
          <MDBInput 
            className="location-bar"
            label="City or Zip Code"
            placeholder="Where?"
          />
          <MDBInput 
            className="date-bar"
            label="Find a Date"
            placeholder="When?"
          />
          <MDBInput
            className="search-bar"
            label="Search"
            placeholder="Search for artists, events, venues, and more!"
          />
          <MDBBtn rippleColor="dark">Search</MDBBtn>
        </MDBInputGroup>

        {/* <MDBAlert
          delay={1000}
          position="top-right"
          autohide
          appendToBody
        >
          Search!
        </MDBAlert> */}
      </div>

      <div className="category-browse">
        <header>
          <b>
            <h3>Browse By Category</h3>
          </b>
        </header>
      </div>

      <br></br>

      <div className="sports-browse">
        <h3>Sports</h3>
      </div>

      <br></br>

      <div className="concerts-browse">
        <h3>Concerts</h3>
      </div>

      <br></br>

      <div className="arts-browse">
        <h3>Arts and Theater</h3>
      </div>

      {/* <div className="home-image">
        <img style={{width: "100%"}} src="https://static.vecteezy.com/system/resources/previews/003/284/622/non_2x/retro-ticket-in-vintage-style-vector.jpg"></img>
      </div> */}
      {/* <Footer /> */}
    </>
  );
}

export default Home;
