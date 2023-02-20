/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React from 'react';
import ThreeColumn, {
  ThreeColumnContent,
} from '../../../components/layout/ThreeColumn';
import { PageSEO } from '../../../components/SEO';
import CallToAction from '../../../components/utility/CallToAction';
import CategoryNavigationAbove from '../../../components/utility/CategoryNavigationAbove';
import CategoryNavigationBelow from '../../../components/utility/CategoryNavigationBelow';

function overview() {
  return (
    <>
      <PageSEO
        description="Learn about automated infrastructure, platforms and operations."
        title="Automation & Orchestration - Overview - Realverse Cloud"
      />
      <div className="grid grid-flow-row laptop:grid-flow-col page-padding">
        <CategoryNavigationAbove
          text="Automation & Orchestration"
          desc="Learn about automated infrastructure, platforms and operations."
        />
        <div>
          <ul className="flex border-b border-gray-400 w-full">
            <li className="px-5 border-b-4 border-sky-700 font-bold py-1.5">
              Overview
            </li>
            <Link href="/category/automation-and-orchestration/services">
              <li className="px-5 py-1.5">Services</li>
            </Link>
          </ul>
          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">Automate everything right</h4>
            <p className=" leading-relaxed  ">
              Organizations across every industry are looking to automation to
              give their business a competitive advantage. In many cases,
              automation is already underway with multiple grassroots efforts.
            </p>
            <p className=" leading-relaxed my-2 ">
              But how do you connect siloed automation projects to a scalable
              automation strategy that drives business outcomes?
            </p>
            <p className=" leading-relaxed  ">
              It's tempting to try to automate everything.
            </p>
            <p className=" leading-relaxed  ">
              However, we've found that the secret to success is to automate
              everything right. This means prioritizing the correct things to
              automate and then automating them correctly.
            </p>
          </div>
          <CallToAction
            text="Learn the secrets to success"
            buttonText="View Now"
          />
          <ThreeColumn title="Topics">
            <ThreeColumnContent
              href="/topic/devops/overview"
              bgImage="/bgImages/devops.webp"
              title="DevOps"
            />
            <ThreeColumnContent
              href="/topic/infrastructure-automation/overview"
              bgImage="/bgImages/infrastructure-automation.webp"
              title="Infrastructure Automation"
            />
          </ThreeColumn>
        </div>
        <CategoryNavigationBelow
          text="Automation & Orchestration"
          desc="Learn about automated infrastructure, platforms and operations."
        />
      </div>
    </>
  );
}

export default overview;
