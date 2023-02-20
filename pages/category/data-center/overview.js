/* eslint-disable react/no-unescaped-entities */
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
            <p className=" leading-relaxed">
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

          <ThreeColumn title="Data Center Topics">
            <ThreeColumnContent
              href="/topic/data-protection/overview"
              bgImage="/bgImages/data-protection.webp"
              title="Data Protection"
              content="Eliminate complexity across physical, virtual and cloud
              storage tiers."
            />
            <ThreeColumnContent
              href="/topic/facilities-infrastructure/overview"
              bgImage="/bgImages/facilities-infrastructure.webp"
              title="Facilities Infrastructure"
              content="Turn-key assessment and installation services designed to
              ensure facilities are operating at optimal effieciency."
            />
            <ThreeColumnContent
              href="/topic/hyper-converged-infrastructure/overview"
              bgImage="/bgImages/hyper-converged-infrastructure.webp"
              title="Converged & Hyper-Converged Infrastructure"
              content="Seamless integrate compute, storage, networking and
              infrastructure managed software into one optimization"
            />
            <ThreeColumnContent
              href="/topic/server-infrastructure/overview"
              bgImage="/bgImages/server-infrastructure.webp"
              title="Server Infrastructure"
              content="The foundation that holds It/ICT systems together. It
              includeds physical and virtual resources."
            />
          </ThreeColumn>
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
