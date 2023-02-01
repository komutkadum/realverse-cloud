/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React from 'react';
import RightNavigationAbove from '../../components/Navigation/RightNavigationAbove';
import RightNavigationBelow from '../../components/Navigation/RightNavigationBelow';

function ourwork() {
  return (
    <>
      <div className="grid grid-flow-row laptop:grid-flow-col">
        <RightNavigationAbove />
        <div>
          <ul className="flex border-b border-gray-400 w-full">
            <Link href="/about/overview">
              <li className="px-5  py-1.5">Overview</li>
            </Link>
            <li className="px-5 py-1.5 border-b-4 border-blue-600 font-bold">
              Our Work
            </li>
            <Link href="/about/culture">
              <li className="px-5 py-1.5">Culture</li>
            </Link>
            <Link href="/about/leadership">
              <li className="px-5 py-1.5">Leadership</li>
            </Link>
          </ul>
          <div className="py-6 grid gap-y-4">
            <div className="grid gap-y-2">
              <h4 className="text-xl font-bold">
                Disruption is unavoidable and change is hard.
              </h4>
              <p className="leading-relaxed text-justify">
                Every company that embarks on digital transformation experiences
                significant challenges. At those moments, perseverance pays off.
              </p>
            </div>

            <p className=" leading-relaxed   text-justify">
              Our ability to advise and execute, align business and technology,
              and blur the lines between physical and digital simplifies the
              transformation journey. And our track record of doing whatever it
              takes gives you the stamina to see it through -- from beginning to
              end.{' '}
            </p>

            <p className=" leading-relaxed text-justify">
              We create new realities that build a brighter future by:
            </p>

            <div className="grid grid-cols-12 gap-y-4">
              <div className="flex col-span-4 items-start gap-x-4 ">
                <i className="fa-brands fa-react text-4xl"></i>
                <h2 className="text-lg">
                  Building innovative <br />
                  solutions
                </h2>
              </div>
              <div className="flex col-span-4 items-start gap-x-4 ">
                <i className="fa-solid fa-rocket text-4xl"></i>
                <h2 className="text-lg">
                  Driving customer <br />
                  outcomes
                </h2>
              </div>
              <div className="flex col-span-4 items-start gap-x-4 ">
                <i className="fa-solid fa-people-robbery text-4xl"></i>
                <h2 className="text-lg">
                  Improving our <br />
                  communities
                </h2>
              </div>
              <div className="flex col-span-4 items-start gap-x-4 ">
                <i className="fa-solid fa-comments text-4xl"></i>
                <h2 className="text-lg">
                  Inspiring our <br />
                  employees
                </h2>
              </div>
            </div>
          </div>

          <div className="py-6 grid gap-y-4">
            <div>
              <h4 className="text-xl font-bold">
                In a world that is less end to end, we connect everything
                together
              </h4>
              <img src="/images/wwt-venn-diagrams.png" alt="" />
            </div>
            <div className="grid gap-y-2">
              <p className=" leading-relaxed  text-justify">
                Our ambition is to create a brighter future for all. So, our
                most important work benefits our partners and customers as much
                as it does our people and communities across the globe.
              </p>
              <p className=" leading-relaxed  text-justify">
                As a company rooted in delivering outcomes, it's important we be
                able to back these words up with real stories showing how
                combine these worlds, and make a positive impact on the world by
                enabling our clients to do their best work, our partners to make
                the right products and our employees to positively impact the
                communities in which they live.
              </p>
            </div>
          </div>

          <div className="py-6 grid gap-y-2">
            <h4 className="text-xl font-bold">
              Looking for more success stories?
            </h4>
            <p className=" leading-relaxed  text-justify">
              We work with the world's largest companies, service providers and
              government entities to deliver business outcomes that drive value
              through savings and/or profit improvements. See how by clicking on
              a case study below.
            </p>
            <div>
              <button className="px-6 rounded-lg py-3 text-white bg-blue-600 hover:bg-blue-800">
                Access all case studies
              </button>
            </div>
          </div>
        </div>
        <RightNavigationBelow />
      </div>
    </>
  );
}

export default ourwork;
