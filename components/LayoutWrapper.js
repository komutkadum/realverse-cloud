import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Footer from './Navigation/Footer';
import Header from './Navigation/Header';
import SideNavigation from './Navigation/SideNavigation';

function LayoutWrapper({ children }) {
  const [navOpen, setNavOpen] = useState(false);
  const [firstAccordion, setFirstAccordion] = useState(false);
  const [secondAccordion, setSecondAccordion] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setNavOpen(false);
  }, [router]);
  return (
    <>
      <Header navOpen={navOpen} setNavOpen={setNavOpen} />
      <SideNavigation navOpen={navOpen} setNavOpen={setNavOpen} />
      <main className="left-0 tablet:left-[70px] desktop:left-56 absolute overflow-y-scroll top-14 text-gray-800 right-0 bottom-0 pt-10 px-5 tablet:p-10 tablet:px-5 desktop:px-10">
        {children}
        <div>
          <hr className="h-1.5 my-32 mb-20 bg-gradient-to-r from-red-600 to-blue-600" />
          <Footer />
        </div>
      </main>
      <ul
        className={`w-full h-screen text-sm flex-col gap-y-4 px-3 pt-5 bg-white overflow-y-auto fixed animate__animated  animate__bounceInUp animate__fast  ${
          navOpen ? 'flex' : 'hidden'
        }`}
      >
        <li className="flex px-2 items-center">
          <i className="fa-solid fa-house"></i>&nbsp;&nbsp;&nbsp;Home
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
                <i className="fa-solid  fa-gear"></i>&nbsp;&nbsp;&nbsp;Solutions
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
                <i className="fa-solid  fa-users-gear"></i>
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
            <i className="fa-solid fa-hashtag"></i>&nbsp;&nbsp;&nbsp;
            <span>About</span>
          </li>
        </Link>
        <hr className="h-[1.5px] bg-neutral-500" />
        <li>
          <ul className="py-4 flex text-xs text-gray-900 font-thin px-2 flex-wrap gap-y-3 gap-x-6">
            <li>Careers</li>
            <li>Contact Us</li>
            <li>Diversity & Inclusion</li>
            <li>Locations</li>
            <li>Sustainability</li>
          </ul>
        </li>
      </ul>
    </>
  );
}

export default LayoutWrapper;
