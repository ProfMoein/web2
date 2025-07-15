import React from "react";
import "./Component/CenteredShowcase.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentDetail from "./Component/StudentDetail";
import { Home } from "./Component/Home";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students/:id" element={<StudentDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
