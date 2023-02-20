/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React from 'react';
import { PageSEO } from '../../../components/SEO';
import CategoryNavigationAbove from '../../../components/utility/CategoryNavigationAbove';
import CategoryNavigationBelow from '../../../components/utility/CategoryNavigationBelow';

function overview() {
  return (
    <>
      <PageSEO
        description="Learn about data protection, facilities infrastructure, hyper-converged infrastructure (HCI), primary storage and server infrastructure."
        title="Data Center - Overview - Realverse Cloud"
      />
      <div className="grid grid-flow-row laptop:grid-flow-col page-padding">
        <CategoryNavigationAbove
          text="Data Center"
          desc="Learn about data protection, facilities infrastructure, hyper-converged infrastructure (HCI), primary storage and server infrastructure."
        />
        <div>
          <ul className="flex border-b border-gray-400 w-full">
            <li className="px-5 border-b-4 border-sky-700 font-bold py-1.5">
              Overview
            </li>
          </ul>
          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">
              Data centers in a modern world
            </h4>
            <p className=" leading-relaxed  text-justify">
              The data center is undergoing radical transformation. Exponential
              data growth, the need to process and deliver data across
              organizations, and an urgent focus on data security, resiliency
              and visibility all require a new approach. Today's data center
              solutions -- in areas such as data protection, hyper-converged
              infrastructure (HCI), primary storage and server infrastructure --
              offer many benefits. From smarter ways to optimize on-premises
              workloads and scale infrastructure, to more strategic ways to
              reduce data center footprints and simplify IT operations.
            </p>
          </div>

          <div className="py-6 grid gap-y-6">
            <h4 className="text-2xl font-bold">Data center topics</h4>

            <div className="grid grid-cols-12 gap-2">
              <Link
                href="/topic/data-protection/overview#top"
                className="col-span-12 mobile:col-span-6 laptopxl:col-span-4 rounded-md border aspect-w-16 aspect-h-9 bg-red-600 bg-cover bg-no-repeat text-white"
                style={{
                  backgroundImage: "url('/images/turn-on-2923046_1920.jpg')",
                }}
              >
                <div className="flex flex-col items-center justify-end group hover:backdrop-blur cursor-pointer">
                  <p className="w-full py-2.5 px-4 font-bold transparent-background">
                    Data Protection
                  </p>
                  <p className="hidden text-sm py-2 px-4 transparent-background group-hover:block animate__animated animate__fadeInUp animate__fast">
                    Eliminate complexity across physical, virtual and cloud
                    storage tiers.
                  </p>
                </div>
              </Link>
              <Link
                href="/topic/facilities-infrastructure/overview#top"
                className="col-span-12 mobile:col-span-6 laptopxl:col-span-4 rounded-md border aspect-w-16 aspect-h-9 bg-red-600 bg-cover bg-no-repeat text-white"
                style={{
                  backgroundImage:
                    "url('/images/businessman-1176006_1920.jpg')",
                }}
              >
                <div className="flex flex-col items-center justify-end group hover:backdrop-blur cursor-pointer">
                  <p className="w-full py-2.5 px-4 font-bold transparent-background">
                    Facilities Infrastructure
                  </p>
                  <p className="hidden text-sm py-2 px-4 transparent-background group-hover:block animate__animated animate__fadeInUp animate__fast">
                    Turn-key assessment and installation services designed to
                    ensure facilities are operating at optimal effieciency.
                  </p>
                </div>
              </Link>
              <Link
                href="/topic/hyper-converged-infrastructure/overview#top"
                className="col-span-12 mobile:col-span-6 laptopxl:col-span-4 rounded-md border aspect-w-16 aspect-h-9 bg-red-600 bg-cover bg-no-repeat text-white"
                style={{
                  backgroundImage:
                    "url('/images/businessman-1176006_1920.jpg')",
                }}
              >
                <div className="flex flex-col items-center justify-end group hover:backdrop-blur cursor-pointer">
                  <p className="w-full py-2.5 px-4 font-bold transparent-background">
                    Converged & Hyper-Converged Infrastructure
                  </p>
                  <p className="hidden text-sm py-2 px-4 transparent-background group-hover:block animate__animated animate__fadeInUp animate__fast">
                    Seamless integrate compute, storage, networking and
                    infrastructure managed software into one optimization
                  </p>
                </div>
              </Link>
              <Link
                href="/topic/server-infrastructure/overview#top"
                className="col-span-12 mobile:col-span-6 laptopxl:col-span-4 rounded-md border aspect-w-16 aspect-h-9 bg-red-600 bg-cover bg-no-repeat text-white"
                style={{
                  backgroundImage:
                    "url('/images/businessman-1176006_1920.jpg')",
                }}
              >
                <div className="flex flex-col items-center justify-end group hover:backdrop-blur cursor-pointer">
                  <p className="w-full py-2.5 px-4 font-bold transparent-background">
                    Server Infrastructure
                  </p>
                  <p className="hidden text-sm py-2 px-4 transparent-background group-hover:block animate__animated animate__fadeInUp animate__fast">
                    The foundation that holds It/ICT systems together. It
                    includeds physical and virtual resources.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <CategoryNavigationBelow
          text="Data Center"
          desc="Learn about data protection, facilities infrastructure, hyper-converged infrastructure (HCI), primary storage and server infrastructure."
        />
      </div>
    </>
  );
}

export default overview;
