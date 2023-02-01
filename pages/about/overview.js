/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import RightNavigationAbove from '../../components/Navigation/RightNavigationAbove';
import RightNavigationBelow from '../../components/Navigation/RightNavigationBelow';

function overview() {
  return (
    <>
      <div class="grid grid-flow-row laptop:grid-flow-col">
        <RightNavigationAbove />
        <div>
          <ul className="flex border-b border-gray-400 w-full">
            <li className="px-5 border-b-4 border-blue-600 font-bold py-1.5">
              Overview
            </li>
            {/* <Link href="/about/our-work">
              <li className="px-5 py-1.5">Our Work</li>
            </Link>
            <Link href="/about/culture">
              <li className="px-5 py-1.5">Culture</li>
            </Link>
            <Link href="/about/leadership">
              <li className="px-5 py-1.5">Leadership</li>
            </Link> */}
          </ul>
          <div className="py-6 grid gap-y-2">
            <h4 className="text-xl font-bold">Make a new world happen.</h4>
            <p className=" leading-relaxed  text-justify">
              This simple phrase encapsulates our ambition and what we do -- not
              just for our customers, but for our people and communities across
              the globe.{' '}
            </p>
            <p className=" leading-relaxed  text-justify">
              We are thinkers and doers. We combine strategy and execution to
              help organizations accelerate growth and realize a brighter
              future. We turn complex technology solutions into a practical and
              actionable way forward. Then we help deliver them globally.
            </p>
            <p className=" leading-relaxed  text-justify">
              A culture of innovation lies at our very core. You can see it in
              our people. We live and breathe change every day because we
              believe in doing whatever it takes to help organizations
              accelerate growth by connecting them to the right technology. And
              delivering it around the world.
            </p>
          </div>
          <div className="py-6 grid gap-y-4">
            <div>
              <h4 className="text-xl font-bold">
                In a world that is less end to end, we connect everything
                together
              </h4>
              <img src="/images/wwt-venn-diagrams.png" alt="" />
            </div>
            <div className="grid gap-y-2">
              <p className=" leading-relaxed  text-justify">
                We look at the entire process -- from beginning to end -- by
                delivering both strategy and execution, acting as a bridge
                between business and technology, and blurring the lines between
                the physical and digital. In doing so, we remove the barriers to
                digital transformation.
              </p>
              <p className=" leading-relaxed  text-justify">
                We develop real, collaborative partnerships with our customers
                to connect their organizations to new possibilities.
              </p>
              <p className=" leading-relaxed  text-justify">
                We see the opportunities and make change happen fast.
                Infrastructure modernization is at the core of what we do for
                your network, data center and everything in between.
              </p>
              <p className=" leading-relaxed  text-justify">
                We design technology to deliver the best business outcomes, and
                we test the viability of solutions in our Advanced Technology
                Center.
              </p>
              <p className=" leading-relaxed  text-justify">
                Before drawing upon our global operations supply chain to
                implement them at scale -- anywhere around the world.
              </p>
              <i className=" leading-relaxed  text-justify font-bold">
                We see the opportunities and make change happen fast.
              </i>
            </div>
          </div>

          <div className="py-6 grid gap-y-2">
            <h4 className="text-xl font-bold">What we do</h4>
            <p className=" leading-relaxed  text-justify">
              We operate at the forefront of innovation and progress, working
              with our clients all over the world to take them into the future.
            </p>
            <div className="grid grid-cols-12 gap-y-4">
              {/* <!-- grid --> */}
              <div className="col-span-12 mobile:col-span-6 tabletxl:col-span-4 flex items-start justify-center gap-x-2">
                <i className="fa-brands fa-react text-3xl"></i>
                <div className="grid gap-y-1.5 leading-relaxed">
                  <h3 className="text-lg">Solutions</h3>
                  <p>
                    Move faster with managed IT solutions -- from user
                    end-points, servers and virtualization to cloud computing,
                    automation and IT optimization.
                  </p>
                  <a href="#" className="group inline-flex">
                    Learn more&nbsp;
                    <i className="fa-solid fa-circle-chevron-right duration-200 text-sky-600 text-lg group-hover:translate-x-1"></i>
                  </a>
                </div>
              </div>

              <div className="col-span-12 mobile:col-span-6 tabletxl:col-span-4 flex items-start justify-center gap-x-2">
                <i className="fa-solid fa-wand-magic-sparkles text-3xl"></i>
                <div className="grid gap-y-1.5 leading-relaxed">
                  <h3 className="text-lg">Services</h3>
                  <p>
                    Simplify transformation with strategic consulting expertise
                    and an ability to seamlessly execute complex IT deployments
                    worldwide.
                  </p>
                  <a href="#" className="group inline-flex">
                    Learn more&nbsp;
                    <i className="fa-solid fa-circle-chevron-right duration-200 text-sky-600 text-lg group-hover:translate-x-1"></i>
                  </a>
                </div>
              </div>

              <div className="col-span-12 mobile:col-span-6 tabletxl:col-span-4 flex items-start justify-center gap-x-2">
                <i className="fa-solid fa-industry text-3xl"></i>
                <div className="grid gap-y-1.5 leading-relaxed">
                  <h3 className="text-lg">Industries</h3>
                  <p>
                    Industry-specific research, analysis, modeling and strategy,
                    and experts that act as an extension of your leadership
                    team.
                  </p>
                  <a href="#" className="group inline-flex">
                    Learn more&nbsp;
                    <i className="fa-solid fa-circle-chevron-right duration-200 text-sky-600 text-lg group-hover:translate-x-1"></i>
                  </a>
                </div>
              </div>

              <div className="col-span-12 mobile:col-span-6 tabletxl:col-span-4 flex items-start justify-center gap-x-2">
                <i className="fa-solid fa-handshake text-3xl"></i>
                <div className="grid gap-y-1.5 leading-relaxed">
                  <h3 className="text-lg">Partners</h3>
                  <p>
                    The world's leading technology manufacturers -- from Silicon
                    Valley heavyweights to emerging tech players -- at your
                    fingertips.
                  </p>
                  <a href="#" className="group inline-flex">
                    Learn more&nbsp;
                    <i className="fa-solid fa-circle-chevron-right duration-200 text-sky-600 text-lg group-hover:translate-x-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="py-6 grid gap-y-2">
            <h4 className="text-xl font-bold">Key services and capabilities</h4>
            <div className="grid grid-cols-12 gap-2">
              <div
                className="col-span-12 mobile:col-span-6 laptopxl:col-span-4 rounded-md border aspect-w-16 aspect-h-9 bg-red-600 bg-cover bg-no-repeat text-white"
                style={{
                  backgroundImage: "url('/images/turn-on-2923046_1920.jpg')",
                }}
              >
                <div className="flex flex-col items-center justify-end group hover:backdrop-blur cursor-pointer">
                  <p className="w-full py-2.5 px-4 font-bold transparent-background">
                    Automation and orchestration
                  </p>
                  <p className="hidden text-sm py-2 px-4 transparent-background group-hover:block animate__animated animate__fadeInUp animate__fast">
                    Learn about automated infrastructure, platforms &
                    operations.
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
                    Cloud
                  </p>
                  <p className="hidden py-2 px-4 text-sm transparent-background group-hover:block animate__animated animate__fadeInUp animate__fast">
                    Unlock cloud's potential to transform your business, from
                    strategy through implementation and beyond...
                  </p>
                </div>
              </div>
              <div
                className="col-span-12 mobile:col-span-6 laptopxl:col-span-4 rounded-md border aspect-w-16 aspect-h-9 bg-red-600 bg-cover bg-no-repeat text-white"
                style={{
                  backgroundImage: "url('/images/electrical-2476782_1920.jpg')",
                }}
              >
                <div className="flex flex-col items-center justify-end group hover:backdrop-blur cursor-pointer">
                  <p className="w-full py-2.5 px-4 font-bold transparent-background">
                    Data Center
                  </p>
                  <p className="hidden py-2 px-4 text-sm transparent-background group-hover:block animate__animated animate__fadeInUp animate__fast">
                    Learn about data protection, facilities infrastructure,
                    converged & hyperconverged infrastructure.
                  </p>
                </div>
              </div>
              <div
                className="col-span-12 mobile:col-span-6 laptopxl:col-span-4 rounded-md border aspect-w-16 aspect-h-9 bg-red-600 bg-cover bg-no-repeat text-white"
                style={{
                  backgroundImage: "url('/images/fiber-4814456_1920.jpg')",
                }}
              >
                <div className="flex flex-col items-center justify-end group hover:backdrop-blur cursor-pointer">
                  <p className="w-full py-2.5 px-4 font-bold transparent-background">
                    Networking
                  </p>
                  <p className="hidden py-2 px-4 text-sm transparent-background group-hover:block animate__animated animate__fadeInUp animate__fast">
                    Accelerate your organization's path to a global connectivity
                    architechture that enforces security...
                  </p>
                </div>
              </div>
              <div
                className="col-span-12 mobile:col-span-6 laptopxl:col-span-4 rounded-md border aspect-w-16 aspect-h-9 bg-red-600 bg-cover bg-no-repeat text-white"
                style={{
                  backgroundImage: "url('/images/fiber-4814456_1920.jpg')",
                }}
              >
                <div className="flex flex-col items-center justify-end group hover:backdrop-blur cursor-pointer">
                  <p className="w-full py-2.5 px-4 font-bold transparent-background">
                    Networking
                  </p>
                  <p className="hidden py-2 px-4 text-sm transparent-background group-hover:block animate__animated animate__fadeInUp animate__fast">
                    Accelerate your organization's path to a global connectivity
                    architechture that enforces security...
                  </p>
                </div>
              </div>
              <div
                className="col-span-12 mobile:col-span-6 laptopxl:col-span-4 rounded-md border aspect-w-16 aspect-h-9 bg-red-600 bg-cover bg-no-repeat text-white"
                style={{
                  backgroundImage: "url('/images/fiber-4814456_1920.jpg')",
                }}
              >
                <div className="flex flex-col items-center justify-end group hover:backdrop-blur cursor-pointer">
                  <p className="w-full py-2.5 px-4 font-bold transparent-background">
                    Networking
                  </p>
                  <p className="hidden py-2 px-4 transparent-background text-sm group-hover:block animate__animated animate__fadeInUp animate__fast">
                    Accelerate your organization's path to a global connectivity
                    architechture that enforces security...
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="py-6 grid gap-y-2">
            <h4 className="text-xl font-bold">Realverse Cloud at a glance</h4>
            <p className=" leading-relaxed  text-justify">
              Realverse Cloud is a financially strong, privately held global
              technology service provider with over 30 years experience
              servicing the world's largest and most innovative organizations.
            </p>
            <div className="grid grid-cols-12 gap-4 items-start mt-4">
              <div className="col-span-12 mobile:col-span-6 laptopxl:col-span-4 grid gap-y-6">
                <i className="fa-solid fa-hands-bound text-2xl text-blue-600"></i>
                <p>Founded in 1990 and privately held for more than 30 years</p>
              </div>
              <div className="col-span-12 mobile:col-span-6 laptopxl:col-span-4 grid gap-y-6">
                <i className="fa-solid fa-people-group text-blue-600 text-2xl"></i>
                <p>Approximately 9,000 employees globally</p>
              </div>
              <div className="col-span-12 mobile:col-span-6 laptopxl:col-span-4 grid gap-y-6">
                <i className="fa-solid fa-money-bill-1-wave text-2xl text-blue-600"></i>
                <p>$17 billion in annual revenue</p>
              </div>
              <div className="col-span-12 mobile:col-span-6 laptopxl:col-span-4 grid gap-y-6">
                <i className="fa-solid fa-dna text-2xl text-blue-600"></i>
                <p>
                  Solution provider for more than 70 of Fortune 100 companies
                </p>
              </div>
              <div className="col-span-12 mobile:col-span-6 laptopxl:col-span-4 grid gap-y-6">
                <i className="fa-solid fa-handshake-angle text-2xl text-blue-600"></i>
                <p>
                  Top Partner with Cisco, HPE, Dell Technologies, NetApp, F5,
                  Intel, VMware and many others
                </p>
              </div>
              <div className="col-span-12 mobile:col-span-6 laptopxl:col-span-4 grid gap-y-6">
                <i className="fa-solid fa-award text-2xl text-blue-600"></i>
                <p>"Great Place to Work" 11 years in a row</p>
              </div>
            </div>
          </div>

          <div className="py-6 grid gap-y-2">
            <h4 className="text-xl font-bold">Get started today</h4>
            <p className=" leading-relaxed  text-justify">
              Don't see what you're looking for or want to learn more?
            </p>
            <div>
              <button className="px-6 rounded-lg py-3 text-white bg-blue-600 hover:bg-blue-800">
                Contact us
              </button>
            </div>
          </div>
        </div>
        <RightNavigationBelow />
      </div>
    </>
  );
}

export default overview;
