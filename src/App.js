import React from "react";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from "./Components/MainPage/MainPage";
import EventForm from "./Components/EventCreation/EventForm";


function App() {
  return (
    <div className="App">

      <Router>
          <Routes>
           <Route path="/" element={<MainPage/>}/>
           <Route path="/manage/event" element={<EventForm/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
