import React from "react";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">

      <Router>
          <Routes>
           <Route path="/" element={<NavBar/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
