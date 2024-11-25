import React from 'react';
import { FaTimes, FaArrowRight } from 'react-icons/fa';
import kross1 from './assets/cards/kross1.jpg'
import kross2 from './assets/cards/kross2.jpg'
import kross3 from './assets/cards/kross3.jpg'

const CartItem = ({ image, name, price }) => (
  <div className="flex items-center w-[325px] h-[119px] bg-white border border-gray-300 rounded-xl p-2 mb-4">
  
    <img src={image} alt={name} className="w-70 h-70 object-cover rounded-md" />


    <div className="flex-1 ml-4">
      <h3 className="text-sm font-semibold truncate">{name}</h3>
      <span className="text-lg font-bold">{price}</span>
    </div>

    
    <div className="ml-4 text-gray-500 cursor-pointer">
      <FaTimes className="w-5 h-5" />
    </div>
  </div>
);

const Cart = () => {
  return (
    <div className="w-[385px] h-[1190px] bg-gray-50 p-6 rounded-xl shadow-lg relative">
   
      <h2 className="text-3xl font-bold mb-6">Корзина</h2>

     
      <div className="space-y-4 mb-10">
        <CartItem image={kross1} name="Nike Air Max" price="5 999 ₽" />
        <CartItem image={kross2} name="Adidas Ultraboost" price="7 499 ₽" />
        <CartItem image={kross3} name="Puma RS-X" price="6 499 ₽" />
      </div>


      <div className="absolute bottom-0 left-0 right-0 px-6 pb-6">
   
        <div className="flex justify-between items-center mb-4">
          <span>Итого:</span>
          <div className="w-[200px] h-[1px] bg-gray-300 border-dotted"></div>
          <span className="font-semibold">21 498 ₽</span>
        </div>

   
        <div className="flex justify-between items-center mb-4">
          <span>Налог 5%:</span>
          <div className="w-[200px] h-[1px] bg-gray-300 border-dotted"></div>
          <span className="font-semibold">1 074 ₽</span>
        </div>

        
        <button className="w-[325px] h-[55px] bg-[#9DD458] text-white rounded-[18px] flex justify-center items-center">
          Оформить заказ
          <FaArrowRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Cart;
