import React from 'react';

function RightNavigationAbove() {
  return (
    <aside class=" w-full grid laptop:hidden gap-y-4 mb-16">
      <h1 class="text-2xl">Why Realverse Cloud</h1>
      <div>
        <button class="border px-3 text-xs py-1.5 rounded-md font-bold tracking-wider bg-sky-600 text-white">
          <i class="fa-solid fa-wifi"></i> Follow
        </button>
      </div>
      <p>We play a vital role in changing the world for the better.</p>
      <hr class="border-b bg-gray-600" />
      <div class="flex gap-x-6 text-xl px-4">
        <div>
          <i class="fa-brands fa-linkedin cursor-pointer hover:text-blue-500 duration-300"></i>
        </div>
        <div>
          <i class="fa-brands fa-twitter cursor-pointer hover:text-sky-400 duration-300"></i>
        </div>
        <div>
          <i class="fa-brands fa-facebook cursor-pointer hover:text-blue-600 duration-300"></i>
        </div>
        <div>
          <i class="fa-brands fa-youtube cursor-pointer hover:text-red-600 duration-300"></i>
        </div>
        <div>
          <i class="fa-brands fa-instagram cursor-pointer hover:text-orange-600 duration-300"></i>
        </div>
      </div>
      <hr class="border-b bg-gray-600" />
    </aside>
  );
}

export default RightNavigationAbove;