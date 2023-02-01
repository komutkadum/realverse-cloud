/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React from 'react';

function services() {
  return (
    <>
      <h1 className="text-4xl pb-6">Explore</h1>
      <ul className="flex border-b border-gray-400 w-full">
        <Link href="/explore/solutions">
          <li className="px-5  py-1.5">Solutions</li>
        </Link>
        <li className="px-5 py-1.5 border-b-4 border-blue-600 font-bold">
          Services
        </li>
        {/* <!-- <li className="px-5 py-1.5">Industries</li>
            <li className="px-5 py-1.5">Partners</li> --> */}
      </ul>
      <p className="py-6 leading-relaxed text-neutral-500 text-justify">
        Our comprehensive services portfolio is designed to help at every stage
        of your journey to digital transformation. From idea to outcome, you
        won't find another partner who combines strategic consulting expertise
        with the ability to seamlessly execute complex IT deployments worldwide.
        Explore the many ways WWT Services can deliver tangible outcomes for
        your business.
      </p>
      <div className="grid gap-y-4">
        <h4 className="text-2xl font-bold">Realverse Cloud Services</h4>
        <div className="grid grid-cols-12 gap-2">
          <Link
            href="/service/consulting-services/overview"
            className="col-span-12 mobile:col-span-6 tabletxl:col-span-4 laptopxl:col-span-3 rounded-md border aspect-w-16 aspect-h-9 bg-red-600 bg-cover bg-no-repeat text-white"
            style={{
              backgroundImage: "url('/images/turn-on-2923046_1920.jpg')",
            }}
          >
            <div className="flex flex-col items-center justify-end group hover:backdrop-blur cursor-pointer">
              <p className="w-full py-2.5 px-4 font-bold transparent-background">
                Consulting Services
              </p>
              <p className="hidden text-sm py-2 px-4 group-hover:block transparent-background animate__animated animate__fadeInUp animate__fast">
                Combining the insights of a traditional consulting firm with the
                ability to execute complex infrastructure solutions.
              </p>
            </div>
          </Link>
          <Link
            href="/service/infrastructure-services/overview"
            className="col-span-12 mobile:col-span-6 tabletxl:col-span-4 laptopxl:col-span-3 rounded-md border aspect-w-16 aspect-h-9 bg-red-600 bg-cover bg-no-repeat text-white"
            style={{
              backgroundImage: "url('/images/businessman-1176006_1920.jpg')",
            }}
          >
            <div className="flex flex-col items-center justify-end group hover:backdrop-blur cursor-pointer">
              <p className="w-full py-2.5 px-4 font-bold transparent-background">
                Infrastructure Services
              </p>
              <p className="hidden py-2 px-4 text-sm transparent-background group-hover:block animate__animated animate__fadeInUp animate__fast">
                Assessing today's technology, designing tommorow's solutions and
                seamlessly deploying critical invest....
              </p>
            </div>
          </Link>
        </div>
      </div>

      <div className="px-4 py-4  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4 lg:py-16">
        <div className="flex flex-col items-start max-w-screen-sm md:flex-row ">
          <a className="mb-4 mr-8">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                ></polygon>
              </svg>
            </div>
          </a>
          <div>
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-800 uppercase">
              New History
            </p>
            <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Cheese on toast tale
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae.
            </p>
          </div>
        </div>
      </div>

      <hr className="h-0.5 bg-gray-300 mb-16" />

      <div className="grid gap-y-12">
        <div className="grid gap-y-4">
          <h4 className="text-2xl font-bold">Consulting Services</h4>
          <div className="grid grid-cols-12 gap-2">
            <div
              className="col-span-12 mobile:col-span-6 tabletxl:col-span-4 laptopxl:col-span-3 rounded-md border aspect-w-16 aspect-h-9 bg-red-600 bg-cover bg-no-repeat text-white"
              style={{
                backgroundImage: "url('/images/devops-3155972_1920.jpg')",
              }}
            >
              <div className="flex flex-col items-center justify-end group hover:backdrop-blur cursor-pointer">
                <p className="w-full py-2.5 px-4 font-bold transparent-background">
                  Cloud Services
                </p>
              </div>
            </div>
            <div
              className="col-span-12 mobile:col-span-6 tabletxl:col-span-4 laptopxl:col-span-3 rounded-md border aspect-w-16 aspect-h-9 bg-red-600 bg-cover bg-no-repeat text-white"
              style={{
                backgroundImage:
                  "url('/images/maxim-hopman-IayKLkmz6g0-unsplash.jpg')",
              }}
            >
              <div className="flex flex-col items-center justify-end group hover:backdrop-blur cursor-pointer">
                <p className="w-full py-2.5 px-4 font-bold transparent-background">
                  Enterprise Architechture Services
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-y-4">
          <h4 className="text-2xl font-bold">Infrastructure Services</h4>
          <div className="grid grid-cols-12 gap-2">
            <div
              className="col-span-12 mobile:col-span-6 tabletxl:col-span-4 laptopxl:col-span-3 rounded-md border aspect-w-16 aspect-h-9 bg-red-600 bg-cover bg-no-repeat text-white"
              style={{
                backgroundImage: "url('/images/wuz-vTBqLytx6SQ-unsplash.jpg')",
              }}
            >
              <div className="flex flex-col items-center justify-end group hover:backdrop-blur cursor-pointer">
                <p className="w-full py-2.5 px-4 font-bold transparent-background">
                  Command Center
                </p>
              </div>
            </div>

            <div
              className="col-span-12 mobile:col-span-6 tabletxl:col-span-4 laptopxl:col-span-3 rounded-md border aspect-w-16 aspect-h-9 bg-red-600 bg-cover bg-no-repeat text-white"
              style={{
                backgroundImage:
                  "url('/images/kabiur-rahman-riyad-YzZJUXjb9aw-unsplash.jpg')",
              }}
            >
              <div className="flex flex-col items-center justify-end group hover:backdrop-blur cursor-pointer">
                <p className="w-full py-2.5 px-4 font-bold transparent-background">
                  Service Delivery Management
                </p>
              </div>
            </div>
            <div
              className="col-span-12 mobile:col-span-6 tabletxl:col-span-4 laptopxl:col-span-3 rounded-md border aspect-w-16 aspect-h-9 bg-red-600 bg-cover bg-no-repeat text-white"
              style={{
                backgroundImage:
                  "url('/images/kabiur-rahman-riyad-YzZJUXjb9aw-unsplash.jpg')",
              }}
            >
              <div className="flex flex-col items-center justify-end group hover:backdrop-blur cursor-pointer">
                <p className="w-full py-2.5 px-4 font-bold transparent-background">
                  IT Managed Services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default services;
