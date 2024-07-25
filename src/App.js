import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Pages/Home/NavBar';
import Home from "./Pages/Home/Homescreen"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fas, fass, fasds, faTwitter, faFontAwesome, faHatCowboy, faHatChef, faPlateUtensils)

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}>

            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
