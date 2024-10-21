import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Pages/Home/NavBar';
import Home from "./Pages/Home/Homescreen";
import Artwork from "./Pages/Artwork";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artwork" element={<Artwork />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
