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
        description="Accelerate your organization&#x27;s path to a global connectivity architecture that enforces security, encourages productivity and enhances user experience."
        title="Networking - Services - Realverse Cloud"
      />
      <div className="grid grid-flow-row laptop:grid-flow-col page-padding">
        <CategoryNavigationAbove
          text="Networking"
          desc="Accelerate your organization's path to a global connectivity architecture that enforces security, encourages productivity and enhances user experience."
        />
        <div>
          <ul className="flex border-b border-gray-400 w-full">
            <Link href="/category/networking/overview">
              <li className="px-5 py-1.5">Overview</li>
            </Link>
            <li className="px-5 border-b-4 border-sky-700 font-bold py-1.5">
              Services
            </li>
          </ul>
          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">Networking Services</h4>
            <p className=" leading-relaxed  ">
              Accelerate your journey to a global connectivity architecture.
            </p>
          </div>

          <div className="py-10">
            <CallToAction
              text="Consult with a cloud expert today."
              buttonText="Contact Us"
            />
          </div>
        </div>
        <CategoryNavigationBelow
          text="Networking"
          desc="Accelerate your organization's path to a global connectivity architecture that enforces security, encourages productivity and enhances user experience."
        />
      </div>
    </>
  );
}

export default services;
