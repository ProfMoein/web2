import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-10">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-6">
        {/* لوگو یا عنوان سایت */}
        <div className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
          <Link to="/">Web2 Intro</Link>
        </div>


        {/* دکمه منو در حالت موبایل */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900">
            {menuOpen ? '❌' : '🍔'}
          </button>
        </div>

        {/* لینک‌های منو در نسخه دسکتاپ و در حالت باز شدن */}
        <div className={`md:flex space-x-6 ${menuOpen ? 'block' : 'hidden'} md:block`}>
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            صفحه اصلی
          </Link>
          <Link
            to="/students"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            لیست دانشجویان
          </Link>
          <Link
            to="/add-student"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            افزودن دانشجو
          </Link>
        </div>
      </div>
    </nav>
  );
}
