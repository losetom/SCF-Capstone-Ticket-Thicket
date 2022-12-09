import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me")
      .then((r) => r.json())
      .then((data) => setUser(data.count));
  }, []);

  return (
      <div className="App">
        <Routes>
          <Route path="/testing" element={<div>Testing</div>} />
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
  );
}

export default App;