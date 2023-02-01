import React from 'react';

function Header() {
  return (
    <header class="">
      <nav class="flex justify-between h-14 px-5 backdrop-opacity-25 w-full z-50 items-center">
        <div class="flex items-center gap-x-2 font-semibold">
          <i class="fa-solid fa-bars text-lg desktop:text-sm"></i>
          <span>Menu</span>
        </div>
        <div class="flex items-center text-2xl font-extrabold r-font gap-x-1 tracking-wide">
          <img src="/images/night.png" class="w-10 h-10" alt="" />
          <h1>Realverse Cloud</h1>
        </div>
        <div class="invisible">
          <button class=" px-3 rounded bg-blue-600 hover:bg-blue-700 text-white py-1.5">
            Login
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
