/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React from 'react';
import CallToAction from '../../../components/utility/CallToAction';
import CategoryNavigationAbove from '../../../components/utility/CategoryNavigationAbove';
import CategoryNavigationBelow from '../../../components/utility/CategoryNavigationBelow';

function overview() {
  return (
    <>
      <div class="grid grid-flow-row laptop:grid-flow-col">
        <CategoryNavigationAbove
          text="Automation & Orchestration"
          desc="Learn about automated infrastructure, platforms and operations."
        />
        <div>
          <ul className="flex border-b border-gray-400 w-full">
            <li className="px-5 border-b-4 border-blue-600 font-bold py-1.5">
              Overview
            </li>
            <Link href="/category/automation-and-orchestration/services">
              <li className="px-5 py-1.5">Services</li>
            </Link>
          </ul>
          <div className="py-6 grid gap-y-2">
            <h4 className="text-xl font-bold">Automate everything right</h4>
            <p className=" leading-relaxed  text-justify">
              Organizations across every industry are looking to automation to
              give their business a competitive advantage. In many cases,
              automation is already underway with multiple grassroots efforts.
            </p>
            <p className=" leading-relaxed my-2 text-justify">
              But how do you connect siloed automation projects to a scalable
              automation strategy that drives business outcomes?
            </p>
            <p className=" leading-relaxed  text-justify">
              It's tempting to try to automate everything.
            </p>
            <p className=" leading-relaxed  text-justify">
              However, we've found that the secret to success is to automate
              everything right. This means prioritizing the correct things to
              automate and then automating them correctly.
            </p>
          </div>
          <CallToAction
            text="Learn the secrets to success"
            buttonText="View Now"
          />

          <div className="py-6 grid gap-y-6">
            <h4 className="text-xl font-bold">Topics</h4>
            <div className="grid grid-cols-12 gap-2">
              <div
                className="col-span-12 mobile:col-span-6 laptopxl:col-span-4 rounded-md border aspect-w-16 aspect-h-9 bg-red-600 bg-cover bg-no-repeat text-white"
                style={{
                  backgroundImage: "url('/images/turn-on-2923046_1920.jpg')",
                }}
              >
                <div className="flex flex-col items-center justify-end group hover:backdrop-blur cursor-pointer">
                  <p className="w-full py-2.5 px-4 font-bold transparent-background">
                    DevOps
                  </p>
                </div>
              </div>
              <div
                className="col-span-12 mobile:col-span-6 laptopxl:col-span-4 rounded-md border aspect-w-16 aspect-h-9 bg-red-600 bg-cover bg-no-repeat text-white"
                style={{
                  backgroundImage:
                    "url('/images/businessman-1176006_1920.jpg')",
                }}
              >
                <div className="flex flex-col items-center justify-end group hover:backdrop-blur cursor-pointer">
                  <p className="w-full py-2.5 px-4 font-bold transparent-background">
                    Infrastructure Automation
                  </p>
                </div>
              </div>
            </div>
          </div>
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
