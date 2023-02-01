import Link from 'next/link';
import React from 'react';

function SideNavigation() {
  return (
    <>
      {/* // header with text */}
      <aside class="invisible desktop:visible px-5 w-56 absolute flex  flex-col text-xs justify-between left-0 top-14 bottom-0 hover:overflow-y-auto ">
        <div class="grid mt-4 gap-y-4">
          <div class="text-sm flex items-center gap-x-2 hover:font-bold cursor-pointer">
            <i class="fa-solid fa-house"></i> Home
          </div>
          <hr class="border-b bg-gray-600" />
          <div class="grid gap-y-4">
            <p class="flex items-center justify-between">
              Solutions and services&nbsp;&nbsp;&nbsp;
              <i class="fa-solid fa-angle-up text-sm"></i>
            </p>
            <ul class="text-sm grid">
              <Link href="/explore/solutions">
                <li class="flex items-center cursor-pointer justify-start gap-x-2  py-3 px-2">
                  <i class="fa-solid fa-gear"></i> Solutions
                </li>
              </Link>
              <Link href="/explore/services">
                <li class="flex items-center cursor-pointer hover:font-bold justify-start gap-x-2 py-3 px-2">
                  <i class="fa-solid fa-users-gear"></i> Services
                </li>
              </Link>
              {/* <!-- <li class="flex items-center cursor-pointer hover:font-bold justify-start gap-x-2 py-3 px-2">
                        <i class="fa-solid fa-industry"></i> Industries
                    </li>
                    <li class="flex items-center cursor-pointer hover:font-bold   justify-start gap-x-2 py-3 px-2">
                        <i class="fa-solid fa-handshake"></i> Partners
                    </li> --> */}
            </ul>
          </div>
          <hr class="border-b bg-gray-600" />
        </div>

        <div>
          <hr class="h-0.5 bg-gray-300" />
          <div class="text-sm py-4 gap-x-2 px-2 flex items-center bg-gray-100 rounded-md text-pink-600 font-bold">
            <Link href="/about/overview">
              <i class="fa-solid fa-info"></i> <span>About</span>
            </Link>
          </div>
          <hr class="h-0.5 bg-gray-300" />
          <ul class="py-4 flex flex-wrap gap-2">
            <li>Careers</li>
            <li>Contact Us</li>
            <li>Diversity & Inclusion</li>
            <li>Locations</li>
            <li>Sustainability</li>
          </ul>
        </div>
      </aside>

      {/* <!-- header without text --> */}
      <aside class="invisible tablet:visible animate__animated animate__fadeIn desktop:invisible px-5 w-16 absolute flex  flex-col text-xs justify-between left-0 top-14 bottom-0 hover:overflow-y-auto ">
        <div class="grid mt-4 gap-y-4">
          <div class="text-sm flex items-center gap-x-2 hover:font-bold cursor-pointer">
            <i class="fa-solid fa-house text-lg"></i>
          </div>
          <hr class="border-b bg-gray-600 mt-2" />
          <div class="grid gap-y-4">
            <ul class="text-sm grid">
              <li class="flex items-center cursor-pointer justify-start gap-x-2  py-3">
                <i class="fa-solid fa-gear text-lg"></i>
              </li>
              <a href="./services.html">
                <li class="flex items-center cursor-pointer hover:font-bold justify-start gap-x-2 py-3">
                  <i class="fa-solid fa-users-gear text-lg"></i>
                </li>
              </a>
            </ul>
          </div>
          <hr class="border-b bg-gray-600" />
        </div>

        <div>
          <hr class="h-0.5 bg-gray-300" />
          <div class="text-sm py-4 gap-x-2 flex items-center  rounded-md text-pink-600 font-bold">
            <i class="fa-solid fa-info text-lg"></i>
          </div>
        </div>
      </aside>
    </>
  );
}

export default SideNavigation;
