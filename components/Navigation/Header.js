import Image from 'next/image';
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
          <Image
            src="/images/night.png"
            width={40}
            height={40}
            alt="realverse cloud icon"
          />
          <h1>RealverseCloud</h1>
        </div>
        <div className="hidden tablet:inline">
          <button className=" px-3 text-sm bg-button py-1">Log in</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
