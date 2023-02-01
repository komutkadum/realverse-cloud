import Link from 'next/link';
import React from 'react';

function SideNavigation() {
  return (
    <>
      {/* // header with text */}
      <aside className="invisible desktop:visible px-5 w-56 absolute flex  flex-col text-xs justify-between left-0 top-14 bottom-0 hover:overflow-y-auto ">
        <div className="grid mt-4 gap-y-4">
          <div className="text-sm flex items-center gap-x-2 hover:font-bold cursor-pointer">
            <i className="fa-solid fa-house"></i> Home
          </div>
          <hr className="border-b bg-gray-600" />
          <div className="grid gap-y-4">
            <p className="flex items-center justify-between">
              Solutions and services&nbsp;&nbsp;&nbsp;
              <i className="fa-solid fa-angle-up text-sm"></i>
            </p>
            <ul className="text-sm grid">
              <Link href="/explore/solutions">
                <li className="flex items-center cursor-pointer hover:font-bold justify-start gap-x-2  py-3 link">
                  <i className="fa-solid fa-gear"></i> Solutions
                </li>
              </Link>
              <Link href="/explore/services">
                <li className="flex items-center cursor-pointer hover:font-bold justify-start gap-x-2 py-3 link">
                  <i className="fa-solid fa-users-gear"></i> Services
                </li>
              </Link>
            </ul>
          </div>
          <hr className="border-b bg-gray-600" />
        </div>

        <div>
          <hr className="h-0.5 bg-gray-300" />
          <div className="text-sm py-4 gap-x-2 flex items-center rounded-md text-pink-600 font-bold">
            <Link href="/about/overview">
              <i className="fa-solid fa-hashtag"></i> <span>About</span>
            </Link>
          </div>
          <hr className="h-0.5 bg-gray-300" />
          <ul className="py-4 flex flex-wrap gap-2">
            <li>Careers</li>
            <Link href="/contact-us" className="link">
              <li>Contact Us</li>
            </Link>
            <li>Diversity & Inclusion</li>
            <li>Locations</li>
            <li>Sustainability</li>
          </ul>
        </div>
      </aside>

      {/* <!-- header without text --> */}
      <aside className="invisible tablet:visible animate__animated animate__fadeIn desktop:invisible px-5 w-16 absolute flex  flex-col text-xs justify-between left-0 top-14 bottom-0 hover:overflow-y-auto ">
        <div className="grid mt-4 gap-y-4">
          <div className="text-sm flex items-center gap-x-2 hover:font-bold cursor-pointer">
            <i className="fa-solid fa-house text-lg"></i>
          </div>
          <hr className="border-b bg-gray-600 mt-2" />
          <div className="grid gap-y-4">
            <ul className="text-sm grid">
              <li className="flex items-center cursor-pointer justify-start gap-x-2  py-3">
                <i className="fa-solid fa-gear text-lg"></i>
              </li>
              <a href="./services.html">
                <li className="flex items-center cursor-pointer hover:font-bold justify-start gap-x-2 py-3">
                  <i className="fa-solid fa-hashtag text-lg"></i>
                </li>
              </a>
            </ul>
          </div>
          <hr className="border-b bg-gray-600" />
        </div>

        <div>
          <hr className="h-0.5 bg-gray-300" />
          <div className="text-sm py-4 gap-x-2 flex items-center  rounded-md text-pink-600 font-bold">
            <i className="fa-solid fa-info text-lg"></i>
          </div>
        </div>
      </aside>
    </>
  );
}

export default SideNavigation;
