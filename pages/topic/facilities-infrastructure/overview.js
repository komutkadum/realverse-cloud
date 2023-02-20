/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { PageSEO } from '../../../components/SEO';
import CategoryNavigationAbove from '../../../components/utility/CategoryNavigationAbove';
import CategoryNavigationBelow from '../../../components/utility/CategoryNavigationBelow';

function overview() {
  return (
    <>
      <PageSEO
        description="Turn-key assessment and installation services designed to ensure facilities are operating at optimal efficiency and can support organizational growth needs."
        title="Facilities Infrastructure - Overview - Realverse Cloud"
      />
      <div class="grid grid-flow-row laptop:grid-flow-col page-padding page-padding">
        <CategoryNavigationAbove
          text="Facilities Infrastructure"
          desc="Turn-key assessment and installation services designed to ensure facilities are operating at optimal efficiency and can support organizational growth needs."
        />
        <div>
          <ul className="flex border-b border-gray-400 w-full">
            <li className="px-5 border-b-4 border-sky-700 font-bold py-1.5">
              Overview
            </li>
          </ul>
          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">
              What is facilities infrastructure?
            </h4>
            <p className=" leading-relaxed  ">
              Facilities infrastructure comprises six distinct disciplines --
              power, cooling, space management, cabling, safety and containers.
              Ensure your facilities and legacy infrastructure are operating at
              optimal efficiency, and that they're prepared to support the
              demands of tomorrow's more dynamic infrastructure.
            </p>
          </div>

          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">Get started today</h4>
            <p className=" leading-relaxed  ">
              Don't see what you're looking for or want to learn more?
            </p>
            <div>
              <button className="px-6 py-3 bg-button">Contact us</button>
            </div>
          </div>
        </div>
        <CategoryNavigationBelow
          text="Facilities Infrastructure"
          desc="Turn-key assessment and installation services designed to ensure facilities are operating at optimal efficiency and can support organizational growth needs."
        />
      </div>
    </>
  );
}

export default overview;
