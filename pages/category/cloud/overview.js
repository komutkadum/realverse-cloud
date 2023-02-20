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
        description="Unlock cloud&#x27;s potential to transform your business, from strategy through implementation and beyond."
        title="Cloud - Overview - Realverse Cloud"
      />
      <div class="grid grid-flow-row laptop:grid-flow-col page-padding">
        <CategoryNavigationAbove
          text="Cloud"
          desc="Unlock cloud's potential to transform your business, from strategy through implementation and beyond."
        />
        <div>
          <ul className="flex border-b border-gray-400 w-full">
            <li className="px-5 border-b-4 border-sky-700 font-bold py-1.5">
              Overview
            </li>
            <Link href="/category/cloud/services#top">
              <li className="px-5 py-1.5">Services</li>
            </Link>
          </ul>
          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">Rise above the cloud</h4>
            <p className=" leading-relaxed  ">
              Organizations everywhere have turned to cloud in the name of
              digital transformation. Yet many are struggling to harness cloud's
              full potential. That's because optimizing and securing cloud
              environments has become more complex than ever.
            </p>
            <p className=" leading-relaxed  font-semibold">
              We believe today's digital world demands a new approach to cloud.
            </p>
            <p className=" leading-relaxed  ">
              One where your people, processes and technologies work together in
              harmony. Where you have the visibility and resiliency needed to
              scale at the speed of your business.
            </p>
            <p className=" leading-relaxed  ">
              It's time to rise above the cloud.
            </p>
          </div>

          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">Why Realverse Cloud?</h4>
            <h5 className="text-lg font-bold">
              The difference of cloud strategy plus execution
            </h5>
            <p className=" leading-relaxed  ">
              Unlike traditional consulting organizations, boutique firms and
              cloud service providers (CSPs), WWT offers independent expertise
              across all areas of cloud, from strategy through execution.
            </p>
            <p className=" leading-relaxed ">
              Our expertise is informed by three decades of building the
              infrastructure on which clouds run. We've designed, deployed and
              secured complex multicloud, data center and networking solutions
              for some of the largest businesses in the world.
            </p>
            <p className=" leading-relaxed  ">
              We bring the leading CSPs, OEMs, independent software vendors
              (ISVs) and technology platforms together in a collaborative
              ecosystem where clients can learn about and test cutting-edge
              technologies and integrated architectural solutions.
            </p>
          </div>

          <CallToAction
            text="Ready to rise above the cloud?"
            buttonText="Contact us"
          />

          <ThreeColumn
            title="Topics"
            content="Explore specific capabilities and offerings across our cloud practice."
          >
            <ThreeColumnContent
              title="Cloud Migration"
              href="/topic/cloud-migration/overview#top"
              bgImage="/images/turn-on-2923046_1920.jpg"
              content="Simplify the process of migrating applications and workloads
              to the right cloud environment for your business."
            />
            <ThreeColumnContent
              title="Cloud Networking"
              href="/topic/cloud-networking/overview#top"
              bgImage="/images/businessman-1176006_1920.jpg"
              content="Paving the way for connectivity across multiple cloud
              environments."
            />
          </ThreeColumn>
        </div>
        <CategoryNavigationBelow
          text="Cloud"
          desc="Unlock cloud's potential to transform your business, from strategy through implementation and beyond."
        />
      </div>
    </>
  );
}

export default overview;
