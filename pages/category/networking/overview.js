/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React from 'react';
import ThreeColumn, {
  ThreeColumnContent,
} from '../../../components/layout/ThreeColumn';
import { PageSEO } from '../../../components/SEO';
import CategoryNavigationAbove from '../../../components/utility/CategoryNavigationAbove';
import CategoryNavigationBelow from '../../../components/utility/CategoryNavigationBelow';

function overview() {
  return (
    <>
      <PageSEO
        description="Accelerate your organization&#x27;s path to a global connectivity architecture that enforces security, encourages productivity and enhances user experience."
        title="Networking - Overview - Realverse Cloud"
      />
      <div className="grid grid-flow-row laptop:grid-flow-col page-padding">
        <CategoryNavigationAbove
          text="Networking"
          desc="Accelerate your organization's path to a global connectivity architecture that enforces security, encourages productivity and enhances user experience."
        />
        <div>
          <ul className="flex border-b border-gray-400 w-full">
            <li className="px-5 border-b-4 border-sky-700 font-bold py-1.5">
              Overview
            </li>
            <Link href="/category/networking/services">
              <li className="px-5 py-1.5">Services</li>
            </Link>
          </ul>
          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl header-font font-bold">
              Connecting the distributed enterprise
            </h4>
            <p className=" leading-relaxed  ">
              With users, workloads and devices now everywhere, networking
              leaders must find new ways to enforce security, encourage
              productivity and enhance user experience. We help organizations
              create global connectivity architectures that meet the needs of
              the distributed enterprise.
            </p>
            <div className="grid grid-cols-12 gap-4 items-start mt-2">
              <div className="col-span-12 mobile:col-span-6 laptopxl:col-span-4 grid gap-y-4">
                <i className="fa-solid fa-globe text-2xl "></i>
                <p>
                  Apply consistent networking and security policies across
                  cloud, SaaS and private data center workloads
                </p>
              </div>
              <div className="col-span-12 mobile:col-span-6 laptopxl:col-span-4 grid gap-y-4">
                <i className="fa-solid fa-traffic-light  text-2xl"></i>
                <p>Optimize traffic flows for remote and hybrid work</p>
              </div>
              <div className="col-span-12 mobile:col-span-6 laptopxl:col-span-4 grid gap-y-4">
                <i className="fa-solid fa-building text-2xl "></i>
                <p>
                  Boost employee satisfaction by enabling flexible,
                  collaborative workspaces
                </p>
              </div>
              <div className="col-span-12 mobile:col-span-6 laptopxl:col-span-4 grid gap-y-4">
                <i className="fa-solid fa-gauge text-2xl "></i>
                <p>
                  Gain greater visibility into network performance for faster
                  root-cause analysis
                </p>
              </div>
              <div className="col-span-12 mobile:col-span-6 laptopxl:col-span-4 grid gap-y-4">
                <i className="fa-solid fa-brain text-2xl "></i>
                <p>
                  Train staff on the tools and skills they need to efficiently
                  manage complex networks
                </p>
              </div>
              <div className="col-span-12 mobile:col-span-6 laptopxl:col-span-4 grid gap-y-4">
                <i className="fa-solid fa-check text-2xl "></i>
                <p>
                  Prioritize device connectivity to further innovative business
                  initiatives
                </p>
              </div>
            </div>
          </div>

          <ThreeColumn title="Networking Topics">
            <ThreeColumnContent
              title="Data Center Networking"
              href="/topic/data-center-networking/overview"
              bgImage="/bgImages/data-center-networking.webp"
              content="It provides the connectivity between servers and data for
                    applications critical to the business."
            />
          </ThreeColumn>
        </div>
        <CategoryNavigationBelow
          text="Networking"
          desc="Accelerate your organization's path to a global connectivity architecture that enforces security, encourages productivity and enhances user experience."
        />
      </div>
    </>
  );
}

export default overview;
