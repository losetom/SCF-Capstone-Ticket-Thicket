import { useContext } from "react";
import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar/NavBar";
import { UserContext } from "../context/UserProvider";
import "./CSS/Home.css";
// import NavBar from './NavBar/NavBar'

function Home({darkMode}) {
  const { user } = useContext(UserContext);

  return (
    <>
      <div className="home" style={{backgroundColor: darkMode ? "black" : "white" }}>
        {/* <NavBar /> */}
        {/* <img src='https://static.vecteezy.com/system/resources/previews/003/284/622/non_2x/retro-ticket-in-vintage-style-vector.jpg'></img> */}
        <h1>Welcome {user.username}!</h1>
        <div style={{color: "blue"}}>
            <h3>
                Buy, Sell, and Trade Millions of Tickets For Almost Any Live Event!
            </h3>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Home;
