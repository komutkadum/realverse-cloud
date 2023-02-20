/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { PageSEO } from '../../../components/SEO';
import CategoryNavigationAbove from '../../../components/utility/CategoryNavigationAbove';
import CategoryNavigationBelow from '../../../components/utility/CategoryNavigationBelow';

function overview() {
  return (
    <>
      <PageSEO
        description="Simplify the process of migrating applications and workloads to the right cloud environment for your business."
        title="Cloud Migration - Overview - Realverse Cloud"
      />
      <div class="grid grid-flow-row laptop:grid-flow-col page-padding">
        <CategoryNavigationAbove
          text="Cloud Migration"
          desc="Simplify the process of migrating applications and workloads to the right cloud environment for your business."
        />
        <div>
          <ul className="flex border-b border-gray-400 w-full">
            <li className="px-5 border-b-4 border-sky-700 font-bold py-1.5">
              Overview
            </li>
          </ul>
          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">
              Cloud migration requires an holistic strategy
            </h4>
            <p className=" leading-relaxed  text-justify">
              Cloud migration occurs when a company moves some or all of its
              data center capabilities to a public, private or hybrid cloud
              operating model. Once the decision to migrate has been made, the
              most difficult challenge is determining what workloads should move
              to the cloud and when. Successful migration requires a
              comprehensive strategy that incorporates your technical
              environment, organizational structure and business goals. Learn
              how to speed time-to-market, simplify and secure apps, accelerate
              innovation and reduce costs.
            </p>
          </div>

          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">Get started today</h4>
            <p className=" leading-relaxed  text-justify">
              Don't see what you're looking for or want to learn more?
            </p>
            <div>
              <button className="px-6 py-3 bg-button">Contact us</button>
            </div>
          </div>
        </div>
        <CategoryNavigationBelow
          text="Cloud Migration"
          desc="Simplify the process of migrating applications and workloads to the right cloud environment for your business."
        />
      </div>
    </>
  );
}

export default overview;
