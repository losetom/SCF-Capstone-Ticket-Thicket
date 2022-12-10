import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";

function App() {
  const [user, setUser] = useState({
    username: ""
  });

  useEffect(() => {
    fetch("/me")
      .then((r) => r.json())
      .then((data) => setUser(data));
  }, []);

  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route path="/login" element={<Login  />} />
          <Route path="/tickets" element={<h1>tickets...</h1>} />
          <Route path="/events" element={<h1>Events....</h1>} />
          <Route path="/tickets/new" element={<h1>Post a ticket...</h1>} />
          <Route path="/tickets/edit" element={<h1>Change your ticket...</h1>} />
        </Routes>
      </div>
  );
}

export default App;