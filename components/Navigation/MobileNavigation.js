/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

function MobileNavigation({
  navOpen,
  firstAccordion,
  secondAccordion,
  setFirstAccordion,
  setSecondAccordion,
}) {
  return (
    <ul
      className={`w-full  duration-700 scroll-hidden ease-in-out text-sm flex-col gap-y-4 px-3 pt-5 bg-white overflow-y-scroll absolute  ${
        navOpen ? 'left-0' : '-left-[200%]'
      } flex`}
    >
      <li>
        <Link href="/" className="flex px-2 items-center">
          {/* <i className="fa-solid fa-house"></i> */}
          <img src="/icons/home.png" alt="home icon" className="w-5 h-5" />
          &nbsp;&nbsp;&nbsp;Home
        </Link>
      </li>
      <hr className="h-[1.2px] bg-neutral-500" />
      <li className="text-xs px-2">Solutions & Services</li>
      <li>
        <ul className="grid">
          <li
            className="flex px-2 items-center rounded-t-md justify-between bg-gray-200 text-pink-600 font-bold py-3"
            onClick={() => setFirstAccordion((prev) => !prev)}
          >
            <span>
              <img
                src="/icons/solutions.png"
                width={18}
                height={18}
                alt="solutions icon"
                className=" inline"
              />
              &nbsp;&nbsp;&nbsp;Solutions
            </span>
            <i className="fa-solid fa-angle-down text-right"></i>
          </li>
          {firstAccordion && (
            <>
              <Link href="/category/automation-and-orchestration/overview">
                <li className="bg-gray-200 px-2 py-4 font-thin text-gray-700">
                  Automation & Orchestration
                </li>
              </Link>
              <Link href="/category/cloud/overview">
                <li className="bg-gray-200 px-2 py-4 font-thin text-gray-700">
                  Cloud
                </li>
              </Link>
              <Link href="/category/data-center/overview">
                <li className="bg-gray-200 px-2 py-4 font-thin text-gray-700">
                  Data Center
                </li>
              </Link>
              <Link href="/category/networking/overview">
                <li className="bg-gray-200 px-2 py-4 font-thin text-gray-700">
                  Networking
                </li>
              </Link>
              <Link href="/explore/solutions">
                <li className="bg-gray-200 px-2 py-4 font-medium rounded-b-md text-blue-500">
                  See all Solutions&nbsp;&nbsp;
                  <i className="fa-solid fa-angle-right"></i>
                </li>
              </Link>
            </>
          )}
          <li
            className={`flex px-2 mt-1 items-center justify-between  py-3 ${
              secondAccordion && 'bg-gray-200'
            }`}
            onClick={() => setSecondAccordion((prev) => !prev)}
          >
            <span>
              {/* <i className="fa-solid  fa-users-gear"></i> */}
              <img
                src="/icons/services.png"
                width={20}
                height={20}
                alt="services icon"
                className=" inline"
              />
              &nbsp;&nbsp;&nbsp;Services
            </span>
            <i className="fa-solid fa-angle-down text-right"></i>
          </li>
          {secondAccordion && (
            <>
              <Link href="/service/consulting-services/overview">
                <li className="bg-gray-200 px-2 py-4 font-thin text-gray-700">
                  Consulting Services
                </li>
              </Link>
              <Link href="/service/infrastructure-services/overview">
                <li className="bg-gray-200 px-2 py-4 font-thin text-gray-700">
                  Infrastructure Services
                </li>
              </Link>
              <Link href="/explore/services">
                <li className="bg-gray-200 px-2 py-4 font-medium rounded-b-md text-blue-500">
                  See all Services&nbsp;&nbsp;
                  <i className="fa-solid fa-angle-right"></i>
                </li>
              </Link>
            </>
          )}
        </ul>
      </li>
      <hr className="h-[2px] bg-neutral-500" />
      <Link href="/about/overview">
        <li className="flex px-2 items-center">
          {/* <i className="fa-solid fa-hashtag"></i> */}
          <img
            src="/icons/about.png"
            alt="about icon"
            className="w-4 h-4 inline"
          />
          &nbsp;&nbsp;&nbsp;
          <span>About</span>
        </li>
      </Link>
      <hr className="h-[1.5px] bg-neutral-500" />
      <li>
        <ul className="py-4 flex text-xs text-gray-900 font-thin px-2 flex-wrap gap-y-3 gap-x-6">
          <li>Careers</li>
          <li>
            <Link href="/contact-us">Contact Us</Link>
          </li>
          <li>Diversity & Inclusion</li>
          <li>Locations</li>
          <li>Sustainability</li>
        </ul>
      </li>
    </ul>
  );
}

export default MobileNavigation;
