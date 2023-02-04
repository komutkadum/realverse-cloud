/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React from 'react';

function services() {
  return (
    <>
      <h1 className="text-4xl pb-6">Explore</h1>
      <ul className="flex border-b border-gray-400 w-full">
        <Link href="/explore/solutions#top">
          <li className="px-5  py-1.5">Solutions</li>
        </Link>
        <li className="px-5 py-1.5 border-b-4 border-sky-600 font-bold">
          Services
        </li>
        {/* <!-- <li className="px-5 py-1.5">Industries</li>
            <li className="px-5 py-1.5">Partners</li> --> */}
      </ul>
      <p className="py-6 leading-relaxed  text-justify">
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
            href="/service/consulting-services/overview#top"
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
            href="/service/infrastructure-services/overview#top"
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

      <hr className="h-px bg-sky-400 my-16" />

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
