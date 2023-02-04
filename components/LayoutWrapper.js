import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Footer from './Navigation/Footer';
import Header from './Navigation/Header';
import SideNavigation from './Navigation/SideNavigation';
import ScrollToTop from './utility/ScrollToTop';

function LayoutWrapper({ children }) {
  const [navOpen, setNavOpen] = useState(false);
  const [firstAccordion, setFirstAccordion] = useState(false);
  const [secondAccordion, setSecondAccordion] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setNavOpen(false);
    setFirstAccordion(false);
    setSecondAccordion(false);
  }, [router]);

  return (
    <>
      <ScrollToTop />
      <Header navOpen={navOpen} setNavOpen={setNavOpen} />
      <SideNavigation navOpen={navOpen} setNavOpen={setNavOpen} />
      <main className="left-0 tablet:left-[70px] desktop:left-56 absolute overflow-y-scroll top-14 text-gray-800 right-0 bottom-0 pt-10 px-5 tablet:p-10 tablet:px-5 desktop:px-10">
        {/* top div for scrolltotop button */}
        <div id="top" className="-top-10 absolute"></div>
        {children}
        <div>
          <hr className="h-1.5 my-32 mb-20 bg-gradient-to-r from-pink-600 to-sky-600" />
          <Footer />
        </div>
      </main>
      {/* mobile navigation menu */}
      <ul
        className={`w-full h-screen text-sm flex-col gap-y-4 px-3 pt-5 bg-white overflow-y-scroll absolute animate__animated  animate__slideInUp  animate__faster ${
          navOpen ? 'flex' : 'hidden'
        }`}
      >
        <li className="flex px-2 items-center">
          {/* <i className="fa-solid fa-house"></i> */}
          <img src="/icons/home.png" className="w-5 h-5" />
          &nbsp;&nbsp;&nbsp;Home
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
                {/* <i className="fa-solid  fa-gear"></i> */}
                <img
                  src="/icons/solutions.png"
                  width={18}
                  height={18}
                  className=" inline"
                />
                &nbsp;&nbsp;&nbsp;Solutions
              </span>
              <i className="fa-solid fa-angle-down text-right"></i>
            </li>
            {firstAccordion && (
              <>
                <Link href="/category/automation-and-orchestration/overview#top">
                  <li className="bg-gray-200 px-2 py-4 font-thin text-gray-700">
                    Automation & Orchestration
                  </li>
                </Link>
                <Link href="/category/cloud/overview#top">
                  <li className="bg-gray-200 px-2 py-4 font-thin text-gray-700">
                    Cloud
                  </li>
                </Link>
                <Link href="/category/data-center/overview#top">
                  <li className="bg-gray-200 px-2 py-4 font-thin text-gray-700">
                    Data Center
                  </li>
                </Link>
                <Link href="/category/networking/overview#top">
                  <li className="bg-gray-200 px-2 py-4 font-thin text-gray-700">
                    Networking
                  </li>
                </Link>
                <Link href="/explore/solutions#top">
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
                  className=" inline"
                />
                &nbsp;&nbsp;&nbsp;Services
              </span>
              <i className="fa-solid fa-angle-down text-right"></i>
            </li>
            {secondAccordion && (
              <>
                <Link href="/service/consulting-services/overview#top">
                  <li className="bg-gray-200 px-2 py-4 font-thin text-gray-700">
                    Consulting Services
                  </li>
                </Link>
                <Link href="/service/infrastructure-services/overview#top">
                  <li className="bg-gray-200 px-2 py-4 font-thin text-gray-700">
                    Infrastructure Services
                  </li>
                </Link>
                <Link href="/explore/services#top">
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
        <Link href="/about/overview#top">
          <li className="flex px-2 items-center">
            {/* <i className="fa-solid fa-hashtag"></i> */}
            <img src="/icons/about.png" className="w-4 h-4 inline" />
            &nbsp;&nbsp;&nbsp;
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
