import React from 'react';
import { RiSearchLine } from "react-icons/ri";
import heart from './assets/icons/heart.svg'
import plus from './assets/icons/plus.svg'
import kross1 from './assets/cards/kross1.jpg'
import kross2 from './assets/cards/kross2.jpg'
import kross3 from './assets/cards/kross3.jpg'
import kross4 from './assets/cards/kross4.jpg'
import kross5 from './assets/cards/kross5.jpg'
import kross6 from './assets/cards/kross6.jpg'
import kross7 from './assets/cards/kross7.jpg'
import kross8 from './assets/cards/kross8.jpg'
import kross9 from './assets/cards/kross9.jpg'
import kross10 from './assets/cards/kross10.jpg'
import kross11 from './assets/cards/kross11.jpg'
import kross12 from './assets/cards/kross12.jpg'



const ProductCard = ({ image, name, price }) => (
  <div className="relative w-52 h-64 bg-white border border-gray-300 rounded-xl p-4">
    {/* Иконка сердца для закладок в левом верхнем углу */}
    <div className="absolute top-2 left-2 text-gray-500 hover:text-gray-700">
      <img src={heart} alt="" />
    </div>

    {/* Картина обуви */}
    <img src={image} alt={name} className="w-full h-32 object-cover rounded-xl" />
    
    {/* Название */}
    <h3 className="mt-2 text-center text-sm font-normal">{name}</h3>

        {/* Блок с ценой */}
        <div className="relative flex justify-between items-center mt-3">
      {/* Текст "Цена" сверху над ценой */}
      <span className="absolute top-[-10px] left-0 text-sm text-gray-500 uppercase">Цена:</span>
      
      {/* Цена */}
      <span className="text-lg font-bold">{price}</span>
      
      {/* Кнопка добавления в корзину */}
      <button className="rounded-full">
        <img src={plus} alt="" />
      </button>
    </div>
  </div>
);

const MainSection = () => {
  return (
    <div className="bg-white py-8 mt-16">
      {/* Текст "Все кроссовки" и поисковик */}
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Все кроссовки</h2>

        <div className="relative">
          <input
            type="text"
            placeholder="Поиск"
            className="py-2 px-4 pl-10 w-[240px] border border-[#f3f3f3] text-[#c4c4c4] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <RiSearchLine className="absolute left-3 top-2.5 text-gray-500" />
        </div>
      </div>

      {/* Карточки товара */}
      <div className="max-w-screen-xl w-full sm:w-[960px]  mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-[26px]">
    
        <ProductCard image={kross1} name="Мужские Кроссовки Nike Blazer Mid Suede" price="5 999 ₽" />
        <ProductCard image={kross2} name="Мужские Кроссовки Nike Air Max 270" price="7 499 ₽" />
        <ProductCard image={kross3} name="Мужские Кроссовки Nike Blazer Mid Suede" price="6 499 ₽" />
        <ProductCard image={kross4} name="Кроссовки Puma X Aka Boku Future Rider" price="4 999 ₽" />
        <ProductCard image={kross5} name="Мужские Кроссовки Under Armour Curry 8" price="6 299 ₽" />
        <ProductCard image={kross6} name="Мужские Кроссовки Nike Kyrie 7" price="5 499 ₽" />
        <ProductCard image={kross7} name="Мужские Кроссовки Jordan Air Jordan 11" price="3 999 ₽" />
        <ProductCard image={kross8} name="Мужские Кроссовки Nike LeBron XVIII" price="4 499 ₽" />
        <ProductCard image={kross9} name="Мужские Кроссовки Nike Lebron XVIII Low" price="5 199 ₽" />
        <ProductCard image={kross10} name="Мужские Кроссовки Nike Blazer Mid Suede" price="6 499 ₽" />
        <ProductCard image={kross11} name="Кроссовки Puma X Aka Boku Future Rider" price="7 199 ₽" />
        <ProductCard image={kross12} name="Мужские Кроссовки Nike Kyrie Flytrap IV" price="5 799 ₽" />
      </div>
    </div>
  );
};

export default MainSection;
