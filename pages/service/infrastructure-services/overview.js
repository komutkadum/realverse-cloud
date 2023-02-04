/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import CallToAction from '../../../components/utility/CallToAction';
import CategoryNavigationAbove from '../../../components/utility/CategoryNavigationAbove';
import CategoryNavigationBelow from '../../../components/utility/CategoryNavigationBelow';

function overview() {
  return (
    <>
      <div class="grid grid-flow-row laptop:grid-flow-col">
        <CategoryNavigationAbove
          text="Infrastructure Services"
          desc="Assessing today's technology, designing tomorrow's solutions and seamlessly deploying critical investments at scale around the world."
        />
        <div>
          <ul className="flex border-b border-gray-400 w-full">
            <li className="px-5 border-b-4 border-blue-600 font-bold py-1.5">
              Overview
            </li>
          </ul>
          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">Time to market is critical</h4>
            <p className=" leading-relaxed  text-justify">
              Whether you're deploying technology at scale, managing existing IT
              systems or hiring qualified professionals to accelerate outcomes
              -- time to market is incredibly important. Wherever you are in the
              services lifecycle, WWT Infrastructure Services can help:
            </p>
            <ul className="grid gap-y-4 mx-6 my-2 list-disc">
              <li>
                Our <b>Advanced Services</b> deployment teams deliver thousands
                of projects each year.
              </li>
              <li>
                Our <b>IT Managed Services</b> experts manage, monitor and
                remediate complicated IT environments.
              </li>
              <li>
                Our <b>Strategic Resourcing</b> professionals find the right
                talent to close skill gaps and achieve business goals.
              </li>
            </ul>
            <p className=" leading-relaxed  text-justify">
              Customers trust WWT Infrastructure Services to assess the
              technology they have today, design the solutions they need
              tomorrow and seamlessly deploy their investments at scale around
              the world.
            </p>
            <div className="grid grid-cols-12 gap-4 items-start mt-4">
              <div className="col-span-12 mobile:col-span-6 laptopxl:col-span-4 grid gap-y-6">
                <i className="fa-solid fa-object-group text-2xl text-sky-600"></i>
                <p>
                  Accelerate the planning, design and implementation of complex
                  technology investments
                </p>
              </div>
              <div className="col-span-12 mobile:col-span-6 laptopxl:col-span-4 grid gap-y-4">
                <i className="fa-solid fa-people-group text-sky-600 text-2xl"></i>
                <p>
                  Monitor, manage and remediate issues with our flexible IT
                  Managed Services platform
                </p>
              </div>
              <div className="col-span-12 mobile:col-span-6 laptopxl:col-span-4 grid gap-y-4">
                <i className="fa-solid fa-headset text-2xl text-sky-600"></i>
                <p>
                  Get 24/7 real-time engineering and deployment support from our
                  Command Center
                </p>
              </div>
              <div className="col-span-12 mobile:col-span-6 laptopxl:col-span-4 grid gap-y-4">
                <i className="fa-solid fa-chart-line text-2xl text-sky-600"></i>
                <p>
                  Boost the productivity of IT teams on a long-term basis with
                  Strategic Resourcing placement
                </p>
              </div>
              <div className="col-span-12 mobile:col-span-6 laptopxl:col-span-4 grid gap-y-4">
                <i className="fa-brands fa-react text-2xl text-sky-600"></i>
                <p>
                  Achieve unmatched services innovation with access to hands-on
                  labs, workshops, trainings and more via our Advanced
                  Technology Center (ATC) ecosystem
                </p>
              </div>
              <div className="col-span-12 mobile:col-span-6 laptopxl:col-span-4 grid gap-y-4">
                <i className="fa-solid fa-globe text-2xl text-sky-600"></i>
                <p>
                  Leverage our global network of supply chain, logistics and
                  integration facilities
                </p>
              </div>
            </div>
          </div>

          <div className="py-6 grid gap-y-6">
            <div className="grid gap-y-4">
              <h4 className="text-2xl font-bold">Our core capabilities</h4>
              <p className=" leading-relaxed  text-justify">
                From deployment and implementation through flexible services
                management, we offer multiple capabilities to meet your needs.
                Our ability to design and validate enterprise solutions that
                span multiple technologies, coupled with our ability to
                implement and operate complex solutions on a global scale across
                all channels, truly sets us apart. Our goal is to deliver on
                time, on budget and exceed expectations.
              </p>
            </div>
            <div className="grid grid-cols-12 gap-2">
              <div
                className="col-span-12 mobile:col-span-6 laptopxl:col-span-4 rounded-md border aspect-w-16 aspect-h-9 bg-red-600 bg-cover bg-no-repeat text-white"
                style={{
                  backgroundImage: "url('/images/turn-on-2923046_1920.jpg')",
                }}
              >
                <div className="flex flex-col items-center justify-end group hover:backdrop-blur cursor-pointer">
                  <p className="w-full py-2.5 px-4 font-bold transparent-background">
                    Command Center
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
                    Service Delivery Management
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
                    IT Managed Services
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">Our vision and strategy</h4>
            <p className=" leading-relaxed  text-justify">
              Our vision is to provide a level of service that far exceeds
              industry standards. The strategy we employ to achieve this vision
              is laser-focused on customer experience, leadership and fully
              understanding the vision behind our customers' scope and
              objectives.
            </p>
            <p className=" leading-relaxed  text-justify">
              We strive for customers to be overly impressed with the quality of
              services we provide -- to the point they express delight in
              partnering with WWT. Moreover, we recognize that we're only as
              strong as the local leaders who represent us to our customers and
              peers. Everyone must embrace a leadership presence to ensure our
              success.
            </p>
            <p className="leading-relaxed text-justify">
              Understanding our customers' true objectives and the full details
              of each project scope gives our professionals a clear vision to
              follow when the unexpected arises.
            </p>
          </div>

          <CallToAction
            text="Learn to transform your business?"
            buttonText="Talk to an expert"
          />

          {/* ending */}
        </div>
        <CategoryNavigationBelow
          text="Infrastructure Services"
          desc="Assessing today's technology, designing tomorrow's solutions and seamlessly deploying critical investments at scale around the world."
        />
      </div>
    </>
  );
}

export default overview;
