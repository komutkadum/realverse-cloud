/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { PageSEO } from '../../../components/SEO';
import CategoryNavigationAbove from '../../../components/utility/CategoryNavigationAbove';
import CategoryNavigationBelow from '../../../components/utility/CategoryNavigationBelow';

function overview() {
  return (
    <>
      <PageSEO
        description="Eliminate complexity across physical, virtual and cloud storage tiers while developing strategies to control data volume growth and streamline how you store, manage and leverage data assets."
        title="Data Protection - Overview - Realverse Cloud"
      />
      <div class="grid grid-flow-row laptop:grid-flow-col page-padding">
        <CategoryNavigationAbove
          text="Data Protection"
          desc="Eliminate complexity across physical, virtual and cloud storage tiers while developing strategies to control data volume growth and streamline how you store, manage and leverage data assets."
        />
        <div>
          <ul className="flex border-b border-gray-400 w-full">
            <li className="px-5 border-b-4 border-sky-700 font-bold py-1.5">
              Overview
            </li>
          </ul>
          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">What is data protection?</h4>
            <p className=" leading-relaxed  ">
              Exponential data growth is a challenge for all organizations.
              Instead of backing up and warehousing cold data, a more holistic
              approach to storage can improve data recovery and facilitate cloud
              data management capabilities via secondary storage. Our data
              protection experts look to eliminate complexity across physical,
              virtual and cloud storage tiers while helping develop strategies
              to control data volume growth and streamline how you store, manage
              and leverage data assets.
            </p>
          </div>

          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">How do I get started?</h4>
            <p className=" leading-relaxed  ">
              We know it's hard to consider the future implications of
              infrastructure decisions when it's often a struggle just to
              maintain your current state. Get the relevant information you need
              to make informed business and technical decisions. Achieve the
              performance you want from new technologies without the headaches
              normally associated with storage transformation.
            </p>
          </div>

          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">Evaluate</h4>
            <p className=" leading-relaxed  ">
              Our storage engagement methodology begins with understanding your
              unique environment and requirements. Our evaluation capabilities
              include in-depth infrastructure assessments, hands-on workshops,
              solution demonstrations and proofs of concept in our ATC -- one of
              the few environments where you test the entire data protection
              stack in one place. We can cut the time it takes you to evaluate
              storage technology from months to weeks or even days.
            </p>
          </div>

          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">Design</h4>
            <p className=" leading-relaxed  ">
              We understand the significant transformation associated with
              modern, software-defined data centers. Our engineers can help you
              develop a client-specific design that simplifies the protection of
              your scale-out environments as they move to the cloud; that
              modernizes your environment through automation and cloud centric
              data management; and that protects mission critical workloads
              while simplifying management and reducing costs.
            </p>
          </div>

          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">Implement</h4>
            <p className=" leading-relaxed  ">
              Once your data protection solution has been designed and
              optimized, we can integrate and accelerate deployment through our
              global network of Integration Centers. Our proven supply chain
              management processes dramatically reduce time it takes to get the
              right IT products with the right configuration to the right places
              around the world. Let us help you implement and administer the
              latest storage technologies with confidence.
            </p>
          </div>

          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">Operate</h4>
            <p className=" leading-relaxed  ">
              Organizations with large IT environments often experience
              unpredictable maintenance bills that are tough to manage. Storage
              enterprise license agreements (ELAs) provide the right to specific
              software titles for a specified capacity. We give you a better way
              to purchase, track and manage your storage investments. By pulling
              in future software purchases, we'll help you take advantage of the
              time value of money.
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
          text="Data Protection"
          desc="Eliminate complexity across physical, virtual and cloud storage tiers while developing strategies to control data volume growth and streamline how you store, manage and leverage data assets."
        />
      </div>
    </>
  );
}

export default overview;
