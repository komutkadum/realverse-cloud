/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { PageSEO } from '../../../components/SEO';
import CategoryNavigationAbove from '../../../components/utility/CategoryNavigationAbove';
import CategoryNavigationBelow from '../../../components/utility/CategoryNavigationBelow';

function overview() {
  return (
    <>
      <PageSEO
        description="The foundation that holds IT/ICT systems together. Server infrastructure includes physical and virtual resources across hardware, software, network resources and related services."
        title="Server Infrastructure - Overview - Realverse Cloud"
      />
      <div class="grid grid-flow-row laptop:grid-flow-col page-padding">
        <CategoryNavigationAbove
          text="Server Infrastructure"
          desc="The foundation that holds IT/ICT systems together. Server infrastructure includes physical and virtual resources across hardware, software, network resources and related services."
        />
        <div>
          <ul className="flex border-b border-gray-400 w-full">
            <li className="px-5 border-b-4 border-sky-600 font-bold py-1.5">
              Overview
            </li>
          </ul>
          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">
              What is server infrastructure?
            </h4>
            <p className=" leading-relaxed  text-justify">
              Comprised of CPUs, memory, storage and management tools, server
              infrastructure is the backbone of any organization's data center.
              Ensure your servers can accommodate the increasing need to store,
              manage and analyze data.
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
          text="Server Infrastructure"
          desc="The foundation that holds IT/ICT systems together. Server infrastructure includes physical and virtual resources across hardware, software, network resources and related services."
        />
      </div>
    </>
  );
}

export default overview;
