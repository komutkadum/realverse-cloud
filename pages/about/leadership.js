/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';
import RightNavigationAbove from '../../components/Navigation/RightNavigationAbove';
import RightNavigationBelow from '../../components/Navigation/RightNavigationBelow';
import { PageSEO } from '../../components/SEO';
import AboutNavigation from '../../components/utility/AboutNavigation';

function leadership() {
  return (
    <>
      <PageSEO
        description="We play a vital role in changing the world for the better."
        title="About Us - Leadership - Realverse Cloud"
      />
      <div className="grid grid-flow-row laptop:grid-flow-col page-padding">
        <RightNavigationAbove />
        <div>
          <AboutNavigation />
          <div className="py-6 grid gap-y-4">
            <div className="grid gap-y-2">
              <h4 className="text-2xl font-bold">
                Strong leadership is what matters most.
              </h4>
              <p className="leading-relaxed ">
                Our leaders at every level of the organization are critical to
                our long-term success, starting at the top with our executive
                leadership team and permeating throughout our company. We are
                committed to maintaining a world-className leadership program
                for our employees that is built on a foundation of trust and
                inclusivity.
              </p>
            </div>
            <div className="grid grid-cols-12  mt-2 gap-4">
              <div className="grid justify-center col-span-12 tablet:col-span-6 laptop:col-span-4 gap-y-2">
                <Image
                  src="/images/akshaymishra.jpeg"
                  alt="akshay mishra"
                  width={400}
                  height={400}
                />
                <div className="flex justify-between items-start px-1">
                  <div>
                    <h1 className="text-2xl font-extrabold">Akshay Mishra</h1>
                    <h3 className="text-gray-600 text-sm">
                      Founder & Director
                    </h3>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/akshay-mishra-08085367/?originalSubdomain=in"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-linkedin text-2xl text-sky-700 hover:text-sky-800 cursor-pointer"></i>
                  </a>
                </div>
              </div>
              <div className="grid justify-center col-span-12 tablet:col-span-6 laptop:col-span-4 gap-y-2">
                <Image
                  src="/images/kadumkomut.jpeg"
                  alt="kadum komut"
                  width={400}
                  height={400}
                />
                <div className="flex justify-between items-start px-1">
                  <div>
                    <h1 className="text-2xl font-extrabold">Kadum Komut</h1>
                    <h3 className="text-gray-600 text-sm">CTO</h3>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/kadum-komut-67023012b/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-linkedin text-2xl text-sky-700 hover:text-sky-800 cursor-pointer"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <RightNavigationBelow />
      </div>
    </>
  );
}

export default leadership;
