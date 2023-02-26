/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import CustomLink from '../utility/CustomLink';

function SideNavigation() {
  const [sidebarAccordion, setSideBarAccordion] = useState(true);
  const router = useRouter();
  return (
    <>
      {/* // header with text */}
      <aside className="invisible desktop:visible rb-font tracking-wide scroll-hidden px-5 w-56 absolute flex flex-col text-xs justify-between left-0 top-14 bottom-0 hover:overflow-y-auto ">
        <div className="grid mt-4 gap-y-4 relative">
          <Link href="/">
            <div
              className={`text-sm flex items-center gap-x-2 link cursor-pointer ${
                router.pathname == '/' && 'active-link'
              }`}
            >
              <img src="/icons/home.png" alt="home icon" className="w-4 h-4" />{' '}
              Home
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
                } py-3 link hover:no-underline`}
                onClick={() => setSideBarAccordion((prev) => !prev)}
              >
                <span className="grid grid-flow-col items-center gap-x-2">
                  <img
                    src="/icons/solutions.png"
                    alt="solutions icon"
                    className="w-4 h-4"
                  />{' '}
                  Solutions{' '}
                </span>
                <i
                  className={`fa-solid fa-angle-${
                    sidebarAccordion ? 'up' : 'down'
                  } text-sm`}
                ></i>
              </li>
              <ul
                className={`${
                  sidebarAccordion ? 'grid' : 'hidden'
                } text-[13px]`}
              >
                <li
                  className={`bg-zinc-100 px-2 py-2 font-thin ${
                    [
                      '/category/automation-and-orchestration/overview',
                      '/category/automation-and-orchestration/services',
                    ].indexOf(router.pathname) !== -1
                      ? 'active-link'
                      : 'text-gray-600'
                  }`}
                >
                  <CustomLink
                    text="Automation & Orchestration"
                    href="/category/automation-and-orchestration/overview"
                  />
                </li>

                <li
                  className={`bg-zinc-100 px-2 py-2 font-thin ${
                    [
                      '/category/cloud/overview',
                      '/category/cloud/services',
                    ].indexOf(router.pathname) !== -1
                      ? 'active-link'
                      : 'text-gray-600'
                  }`}
                >
                  <CustomLink href="/category/cloud/overview" text="Cloud" />
                </li>
                <li
                  className={`bg-zinc-100 px-2 py-2 font-thin ${
                    router.pathname == '/category/data-center/overview'
                      ? 'active-link'
                      : 'text-gray-600'
                  }`}
                >
                  <CustomLink
                    href="/category/data-center/overview"
                    text="Data Center"
                  />
                </li>
                <li
                  className={`bg-zinc-100 px-2 py-2 font-thin ${
                    [
                      '/category/networking/overview',
                      '/category/networking/services',
                    ].indexOf(router.pathname) !== -1
                      ? 'active-link'
                      : 'text-gray-600'
                  }`}
                >
                  <CustomLink
                    href="/category/networking/overview"
                    text="Networking"
                  />
                </li>

                <li className="bg-zinc-100 px-2 py-2 font-bold rounded-b-md text-sky-700">
                  <Link
                    href="/explore/solutions"
                    className="group link-underline-animation-top"
                  >
                    See all Solutions&nbsp;&nbsp;
                    <i className="fa-solid fa-angle-right group-hover:translate-x-2 duration-300"></i>
                    <div className="link-underline-animation-body"></div>
                  </Link>
                </li>
              </ul>

              <li
                className={`flex items-center cursor-pointer hover:font-bold justify-between gap-x-2 ${
                  router.pathname == '/explore/services' ? 'active-link' : ''
                } py-3  font-bold link hover:no-underline`}
                onClick={() => setSideBarAccordion((prev) => !prev)}
              >
                <span className="grid grid-flow-col items-center gap-x-[6px]">
                  {/* <i className="fa-solid fa-users-gear"></i> */}
                  <img
                    src="/icons/services.png"
                    width={20}
                    height={20}
                    alt="services icon"
                  />{' '}
                  Services
                </span>
                <i
                  className={`fa-solid fa-angle-${
                    !sidebarAccordion ? 'up' : 'down'
                  } text-sm`}
                ></i>
              </li>

              <ul
                className={`${
                  sidebarAccordion ? 'hidden' : 'grid'
                } text-[13px]`}
              >
                <li
                  className={`bg-zinc-100 px-2 py-2 font-thin ${
                    router.pathname == '/service/consulting-services/overview'
                      ? 'active-link'
                      : 'text-gray-600'
                  }`}
                >
                  <CustomLink
                    href="/service/consulting-services/overview"
                    text="Consulting Services"
                  />
                </li>

                <li
                  className={`bg-zinc-100 px-2 py-2 font-thin ${
                    router.pathname ==
                    '/service/infrastructure-services/overview'
                      ? 'active-link'
                      : 'text-gray-600'
                  }`}
                >
                  <CustomLink
                    href="/service/infrastructure-services/overview"
                    text="Infrastructure Services"
                  />
                </li>

                <li className="bg-zinc-100 px-2 py-2 font-bold  rounded-b-md text-sky-700">
                  <Link
                    href="/explore/services"
                    className="group link-underline-animation-top"
                  >
                    See all Services&nbsp;&nbsp;
                    <i className="fa-solid fa-angle-right group-hover:translate-x-2 duration-300"></i>
                    <div className="link-underline-animation-body"></div>
                  </Link>
                </li>
              </ul>
            </ul>
          </div>
          <hr className="border-b bg-gray-600" />
        </div>

        <div>
          <hr className="border-b bg-gray-300" />
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
              } link flex gap-x-2 items-center`}
            >
              {/* <i className="fa-solid fa-hashtag"></i> */}
              <img
                src="/icons/about.png"
                alt="about icon"
                className="w-4 h-4 inline"
              />{' '}
              About Us
            </Link>
          </div>
          <hr className="border-b bg-gray-300" />
          <ul className="py-4 flex flex-wrap gap-2">
            <li>Careers</li>
            <CustomLink text="Contact Us" href="/contact-us" />
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
          <hr className="border-b bg-gray-300" />
          <div className="text-sm py-4 gap-x-2 flex items-center  rounded-md text-pink-600 font-bold">
            <i className="fa-solid fa-info text-lg"></i>
          </div>
        </div>
      </aside>
    </>
  );
}

export default SideNavigation;
