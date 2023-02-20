import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Header({ navOpen, setNavOpen }) {
  return (
    <header className="">
      <nav className="flex justify-between h-14 px-5 backdrop-opacity-25 w-full z-50 items-center">
        <div className="flex items-center gap-x-2 font-semibold">
          {navOpen ? (
            <i
              className="fa-solid fa-xmark text-lg desktop:text-sm animate__animated animate__rotateIn animate__faster duration-300"
              onClick={() => setNavOpen((prev) => !prev)}
            ></i>
          ) : (
            <i
              className="fa-solid fa-bars text-lg desktop:text-sm animate__animated animate__rotateInDownLeft animate__faster duration-300"
              onClick={() => setNavOpen((prev) => !prev)}
            ></i>
          )}
          <span className="hidden mobile:inline">Menu</span>
        </div>

        <Link href="/">
          <div className="flex items-center text-sm hover:text-primary-blue duration-200 mobilesm:text-xl mobile:text-2xl  font-extrabold rb-font gap-x-2 tracking-wide">
            <Image
              src="/icons/cloud.png"
              width={35}
              height={35}
              alt="realverse cloud icon"
            />
            <h1 className=" flex flex-col mobilesm:flex-row">
              <span>REALVERSE&nbsp;</span>
              <span>CLOUD</span>
            </h1>
          </div>
        </Link>

        <div className="">
          <Link href="/contact-us">
            <button className="hidden tablet:inline px-4 text-sm bg-button py-1.5">
              Contact us
            </button>
            <i className="px-3 py-1.5 border text-sky-600 rounded-lg inline tablet:hidden text-xl fa-solid fa-headset border-sky-500 hover:bg-sky-500 hover:text-white duration-200 animate-pulse"></i>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
