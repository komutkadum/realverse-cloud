/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { PageSEO } from '../../../components/SEO';
import CategoryNavigationAbove from '../../../components/utility/CategoryNavigationAbove';
import CategoryNavigationBelow from '../../../components/utility/CategoryNavigationBelow';

function overview() {
  return (
    <>
      <PageSEO
        description="Data center networking provides the connectivity between servers and data for applications critical to the business."
        title="Data Center Networking - Overview - Realverse Cloud"
      />
      <div class="grid grid-flow-row laptop:grid-flow-col page-padding">
        <CategoryNavigationAbove
          text="Data Center Networking"
          desc="Data center networking provides the connectivity between servers and data for applications critical to the business."
        />
        <div>
          <ul className="flex border-b border-gray-400 w-full">
            <li className="px-5 border-b-4 border-sky-700 font-bold py-1.5">
              Overview
            </li>
          </ul>
          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">
              What is data center networking?
            </h4>
            <p className=" leading-relaxed  text-justify">
              Reliable and high-performing data center networking enables
              organizations to provision new services faster, leverage
              automation and orchestration to reduce the cost of ownership,
              empower development teams, and better secure assets through
              enterprise segmentation. Modern data center networks must be
              automated to provide business with the agile services they need.
            </p>
          </div>

          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">How do I get started?</h4>
            <p className=" leading-relaxed  text-justify">
              Data center networks have evolved to consist of both logical and
              physical networks. Simplifying data center operations through
              automation introduces new concepts as well as challenges to
              maintaining security and reliability. WWT can help you assess your
              current environment, then design, build, install and operate the
              optimal data center networking solution to meet your short and
              long-term business goals.
            </p>
          </div>

          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">Evaluate</h4>
            <p className=" leading-relaxed  text-justify">
              Evaluate and learn about the different technologies that make up
              today's modern data centers, software-defined networking (SDN)
              solutions, and automation tools and platforms.
            </p>
          </div>

          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">Design</h4>
            <p className=" leading-relaxed  text-justify">
              Proper underlay (physical network) and overlay (logical network)
              design is crucial to achieving the desired simplicity of modern
              data center networks. You can only achieve data security and
              constant policy by taking a holistic approach that removes
              traditional data center workgroup silos. WWT can help you plan and
              design an automated, secure and streamlined data center.
            </p>
          </div>

          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">Implement</h4>
            <p className=" leading-relaxed  text-justify">
              Because data centers house the crown jewels of any business, they
              must be properly planned and implemented to mitigate risk. We have
              the experience and expertise to help you every step of the way.
            </p>
          </div>

          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">Operate</h4>
            <p className=" leading-relaxed  text-justify">
              The work doesn't stop once a data center is up and running. There
              are still Day 2 operational tasks, monitoring tools and additional
              features to implement. WWT can help you make the most of your
              hardware and software investment. Post-deployment is also a great
              time to continue learning about new automation tools and skills.
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
          text="Data Center Networking"
          desc="Data center networking provides the connectivity between servers and data for applications critical to the business."
        />
      </div>
    </>
  );
}

export default overview;
