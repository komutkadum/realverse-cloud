/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { PageSEO } from '../../../components/Seo';
import CategoryNavigationAbove from '../../../components/utility/CategoryNavigationAbove';
import CategoryNavigationBelow from '../../../components/utility/CategoryNavigationBelow';

function overview() {
  return (
    <>
      <PageSEO
        description="Combining people, processes and technology to enable the continuous delivery of value to end users."
        title="DevOps - Overview - Realverse Cloud"
      />
      <div class="grid grid-flow-row laptop:grid-flow-col page-padding">
        <CategoryNavigationAbove
          text="DevOps"
          desc="Combining people, processes and technology to enable the continuous delivery of value to end users."
        />
        <div>
          <ul className="flex border-b border-gray-400 w-full">
            <li className="px-5 border-b-4 border-sky-600 font-bold py-1.5">
              Overview
            </li>
          </ul>
          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">What is DevOps?</h4>
            <p className=" leading-relaxed  text-justify">
              DevOps is a combination of cultural philosophies, methodologies,
              infrastructure and tools aimed at improving an organization's
              ability to deliver applications and services with greater
              efficiency and agility.
            </p>
            <p className="leading-relaxed text-justify mt-4">
              DevOps methodologies can improve the engineering processes for any
              organization, regardless of the environment in which your
              applications and services run. Whether you're an infrastructure,
              software development, operations or security engineer, learn how
              DevOps methodologies can help your teams deliver services with
              speed, stability and availability. Organizations that iterate and
              deliver quickly are better able to experiment with ways to
              increase customer adoption and satisfaction while pivoting when
              necessary.
            </p>
          </div>

          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">Why WWT for DevOps?</h4>
            <p className=" leading-relaxed  text-justify">
              WWT is the unique partner who can offer infrastructure design,
              deployment automation and software consulting services all under
              one roof. Our DevOps experts can help your infrastructure,
              development and operations teams adopt sustainable DevOps
              capabilities that enable the delivery of new services with speed,
              stability and availability.
            </p>
            <p className="leading-relaxed text-justify mt-4">
              Our Advanced Technology Center (ATC) allows clients to test and
              validate DevOps solutions in a safe and scalable environment. Once
              validated, WWT's DevOps practitioners assist clients in the
              adoption of proven DevOps methodologies and solutions that have
              been linked to high-performing teams and successful market
              disruption.
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
          text="DevOps"
          desc="Combining people, processes and technology to enable the continuous delivery of value to end users."
        />
      </div>
    </>
  );
}

export default overview;
