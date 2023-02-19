/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { PageSEO } from '../../../components/Seo';
import CategoryNavigationAbove from '../../../components/utility/CategoryNavigationAbove';
import CategoryNavigationBelow from '../../../components/utility/CategoryNavigationBelow';

function overview() {
  return (
    <>
      <PageSEO
        description="Seamlessly integrate compute, storage, networking and infrastructure management software into one optimized platform."
        title="Converged &amp; Hyper-Converged Infrastructure - Overview - Realverse Cloud"
      />
      <div class="grid grid-flow-row laptop:grid-flow-col">
        <CategoryNavigationAbove
          text="Converged & Hyper-Converged Infrastructure"
          desc="Seamlessly integrate compute, storage, networking and infrastructure management software into one optimized platform."
        />
        <div>
          <ul className="flex border-b border-gray-400 w-full">
            <li className="px-5 border-b-4 border-sky-600 font-bold py-1.5">
              Overview
            </li>
          </ul>
          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">
              Modernize and simplify your IT operations
            </h4>
            <p className=" leading-relaxed  text-justify">
              Hyper-converged infrastructure (HCI) and converged infrastructure
              (CI) group compute, storage, network and infrastructure management
              software into one optimized platform, helping organization
              streamline systems, reduce costs, accelerate deployments and
              increase resource utilization.
            </p>
            <p className=" leading-relaxed  text-justify mt-4">
              Whether you are just learning about the differences between HCI
              and converged infrastructure, need an environment to quickly
              compare and test solutions, or need help migrating data and
              applications to your platform, we have the resources to accelerate
              your journey.
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
          text="Converged & Hyper-Converged Infrastructure"
          desc="Seamlessly integrate compute, storage, networking and infrastructure management software into one optimized platform."
        />
      </div>
    </>
  );
}

export default overview;
