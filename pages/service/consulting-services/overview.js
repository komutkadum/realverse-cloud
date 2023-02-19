/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React from 'react';
import { PageSEO } from '../../../components/Seo';
import CallToAction from '../../../components/utility/CallToAction';
import CategoryNavigationAbove from '../../../components/utility/CategoryNavigationAbove';
import CategoryNavigationBelow from '../../../components/utility/CategoryNavigationBelow';

function overview() {
  return (
    <>
      <PageSEO
        description="Combining the insights of a traditional consulting firm with the ability to execute complex infrastructure solutions at scale globally."
        title="Consulting Services - Overview - Realverse Cloud"
      />
      <div class="grid grid-flow-row laptop:grid-flow-col page-padding">
        <CategoryNavigationAbove
          text="Consulting Services"
          desc="Combining the insights of a traditional consulting firm with the ability to execute complex infrastructure solutions at scale globally."
        />
        <div>
          <ul className="flex border-b border-gray-400 w-full">
            <li className="px-5 border-b-4 border-sky-600 font-bold py-1.5">
              Overview
            </li>
          </ul>
          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">
              The difference of strategy plus execution
            </h4>
            <p className=" leading-relaxed  text-justify">
              You won't find another partner who combines the research,
              analysis, modeling and strategy development of a traditional
              consulting firm with the proven ability to deploy, integrate and
              operate complex infrastructure solutions at scale around the
              world.
            </p>
            <p className=" leading-relaxed my-2 text-justify">
              By bridging business and technology objectives to drive
              operational efficiency, WWT delivers tangible business outcomes
              faster. Our holistic approach is based on human-centered design
              expertise. We turn your data into a differentiator as we develop
              and implement end-to-end solutions.
            </p>
            <p className=" leading-relaxed  text-justify">
              With real-world experience that spans industries and continents,
              we know how to drive operational efficiency and solve complex IT
              issues. Our agile approach not only saves you time and money, it
              ensures the right outcomes for your business.
            </p>
          </div>

          <div className="py-6 grid gap-y-6">
            <div className="grid gap-y-4">
              <h4 className="text-2xl font-bold">
                Key consulting capabilities
              </h4>
              <p className=" leading-relaxed  text-justify">
                Driving digital and business transformation, wherever and
                whenever you need it
              </p>
            </div>
            <div className="grid grid-cols-12 gap-2">
              <Link
                href="/category/cloud/overview#top"
                className="col-span-12 mobile:col-span-6 laptopxl:col-span-4 rounded-md border aspect-w-16 aspect-h-9 bg-red-600 bg-cover bg-no-repeat text-white"
                style={{
                  backgroundImage: "url('/images/turn-on-2923046_1920.jpg')",
                }}
              >
                <div className="flex flex-col items-center justify-end group hover:backdrop-blur cursor-pointer">
                  <p className="w-full py-2.5 px-4 font-bold transparent-background">
                    Cloud Services
                  </p>
                </div>
              </Link>
              <Link
                href="/enterprise-architecture#top"
                className="col-span-12 mobile:col-span-6 laptopxl:col-span-4 rounded-md border aspect-w-16 aspect-h-9 bg-red-600 bg-cover bg-no-repeat text-white"
                style={{
                  backgroundImage:
                    "url('/images/businessman-1176006_1920.jpg')",
                }}
              >
                <div className="flex flex-col items-center justify-end group hover:backdrop-blur cursor-pointer">
                  <p className="w-full py-2.5 px-4 font-bold transparent-background">
                    Enterprise Architechture Services
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">Borderless thinking</h4>
            <p className=" leading-relaxed  text-justify">
              True digital transformation takes vision, a collaborative approach
              and delivery power. WWT calls this Borderless Thinking.
              Streamlined end-to-end solutions from strategy to execution --
              with agility and speed built in to get you ahead super fast.
            </p>
            <p className=" leading-relaxed  text-justify">
              No one appreciates more than we do that ideas must exist as
              proven, scalable, profitable and tangible outcomes. Ideas must be
              developed and implemented. They must also be cost effective and
              right for your business.
            </p>
            <p className="leading-relaxed text-justify">
              At WWT, we have the thinking power and the delivery power to
              seamlessly unite technology and business. We have the unique
              capabilities to make a new world happen.
            </p>
          </div>

          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">
              Bigger vision. Better outcomes.
            </h4>
            <p className=" leading-relaxed  text-justify">
              Because we offer streamlined, end-to-end solutions, you'll
              experience benefits of your digital strategy faster. And it's not
              just time you'll be saving:
            </p>
            <div className="grid grid-cols-12 gap-y-4 gap-x-6 mt-2">
              {/* <!-- grid --> */}
              <div className="col-span-12 mobile:col-span-6 tabletxl:col-span-4 flex items-start justify-center gap-x-2">
                <i className="fa-solid fa-handshake text-3xl"></i>
                <div className="grid gap-y-1.5 leading-relaxed">
                  <h3 className="text-lg">Increased customer acquisition</h3>
                  <p>
                    You'll be able to interpret the data you have more
                    effectively, you'll be better at identifying and converting
                    new prospects.
                  </p>
                </div>
              </div>

              <div className="col-span-12 mobile:col-span-6 tabletxl:col-span-4 flex items-start justify-center gap-x-2">
                <i className="fa-solid fa-chart-line text-3xl"></i>
                <div className="grid gap-y-1.5 leading-relaxed">
                  <h3 className="text-lg">Increased revenue and profit</h3>
                  <p>
                    By getting more of the right customers more quickly, you'll
                    see the positive effects on your bottom line faster.
                  </p>
                </div>
              </div>

              <div className="col-span-12 mobile:col-span-6 tabletxl:col-span-4 flex items-start justify-center gap-x-2">
                <i className="fa-solid fa-rocket text-3xl"></i>
                <div className="grid gap-y-1.5 leading-relaxed">
                  <h3 className="text-lg">Reduced transaction friction</h3>
                  <p>
                    By making your customer interactions more seamless, there
                    will be fewer barriers to purchase.
                  </p>
                </div>
              </div>

              <div className="col-span-12 mobile:col-span-6 tabletxl:col-span-4 flex items-start justify-center gap-x-2">
                <i className="fa-solid fa-receipt text-3xl"></i>
                <div className="grid gap-y-1.5 leading-relaxed">
                  <h3 className="text-lg">
                    Reduced costs from a new operating model
                  </h3>
                  <p>
                    Increases in your overall efficiency will help you realize
                    cost savings across many areas of your business.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <CallToAction
            text="Turn your idea into reality today."
            buttonText="Contact us to get started"
          />

          {/* ending */}
        </div>
        <CategoryNavigationBelow
          text="Consulting Services"
          desc="Combining the insights of a traditional consulting firm with the ability to execute complex infrastructure solutions at scale globally."
        />
      </div>
    </>
  );
}

export default overview;
