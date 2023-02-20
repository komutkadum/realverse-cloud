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
              className="fa-regular fa-circle-xmark text-lg desktop:text-sm animate__animated animate__fadeIn duration-300"
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

        <Link href="/#top">
          <div className="flex items-center text-lg hover:text-primary-blue duration-200 mobilesm:text-xl mobile:text-2xl  font-extrabold r-font gap-x-1 tracking-wide">
            <Image
              src="/icons/cloud.png"
              width={35}
              height={35}
              alt="realverse cloud icon"
            />
            <h1>REALVERSE&nbsp;CLOUD</h1>
          </div>
        </Link>

        <div className="hidden tablet:inline">
          <Link href="/contact-us#top">
            <button className=" px-4 text-sm bg-button py-1.5">
              Contact us
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
