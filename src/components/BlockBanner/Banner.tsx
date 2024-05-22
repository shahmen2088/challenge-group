import React from 'react';

export default function Banner() {
  return (
    <div className="flex flex-col items-center  w-full h-[400px]  bg-violet-700 rounded-[70px] shadow-2xl">
      <h2 className="text-7xl py-10 text-white font-black ">Хочу заказать</h2>
      <ul className="w-full flex justify-around ">
        <li className="w-[200px] h-[200px]  bg-[#ffb800] rounded-[30px]">
          САМОКЛЕЙКА
        </li>
        <li className="w-[200px] h-[200px]  bg-[#ffb800] rounded-[30px]">
          БАННЕРЫ
        </li>
        <li className="w-[200px] h-[200px]  bg-[#ffb800] rounded-[30px]">
          ВЫВЕСКИ
        </li>
        <li className="w-[200px] h-[200px]  bg-[#ffb800] rounded-[30px]">
          КОНСТРУКЦИИ
        </li>
        <li className="w-[200px] h-[200px]  bg-[#ffb800] rounded-[30px]">
          СТЕНДЫ
        </li>
      </ul>
    </div>
  );
}
