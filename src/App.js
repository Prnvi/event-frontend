import React from "react";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./Components/NavBar";
import EventForm from "./Components/EventCreation/EventForm";

function App() {
  return (
    <div className="App">

      <Router>
          <Routes>
           <Route path="/" element={<NavBar/>}/>
           <Route path="/manage/event" element={<EventForm/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
