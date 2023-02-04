/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';
import RightNavigationAbove from '../../components/Navigation/RightNavigationAbove';
import RightNavigationBelow from '../../components/Navigation/RightNavigationBelow';
import AboutNavigation from '../../components/utility/AboutNavigation';

function leadership() {
  return (
    <>
      <div className="grid grid-flow-row laptop:grid-flow-col">
        <RightNavigationAbove />
        <div>
          <AboutNavigation />
          <div className="py-6 grid gap-y-4">
            <div className="grid gap-y-2">
              <h4 className="text-2xl font-bold">
                Strong leadership is what matters most.
              </h4>
              <p className="leading-relaxed text-justify">
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
                  className="rounded-md"
                  alt="akshay mishra"
                  width={400}
                  height={400}
                />
                <div>
                  <h1 className="text-2xl font-extrabold r-font">
                    Akshay Mishra
                  </h1>
                  <h3 className="text-gray-600">Founder & Director</h3>
                </div>
              </div>
              <div className="grid justify-center col-span-12 tablet:col-span-6 laptop:col-span-4 gap-y-2">
                <Image
                  src="/images/kadumkomut.jpeg"
                  className="rounded-md"
                  alt="kadum komut"
                  width={400}
                  height={400}
                />
                <div>
                  <h1 className="text-2xl font-extrabold r-font">
                    Kadum Komut
                  </h1>
                  <h3 className="text-gray-600">CTO</h3>
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
