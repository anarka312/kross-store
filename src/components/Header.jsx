import React from 'react';
import logo from './assets/logo/logo.svg'
import { FaShoppingCart, FaHeart, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-white text-black py-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
        {/* Логотип и текст */}
        <div className="flex items-start">
          <img src={logo} alt="KROSS STORE Logo" className="w-16 h-16 mr-4" />
          <div className="flex flex-col">

          <h1 className="text-2xl font-semibold">KROSS STORE</h1>
          <p className="text-sm text-gray-400">Магазин лучших кроссовок</p>
          </div>
        </div>

        {/* Меню */}
        <nav className="flex space-x-8 items-center text-gray-600">
          <div className="flex items-center space-x-2">
            <FaShoppingCart className="text-xl" />
            <span className="hidden md:inline">Цена</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaHeart className="text-xl" />
            <span className="hidden md:inline">Закладки</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaUser className="text-xl" />
            <span className="hidden md:inline">Профиль</span>
          </div>
        </nav>
      </div>
      <hr className="border-t-1 border-gray-300 mt-11" />
    </header>
  );
};

export default Header;
