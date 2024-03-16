import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./components/Navbar/Navbar.module.css";
import { StyledEngineProvider } from "@mui/material/styles";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
