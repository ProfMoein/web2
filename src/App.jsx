import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import StudentList from './pages/StudentList';
import StudentDetail from './pages/StudentDetail';

export default function App() {
  return (
    <>
      <Navbar />
      <div className="pt-16"> {/* فاصله برای Navbar ثابت */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/add-student" element={<StudentDetail />} />
        </Routes>
      </div>
    </>
  );
}
