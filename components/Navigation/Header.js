import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Header({ navOpen, setNavOpen }) {
  return (
    <nav className="flex justify-between h-14 px-5 w-full z-50 items-center">
      <div className="flex items-center gap-x-2 font-semibold">
        {navOpen ? (
          <i
            className={`fa-solid fa-xmark text-lg desktop:text-sm animate__animated animate__rotateIn animate__faster duration-300`}
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
            className="border shadow-2xl border-primary-blue/40 p-1 rounded bg-gradient-to-r to-sky-300 from-pink-200"
          />
          <h1 className=" flex flex-col mobilesm:flex-row">
            <span>REALVERSE&nbsp;</span>
            <span>CLOUD</span>
          </h1>
        </div>
      </Link>

      <div className="flex items-center">
        {/* <div class="relative inline-block w-10 mr-4 align-middle select-none">
            <input
              type="checkbox"
              name="toggle"
              id="Pink"
              className="checked:bg-black hover:checked:bg-black focus:outline-none right-4 checked:right-0 duration-200 focus:ring-transparent focus:ring-offset-0 focus:checked:bg-black ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            />
            <label
              for="Pink"
              className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
            ></label>
          </div> */}
        <Link href="/contact-us" aria-label="contact us">
          <button className="hidden tablet:inline px-4 text-sm bg-button py-1.5">
            <i className="fa-solid fa-headset"></i>&nbsp;&nbsp;Contact us
          </button>
          <i className="px-3 py-1.5 border text-sky-600 rounded-lg inline tablet:hidden text-xl fa-solid fa-headset border-sky-500 hover:bg-sky-500 hover:text-white duration-200 animate-pulse"></i>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
