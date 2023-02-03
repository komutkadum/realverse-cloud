import React from 'react';

function Header({ navOpen, setNavOpen }) {
  return (
    <header className="">
      <nav className="flex justify-between h-14 px-5 backdrop-opacity-25 w-full z-50 items-center">
        <div className="flex items-center gap-x-2 font-semibold">
          {navOpen ? (
            <i
              className="fa-regular fa-rectangle-xmark text-lg desktop:text-sm animate__animated animate__fadeIn duration-300"
              onClick={() => setNavOpen((prev) => !prev)}
            ></i>
          ) : (
            <i
              className="fa-solid fa-bars text-lg desktop:text-sm animate__animated animate__fadeIn duration-300"
              onClick={() => setNavOpen((prev) => !prev)}
            ></i>
          )}
          <span className="hidden mobile:inline">Menu</span>
        </div>
        <div className="flex items-center text-xl mobile:text-2xl  font-extrabold r-font gap-x-1 tracking-wide">
          <img src="/images/night.png" className="w-10 h-10" alt="" />
          <h1>Realverse Cloud</h1>
        </div>
        <div className="hidden tablet:inline">
          <button className=" px-3 rounded-md bg-button py-1.5">Login</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
