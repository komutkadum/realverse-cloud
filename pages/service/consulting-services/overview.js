/* eslint-disable react/no-unescaped-entities */
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
            <li className="px-5 border-b-4 border-sky-700 font-bold py-1.5">
              Overview
            </li>
          </ul>
          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">
              The difference of strategy plus execution
            </h4>
            <p className=" leading-relaxed  ">
              You won't find another partner who combines the research,
              analysis, modeling and strategy development of a traditional
              consulting firm with the proven ability to deploy, integrate and
              operate complex infrastructure solutions at scale around the
              world.
            </p>
            <p className=" leading-relaxed my-2 ">
              By bridging business and technology objectives to drive
              operational efficiency, WWT delivers tangible business outcomes
              faster. Our holistic approach is based on human-centered design
              expertise. We turn your data into a differentiator as we develop
              and implement end-to-end solutions.
            </p>
            <p className=" leading-relaxed  ">
              With real-world experience that spans industries and continents,
              we know how to drive operational efficiency and solve complex IT
              issues. Our agile approach not only saves you time and money, it
              ensures the right outcomes for your business.
            </p>
          </div>

          <ThreeColumn
            title="Key consulting capabilities"
            content="Driving digital and business transformation, wherever and
                whenever you need it"
          >
            <ThreeColumnContent
              bgImage="/images/turn-on-2923046_1920.jpg"
              href="/category/cloud/overview#top"
              title="Cloud Services"
            />
            <ThreeColumnContent
              bgImage="/images/businessman-1176006_1920.jpg"
              href="/enterprise-architecture#top"
              title="Enterprise Architechture Services"
            />
          </ThreeColumn>

          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">Borderless thinking</h4>
            <p className=" leading-relaxed  ">
              True digital transformation takes vision, a collaborative approach
              and delivery power. WWT calls this Borderless Thinking.
              Streamlined end-to-end solutions from strategy to execution --
              with agility and speed built in to get you ahead super fast.
            </p>
            <p className=" leading-relaxed  ">
              No one appreciates more than we do that ideas must exist as
              proven, scalable, profitable and tangible outcomes. Ideas must be
              developed and implemented. They must also be cost effective and
              right for your business.
            </p>
            <p className="leading-relaxed ">
              At WWT, we have the thinking power and the delivery power to
              seamlessly unite technology and business. We have the unique
              capabilities to make a new world happen.
            </p>
          </div>

          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">
              Bigger vision. Better outcomes.
            </h4>
            <p className=" leading-relaxed  ">
              Because we offer streamlined, end-to-end solutions, you'll
              experience benefits of your digital strategy faster. And it's not
              just time you'll be saving:
            </p>
            <div className="grid grid-cols-12 gap-y-4 gap-x-6 mt-2">
              {/* <!-- grid --> */}
              <div className="col-span-12 mobile:col-span-6 tabletxl:col-span-4 flex items-start justify-center gap-x-2">
                <i className="fa-solid fa-handshake text-3xl text-sky-800"></i>
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
                <i className="fa-solid fa-chart-line text-3xl text-sky-800"></i>
                <div className="grid gap-y-1.5 leading-relaxed">
                  <h3 className="text-lg">Increased revenue and profit</h3>
                  <p>
                    By getting more of the right customers more quickly, you'll
                    see the positive effects on your bottom line faster.
                  </p>
                </div>
              </div>

              <div className="col-span-12 mobile:col-span-6 tabletxl:col-span-4 flex items-start justify-center gap-x-2">
                <i className="fa-solid fa-rocket text-3xl text-sky-800"></i>
                <div className="grid gap-y-1.5 leading-relaxed">
                  <h3 className="text-lg">Reduced transaction friction</h3>
                  <p>
                    By making your customer interactions more seamless, there
                    will be fewer barriers to purchase.
                  </p>
                </div>
              </div>

              <div className="col-span-12 mobile:col-span-6 tabletxl:col-span-4 flex items-start justify-center gap-x-2">
                <i className="fa-solid fa-receipt text-3xl text-sky-800"></i>
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
