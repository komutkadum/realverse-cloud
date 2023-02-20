/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { PageSEO } from '../../../components/SEO';
import CategoryNavigationAbove from '../../../components/utility/CategoryNavigationAbove';
import CategoryNavigationBelow from '../../../components/utility/CategoryNavigationBelow';

function overview() {
  return (
    <>
      <PageSEO
        description="Reduce operational costs, lower the potential for human error and deliver services at scale that support your organization&#x27;s success."
        title="Infrastructure Automation - Overview - Realverse Cloud"
      />
      <div className="grid grid-flow-row laptop:grid-flow-col page-padding">
        <CategoryNavigationAbove
          text="Infrastructure Automation"
          desc="Reduce operational costs, lower the potential for human error and deliver services at scale that support your organization's success."
        />
        <div>
          <ul className="flex border-b border-gray-400 w-full">
            <li className="px-5 border-b-4 border-sky-700 font-bold py-1.5">
              Overview
            </li>
          </ul>
          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">
              What is infrastructure automation?
            </h4>
            <p className=" leading-relaxed  ">
              Infrastructure automation (IA) is the process of reducing the
              number of repetitive and potentially error-prone IT operations
              tasks that strain your resources while limiting your ability to
              scale. Discover how to identify and break down departmental silos,
              automate repetitive workflows, deliver services at scale and
              energize your teams by focusing their time on building processes
              that create IT agility and support your strategic success.
            </p>
          </div>

          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">How do I get started?</h4>
            <p className=" leading-relaxed  ">
              We will support you from learning about infrastructure automation
              through hands-on labs to coming up with an infrastructure
              automation strategy that delivers business value. When it comes
              time to implement and operate automation toolsets, we make sure
              teams have the training they need to succeed.
            </p>
          </div>

          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">Evaluate</h4>
            <p className=" leading-relaxed  ">
              Learn how leading automation toolsets are helping infrastructure
              teams. Then, try them out for yourself. Our hands-on labs and
              demonstrations teach you the fundamentals of automation and show
              you how automation can be applied to various technology domains.
            </p>
          </div>

          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">Design</h4>
            <p className=" leading-relaxed  ">
              We help you create an infrastructure automation strategy. This
              includes identifying business initiatives where automation can add
              the most value and driving out bottlenecks that prevent automation
              projects from getting off the ground.
            </p>
          </div>

          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">Implement</h4>
            <p className=" leading-relaxed  ">
              Whether it's making infrastructure installation easy with
              playbooks, building a CI/CD pipeline, or integrating systems like
              Ansible Tower and ServiceNow, we get you up, running and ready to
              support the business at speed and scale. Plus, SME hours are just
              a click away.
            </p>
          </div>

          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">Operate</h4>
            <p className=" leading-relaxed  ">
              We know you need to quickly skill up but also be self-sufficient
              in operating automation toolsets. That's why we put IT operations
              teams on a training and enablement path. And with ongoing access
              to our labs, learning never has to stop.
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
          text="Infrastructure Automation"
          desc="Reduce operational costs, lower the potential for human error and deliver services at scale that support your organization's success."
        />
      </div>
    </>
  );
}

export default overview;
