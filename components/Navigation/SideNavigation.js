import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

function SideNavigation() {
  const [sidebarAccordion, setSideBarAccordion] = useState(true);
  const router = useRouter();

  return (
    <>
      {/* // header with text */}
      <aside className="invisible desktop:visible scroll-hidden px-5 w-56 absolute flex  flex-col text-xs justify-between left-0 top-14 bottom-0 hover:overflow-y-auto ">
        <div className="grid mt-4 gap-y-4 relative">
          <Link href="/">
            <div className="text-sm flex items-center gap-x-2 link cursor-pointer">
              <i className="fa-solid fa-house"></i> Home
            </div>
          </Link>
          <hr className="border-b bg-gray-600" />
          <div className="grid gap-y-4">
            <p className="flex items-center justify-between">
              Solutions and services&nbsp;&nbsp;&nbsp;
            </p>
            <ul className="text-sm grid">
              <li
                className={`flex items-center cursor-pointer hover:font-bold justify-between gap-x-2 ${
                  router.pathname == '/explore/solutions' ? 'active-link' : ''
                } py-3 link`}
                onClick={() => setSideBarAccordion((prev) => !prev)}
              >
                <span className="grid grid-flow-col items-center gap-x-2">
                  <i className="fa-solid fa-gear"></i> Solutions{' '}
                </span>
                <i
                  className={`fa-solid fa-angle-${
                    sidebarAccordion ? 'up' : 'down'
                  } text-sm`}
                ></i>
              </li>
              <ul className={`${sidebarAccordion ? 'grid' : 'hidden'}`}>
                <li
                  className={`bg-gray-200 px-2 py-2 font-thin ${
                    [
                      '/category/automation-and-orchestration/overview',
                      '/category/automation-and-orchestration/services',
                    ].indexOf(router.pathname) !== -1
                      ? 'active-link'
                      : 'text-gray-600'
                  }`}
                >
                  <Link
                    href="/category/automation-and-orchestration/overview"
                    className="link"
                  >
                    Automation & Orchestration
                  </Link>
                </li>

                <li
                  className={`bg-gray-200 px-2 py-2 font-thin ${
                    [
                      '/category/cloud/overview',
                      '/category/cloud/services',
                    ].indexOf(router.pathname) !== -1
                      ? 'active-link'
                      : 'text-gray-600'
                  }`}
                >
                  <Link href="/category/cloud/overview" className="link">
                    Cloud
                  </Link>
                </li>
                <li
                  className={`bg-gray-200 px-2 py-2 font-thin ${
                    router.pathname == '/category/data-center/overview'
                      ? 'active-link'
                      : 'text-gray-600'
                  }`}
                >
                  <Link href="/category/data-center/overview" className="link">
                    Data Center
                  </Link>
                </li>
                <li
                  className={`bg-gray-200 px-2 py-2 font-thin ${
                    [
                      '/category/networking/overview',
                      '/category/networking/services',
                    ].indexOf(router.pathname) !== -1
                      ? 'active-link'
                      : 'text-gray-600'
                  }`}
                >
                  <Link href="/category/networking/overview" className="link">
                    Networking
                  </Link>
                </li>

                <li className="bg-gray-200 px-2 py-2 font-medium rounded-b-md text-blue-500">
                  <Link href="/explore/solutions" className="link">
                    See all Solutions&nbsp;&nbsp;
                    <i className="fa-solid fa-angle-right"></i>
                  </Link>
                </li>
              </ul>

              <li
                className={`flex items-center cursor-pointer hover:font-bold justify-between gap-x-2 ${
                  router.pathname == '/explore/services' ? 'active-link' : ''
                } py-3  font-bold link`}
                onClick={() => setSideBarAccordion((prev) => !prev)}
              >
                <span className="grid grid-flow-col items-center gap-x-2">
                  <i className="fa-solid fa-users-gear"></i> Services
                </span>
                <i
                  className={`fa-solid fa-angle-${
                    !sidebarAccordion ? 'up' : 'down'
                  } text-sm`}
                ></i>
              </li>

              <ul className={`${sidebarAccordion ? 'hidden' : 'grid'}`}>
                <li
                  className={`bg-gray-200 px-2 py-2 font-thin ${
                    router.pathname == '/service/consulting-services/overview'
                      ? 'active-link'
                      : 'text-gray-600'
                  }`}
                >
                  <Link
                    href="/service/consulting-services/overview"
                    className="link"
                  >
                    Consulting Services
                  </Link>
                </li>

                <li
                  className={`bg-gray-200 px-2 py-2 font-thin ${
                    router.pathname ==
                    '/service/infrastructure-services/overview'
                      ? 'active-link'
                      : 'text-gray-600'
                  }`}
                >
                  <Link
                    href="/service/infrastructure-services/overview"
                    className="link"
                  >
                    Infrastructure Services
                  </Link>
                </li>

                <li className="bg-gray-200 px-2 py-2 font-medium rounded-b-md text-blue-500">
                  <Link href="/explore/services" className="link">
                    See all Services&nbsp;&nbsp;
                    <i className="fa-solid fa-angle-right"></i>
                  </Link>
                </li>
              </ul>
            </ul>
          </div>
          <hr className="border-b bg-gray-600" />
        </div>

        <div>
          <hr className="h-0.5 bg-gray-300" />
          <div className={`text-sm py-4 gap-x-2 flex items-center rounded-md `}>
            <Link
              href="/about/overview"
              className={`${
                [
                  '/about/overview',
                  '/about/our-work',
                  '/about/culture',
                  '/about/leadership',
                ].indexOf(router.pathname) !== -1
                  ? 'active-link'
                  : ''
              } link `}
            >
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
      <aside className="invisible tablet:visible animate__animated animate__fadeIn desktop:invisible px-5 w-16 absolute flex  flex-col text-xs justify-between left-0 top-14 bottom-0 hover:overflow-y-auto">
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
