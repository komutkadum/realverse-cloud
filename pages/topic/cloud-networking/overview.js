/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import CategoryNavigationAbove from '../../../components/utility/CategoryNavigationAbove';
import CategoryNavigationBelow from '../../../components/utility/CategoryNavigationBelow';

function overview() {
  return (
    <>
      <div class="grid grid-flow-row laptop:grid-flow-col">
        <CategoryNavigationAbove
          text="Cloud Networking"
          desc="Paving the way for connectivity across multiple cloud environments."
        />
        <div>
          <ul className="flex border-b border-gray-400 w-full">
            <li className="px-5 border-b-4 border-sky-600 font-bold py-1.5">
              Overview
            </li>
          </ul>
          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">
              Cloud networking enables true transformation
            </h4>
            <p className=" leading-relaxed  text-justify">
              Modern organizations are increasingly taking advantage of multiple
              clouds to deliver distinct capabilities for the business. Success
              requires connecting users to these different clouds without
              sacrificing performance. Organizations must architect their
              networks for multicloud connectivity based on their global
              footprints and plans for growth. Learn how to design and deploy
              architectures that connect your users to the cloud services they
              need, at the speed they demand.
            </p>
          </div>

          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">Paths to cloud success</h4>
            <p className=" leading-relaxed  text-justify">
              Cloud solutions are deployed in three primary ways. The right
              model for your business will depend on your unique needs and
              goals. Our certified experts can help you choose, implement and
              optimize the right approach.
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
          text="Cloud Networking"
          desc="Paving the way for connectivity across multiple cloud environments."
        />
      </div>
    </>
  );
}

export default overview;
