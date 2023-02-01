/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import RightNavigationAbove from '../../components/Navigation/RightNavigationAbove';
import RightNavigationBelow from '../../components/Navigation/RightNavigationBelow';

function culture() {
  return (
    <>
      <div className="grid grid-flow-row laptop:grid-flow-col">
        <RightNavigationAbove />
        <div>
          <ul className="flex border-b border-gray-400 w-full">
            {/* <li className="px-5  py-1.5">Overview</li>
            <li className="px-5 py-1.5 ">Our Work</li> */}
            <li className="px-5 py-1.5 border-b-4 border-blue-600 font-bold">
              Culture
            </li>
            {/* <li className="px-5 py-1.5">Leadership</li> */}
          </ul>
          <div className="py-6 grid gap-y-4">
            <div className="grid gap-y-2">
              <h4 className="text-xl font-bold">
                Our culture is what makes WWT a great place to work for all
              </h4>
              <p className="leading-relaxed  text-justify">
                Our culture is the foundation of who we are, how we act and how
                we treat others. It is built atop our vision, mission, core
                values and leadership philosophies, and enables us to deliver
                positive outcomes for our customers, partners and communities
                around the globe.
              </p>
            </div>

            <p className=" leading-relaxed  text-justify">
              The success we've experienced over the last three decades is a
              direct result of our culture of grit and determination, and the
              courage to do the right thing. We embrace change and adopt a
              spirit of innovation that makes that change count.
            </p>

            <div className="grid grid-cols-12 mt-2 gap-x-4 gap-y-6 items-start">
              <div className="col-span-12 tablet:col-span-6 laptop:col-span-4 grid gap-y-4 ">
                <i className="fa-solid fa-eye text-3xl text-cyan-600"></i>
                <p>
                  <b>Vision</b>: To be the best technology solution provider in
                  the world.
                </p>
              </div>
              <div className="col-span-12 tablet:col-span-6 laptop:col-span-4 grid gap-y-4">
                <i className="fa-solid fa-bullseye text-3xl text-cyan-600"></i>
                <p>
                  <b>Mission</b>: To create a profitable growth company that is
                  also a great place to work for all.
                </p>
              </div>
              <div className="col-span-12 tablet:col-span-6 laptop:col-span-4 grid gap-y-4">
                <i className="fa-solid fa-ranking-star text-3xl text-cyan-600"></i>
                <p>
                  <b>Core Values</b>: The foundation of who we are, how we treat
                  people and how we run our business.
                </p>
              </div>
            </div>
          </div>

          <div className="py-6 grid gap-y-2">
            <h4 className="text-xl font-bold">
              Where does our culture come from?
            </h4>
            <p className=" leading-relaxed  text-justify">
              Our ability to make a positive impact on our people, communities
              and customers is directly related to our culture and leadership
              philosophies, collectively known as our Integrated Management and
              Leadership (IML) program.
            </p>
          </div>

          <img src="/images/MicrosoftTeams-image 78.webp" alt="" />

          <div className="py-6 grid gap-y-2">
            <h4 className="text-xl font-bold">Our history</h4>
            <p className=" leading-relaxed  text-justify">
              Founded in 1990, World Wide Technology (WWT) is a global systems
              integrator with $14.5 billion in annual revenue that provides
              digital strategy, innovative technology and supply chain solutions
              to large public and private organizations.
            </p>
            <p className=" leading-relaxed  text-justify">
              Based in St. Louis, WWT employs approximately 8,000 people and
              operates over 4 million square feet of warehousing, distribution
              and integration space in more than 20 facilities throughout the
              world. Our commitment to and relentless focus on our people,
              customers, partners, culture and core values has stood the test of
              time -- and is as relevant today as ever before.
            </p>
          </div>
        </div>
        <RightNavigationBelow />
      </div>
    </>
  );
}

export default culture;