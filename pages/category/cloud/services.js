/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PageSEO } from '../../../components/SEO';
import CallToAction from '../../../components/utility/CallToAction';
import CategoryNavigationAbove from '../../../components/utility/CategoryNavigationAbove';
import CategoryNavigationBelow from '../../../components/utility/CategoryNavigationBelow';
import cloudMaturityGif from '../../../public/images/03 061722 Cloud Maturity Curve.webp';
import cloudServiceImage from '../../../public/images/wwt - your cloud partner.png';

function services() {
  return (
    <>
      <PageSEO
        description="Unlock cloud&#x27;s potential to transform your business, from strategy through implementation and beyond."
        title="Cloud - Services - Realverse Cloud"
      />
      <div className="grid grid-flow-row laptop:grid-flow-col page-padding">
        <CategoryNavigationAbove
          text="Cloud"
          desc="Unlock cloud's potential to transform your business, from strategy through implementation and beyond."
        />
        <div>
          <ul className="flex border-b border-gray-400 w-full">
            <Link href="/category/cloud/overview">
              <li className="px-5 py-1.5">Overview</li>
            </Link>
            <li className="px-5 border-b-4 border-sky-700 font-bold py-1.5">
              Services
            </li>
          </ul>
          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">Cloud services</h4>
            <h5 className="text-lg font-bold">It all starts with strategy</h5>
            <p className=" leading-relaxed  ">
              Cloud technologies have made it easier for businesses to become
              more resilient in the face of unexpected change. But it can be
              difficult to harness cloud's full potential given its broad reach
              across technology stacks.
            </p>
            <p className=" leading-relaxed  ">
              That's where the importance of strategy comes in. The right cloud
              strategy can fuel ongoing transformations that unlock new paths
              and solutions, accelerating your business today while sculpting
              where it can go tomorrow.
            </p>
            <Image
              src={cloudServiceImage}
              className="mt-4"
              alt="cloud partner"
            />
          </div>

          <div className="py-10">
            <CallToAction
              text="Consult with a cloud expert today."
              buttonText="Contact Us"
            />
          </div>

          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">Cloud Maturity Model</h4>
            <h5 className="text-lg font-bold">
              An easier way to scale and optimize capabilities
            </h5>
            <p className=" leading-relaxed  ">
              We've developed a Cloud Maturity Model to help organizations
              mature their cloud capabilities across their people, processes and
              technology. No matter where you are in the journey, from zero
              cloud presence to a fully cloud-enabled organization, we can help
              you get the most out of your investment:
            </p>
            <ul className="grid gap-y-4 mx-6 my-2 list-disc">
              <li>
                Speed application time-to-market with a well-rationalized cloud
                strategy.
              </li>
              <li>
                Simplify and secure applications through automated
                infrastructure and delivery.
              </li>
              <li>
                Enable innovation with a best-practices cloud services
                architecture.
              </li>
              <li>
                Reduce costs by effectively combining multiple cloud services.
              </li>
              <li>
                Achieve visibility into consumption and optimize cloud spend.
              </li>
              <li>And more!</li>
            </ul>
            <Image src={cloudMaturityGif} alt="cloud maturity gif" />
          </div>
        </div>
        <CategoryNavigationBelow
          text="Cloud"
          desc="Unlock cloud's potential to transform your business, from strategy through implementation and beyond."
        />
      </div>
    </>
  );
}

export default services;
