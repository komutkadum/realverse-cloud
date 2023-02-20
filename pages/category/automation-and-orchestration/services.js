/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React from 'react';
import { PageSEO } from '../../../components/SEO';
import CallToAction from '../../../components/utility/CallToAction';
import CategoryNavigationAbove from '../../../components/utility/CategoryNavigationAbove';
import CategoryNavigationBelow from '../../../components/utility/CategoryNavigationBelow';

function services() {
  return (
    <>
      <PageSEO
        description="Learn about automated infrastructure, platforms and operations."
        title="Automation & Orchestration - Services - Realverse Cloud"
      />
      <div class="grid grid-flow-row laptop:grid-flow-col page-padding">
        <CategoryNavigationAbove
          text="Automation & Orchestration"
          desc="Learn about automated infrastructure, platforms and operations."
        />
        <div>
          <ul className="flex border-b border-gray-400 w-full">
            <Link href="/category/automation-and-orchestration/overview#top">
              <li className="px-5 py-1.5">Overview</li>
            </Link>
            <li className="px-5 border-b-4 border-sky-700 font-bold py-1.5">
              Services
            </li>
          </ul>
          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">Automate everything right</h4>
            <p className=" leading-relaxed  ">
              We help organizations close the gap between automation projects
              and automation strategy. From consulting services to technology
              deployment to training, our clients scale automation across the
              business while achieving wins at the team level.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-y-4 gap-x-4 mb-8">
            {/* <!-- grid --> */}
            <div className="col-span-12 mobile:col-span-6 tabletxl:col-span-4 flex items-start justify-center gap-x-2">
              <i className="fa-brands fa-react text-3xl text-sky-800"></i>
              <div className="grid gap-y-1.5 leading-relaxed">
                <h3 className="text-lg">Plan</h3>
                <p>
                  Establish a scalable automation strategy that maps business
                  value with technology to align with a target outcome.
                </p>
                <a href="#" className="group inline-flex">
                  Learn more&nbsp;
                  <i className="fa-solid fa-circle-chevron-right duration-200 text-sky-700 text-lg group-hover:translate-x-1"></i>
                </a>
              </div>
            </div>

            <div className="col-span-12 mobile:col-span-6 tabletxl:col-span-4 flex items-start justify-center gap-x-2">
              <i className="fa-solid fa-wand-magic-sparkles text-3xl text-sky-800"></i>
              <div className="grid gap-y-1.5 leading-relaxed">
                <h3 className="text-lg">Implement</h3>
                <p>
                  Quickly perform proofs of concept and validate integrated
                  architectures in our leading-edge Advanced Technology Center.
                </p>
                <a href="#" className="group inline-flex">
                  Learn more&nbsp;
                  <i className="fa-solid fa-circle-chevron-right duration-200 text-sky-700 text-lg group-hover:translate-x-1"></i>
                </a>
              </div>
            </div>

            <div className="col-span-12 mobile:col-span-6 tabletxl:col-span-4 flex items-start justify-center gap-x-2">
              <i className="fa-solid fa-industry text-3xl text-sky-800"></i>
              <div className="grid gap-y-1.5 leading-relaxed">
                <h3 className="text-lg">Enable</h3>
                <p>
                  Empower your IT teams with skills-specific training classes
                  and ongoing mentorship to master automation.
                </p>
                <a href="#" className="group inline-flex">
                  Learn more&nbsp;
                  <i className="fa-solid fa-circle-chevron-right duration-200 text-sky-700 text-lg group-hover:translate-x-1"></i>
                </a>
              </div>
            </div>

            <div className="col-span-12 mobile:col-span-6 tabletxl:col-span-4 flex items-start justify-center gap-x-2">
              <i className="fa-solid fa-handshake text-3xl text-sky-800"></i>
              <div className="grid gap-y-1.5 leading-relaxed">
                <h3 className="text-lg">Execute</h3>
                <p>
                  Accelerate your organization with workflow design and
                  delivery, agile development, and co-development sprints.
                </p>
                <a href="#" className="group inline-flex">
                  Learn more&nbsp;
                  <i className="fa-solid fa-circle-chevron-right duration-200 text-sky-700 text-lg group-hover:translate-x-1"></i>
                </a>
              </div>
            </div>
          </div>

          <CallToAction
            text="Get in touch with an automation expert"
            buttonText="Contact Us"
          />
        </div>
        <CategoryNavigationBelow
          text="Automation & Orchestration"
          desc="Learn about automated infrastructure, platforms and operations."
        />
      </div>
    </>
  );
}

export default services;
