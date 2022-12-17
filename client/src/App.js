import { useContext } from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./context/UserProvider";
import Home from "./components/Home";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import TicketCardContainer from "./components/TicketCardContainer";
import NewTicket from "./components/NewTicket";
import MyAccount from "./components/MyAccount";
import Footer from "./components/Footer";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const { onUserLogin, errors, user, setUser } = useContext(UserContext);
  const [darkMode, setDarkMode] = useState(false)

  // useEffect(() => {
  //   fetch("/tickets")
  //     .then((r) => r.json())
  //     .then((data) => console.log(data));
  // }, [])

  return (
    <>
      {user.username.length === 0 ? null : <NavBar darkMode = {darkMode} setDarkMode={setDarkMode}/>}
      <div className="App">
        <Routes>
          <Route path="/" element={<Home user={user} darkMode={darkMode} />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/tickets" element={<TicketCardContainer />} />
          <Route path="/tickets/new" element={<NewTicket />} />
          <Route path="/myaccount" element={<MyAccount />} />
          {/* <Route path="/events" element={<h1>Events....</h1>} />
          <Route path="/artists" element={<h1>Artists...</h1>} /> */}
        </Routes>
      </div>
      {user.username.length === 0 ? null : <Footer />}
    </>
  );
}

export default App;
