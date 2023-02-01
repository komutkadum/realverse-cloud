import React from 'react';
import Footer from './Footer';

function MainContent() {
  return (
    // <!-- main content -->
    <main class="left-0 tablet:left-[70px] desktop:left-56 absolute overflow-y-scroll top-14 text-gray-800 right-0 bottom-0 pt-10 px-5 tablet:py-10">
      <div class="grid grid-flow-row laptop:grid-flow-col">
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
        <div>
          <ul class="flex border-b border-gray-400 w-full">
            {/* <!-- <li class="px-5  py-1.5">Overview</li>
                    <li class="px-5 py-1.5 ">Our Work</li>
                    <li class="px-5 py-1.5 ">Culture</li> --> */}
            <li class="px-5 py-1.5 border-b-4 border-blue-600 font-bold">
              Leadership
            </li>
          </ul>
          <div class="py-6 grid gap-y-4">
            <div class="grid gap-y-2">
              <h4 class="text-xl font-bold">
                Strong leadership is what matters most.
              </h4>
              <p class="leading-relaxed text-justify">
                Our leaders at every level of the organization are critical to
                our long-term success, starting at the top with our executive
                leadership team and permeating throughout our company. We are
                committed to maintaining a world-class leadership program for
                our employees that is built on a foundation of trust and
                inclusivity.
              </p>
            </div>
            <div class="grid grid-cols-12 mt-2 gap-4">
              <div class="grid col-span-4 gap-y-2">
                <img
                  src="images/Dave Steward 1_400x400.webp"
                  class="rounded-md"
                  alt=""
                />
                <div>
                  <h1 class="text-2xl font-extrabold r-font">Akshay Mishra</h1>
                  <h3 class="text-gray-600">Founder & Director</h3>
                </div>
              </div>
              <div class="grid col-span-4 gap-y-2">
                <img
                  src="images/Jim Kavanaugh_400x400.webp"
                  class="rounded-md"
                  alt=""
                />
                <div>
                  <h1 class="text-2xl font-extrabold r-font">Akshay Mishra</h1>
                  <h3 class="text-gray-600">Founder & Director</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <aside class="px-14 sticky top-0 self-start w-96 hidden laptop:grid gap-y-4">
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
      </div>

      <div>
        <hr class="h-1.5 my-32 mb-20 bg-gradient-to-r from-red-600 to-blue-600" />
        <Footer />
      </div>
    </main>
  );
}

export default MainContent;
