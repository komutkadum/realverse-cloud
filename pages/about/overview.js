/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ThreeColumn, {
  ThreeColumnContent,
} from '../../components/layout/ThreeColumn';
import RightNavigationAbove from '../../components/Navigation/RightNavigationAbove';
import RightNavigationBelow from '../../components/Navigation/RightNavigationBelow';
import { PageSEO } from '../../components/SEO';
import AboutNavigation from '../../components/utility/AboutNavigation';
import vennDiagram from '../../public/images/wwt-venn-diagrams.png';

function Overview() {
  return (
    <>
      <PageSEO
        description="We play a vital role in changing the world for the better."
        title="About Us - Overview - Realverse Cloud"
      />

      <div className="grid grid-flow-row laptop:grid-flow-col page-padding">
        <RightNavigationAbove />
        <div>
          <AboutNavigation />
          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">Make a new world happen.</h4>
            <p className=" leading-relaxed  ">
              This simple phrase encapsulates our ambition and what we do -- not
              just for our customers, but for our people and communities across
              the globe.{' '}
            </p>
            <p className=" leading-relaxed  ">
              We are thinkers and doers. We combine strategy and execution to
              help organizations accelerate growth and realize a brighter
              future. We turn complex technology solutions into a practical and
              actionable way forward. Then we help deliver them globally.
            </p>
            <p className=" leading-relaxed  ">
              A culture of innovation lies at our very core. You can see it in
              our people. We live and breathe change every day because we
              believe in doing whatever it takes to help organizations
              accelerate growth by connecting them to the right technology. And
              delivering it around the world.
            </p>
          </div>
          <div className="py-6 grid gap-y-4">
            <h4 className="text-2xl font-bold">
              In a world that is less end to end, we connect everything together
            </h4>

            <Image src={vennDiagram} alt="venn diagram" />
            <div className="grid gap-y-2">
              <p className=" leading-relaxed  ">
                We look at the entire process -- from beginning to end -- by
                delivering both strategy and execution, acting as a bridge
                between business and technology, and blurring the lines between
                the physical and digital. In doing so, we remove the barriers to
                digital transformation.
              </p>
              <p className=" leading-relaxed  ">
                We develop real, collaborative partnerships with our customers
                to connect their organizations to new possibilities.
              </p>
              <p className=" leading-relaxed  ">
                We see the opportunities and make change happen fast.
                Infrastructure modernization is at the core of what we do for
                your network, data center and everything in between.
              </p>
              <p className=" leading-relaxed  ">
                We design technology to deliver the best business outcomes, and
                we test the viability of solutions in our Advanced Technology
                Center.
              </p>
              <p className=" leading-relaxed  ">
                Before drawing upon our global operations supply chain to
                implement them at scale -- anywhere around the world.
              </p>
              <i className=" leading-relaxed   font-bold">
                We see the opportunities and make change happen fast.
              </i>
            </div>
          </div>

          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">What we do</h4>
            <p className=" leading-relaxed  ">
              We operate at the forefront of innovation and progress, working
              with our clients all over the world to take them into the future.
            </p>
            <div className="grid grid-cols-12 gap-y-4 gap-x-6">
              {/* <!-- grid --> */}
              <div className="col-span-12 mobile:col-span-6 tabletxl:col-span-4 flex items-start justify-center gap-x-2">
                <i className="fa-brands fa-react text-3xl "></i>
                <div className="grid gap-y-1.5 leading-relaxed">
                  <h3 className="text-lg">Solutions</h3>
                  <p>
                    Move faster with managed IT solutions -- from user
                    end-points, servers and virtualization to cloud computing,
                    automation and IT optimization.
                  </p>
                  <a href="#" className="group inline-flex">
                    Learn more&nbsp;
                    <i className="fa-solid fa-circle-chevron-right text-sky-700 duration-200  text-lg group-hover:translate-x-1"></i>
                  </a>
                </div>
              </div>

              <div className="col-span-12 mobile:col-span-6 tabletxl:col-span-4 flex items-start justify-center gap-x-2">
                <i className="fa-solid fa-wand-magic-sparkles text-3xl "></i>
                <div className="grid gap-y-1.5 leading-relaxed">
                  <h3 className="text-lg">Services</h3>
                  <p>
                    Simplify transformation with strategic consulting expertise
                    and an ability to seamlessly execute complex IT deployments
                    worldwide.
                  </p>
                  <a href="#" className="group inline-flex">
                    Learn more&nbsp;
                    <i className="fa-solid fa-circle-chevron-right text-sky-700 duration-200  text-lg group-hover:translate-x-1"></i>
                  </a>
                </div>
              </div>

              <div className="col-span-12 mobile:col-span-6 tabletxl:col-span-4 flex items-start justify-center gap-x-2">
                <i className="fa-solid fa-industry text-3xl "></i>
                <div className="grid gap-y-1.5 leading-relaxed">
                  <h3 className="text-lg">Industries</h3>
                  <p>
                    Industry-specific research, analysis, modeling and strategy,
                    and experts that act as an extension of your leadership
                    team.
                  </p>
                  <a href="#" className="group inline-flex">
                    Learn more&nbsp;
                    <i className="fa-solid fa-circle-chevron-right text-sky-700 duration-200  text-lg group-hover:translate-x-1"></i>
                  </a>
                </div>
              </div>

              <div className="col-span-12 mobile:col-span-6 tabletxl:col-span-4 flex items-start justify-center gap-x-2">
                <i className="fa-solid fa-handshake text-3xl "></i>
                <div className="grid gap-y-1.5 leading-relaxed">
                  <h3 className="text-lg">Partners</h3>
                  <p>
                    The world's leading technology manufacturers -- from Silicon
                    Valley heavyweights to emerging tech players -- at your
                    fingertips.
                  </p>
                  <a href="#" className="group inline-flex">
                    Learn more&nbsp;
                    <i className="fa-solid fa-circle-chevron-right text-sky-700 duration-200  text-lg group-hover:translate-x-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <ThreeColumn title="Key services and capabilities">
            <ThreeColumnContent
              href="/category/automation-and-orchestration/overview"
              bgImage="/bgImages/automation-and-orchestration.webp"
              title="Automation and orchestration"
              content="Learn about automated infrastructure, platforms &
                    operations."
            />
            <ThreeColumnContent
              href="/category/cloud/overview"
              bgImage="/bgImages/cloud.webp"
              title="Cloud"
              content="Unlock cloud's potential to transform your business, from
                    strategy through implementation and beyond..."
            />
            <ThreeColumnContent
              href="/category/data-center/overview"
              bgImage="/bgImages/data-center.webp"
              title="Data Center"
              content="Learn about data protection, facilities infrastructure,
                    converged & hyperconverged infrastructure."
            />
            <ThreeColumnContent
              href="/category/networking/overview"
              bgImage="/bgImages/networking.webp"
              title="Networking"
              content="Accelerate your organization's path to a global connectivity
                    architechture that enforces security..."
            />
          </ThreeColumn>

          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">Realverse Cloud at a glance</h4>
            <p className=" leading-relaxed  ">
              Realverse Cloud is a financially strong, privately held global
              technology service provider with over many years experience
              servicing the world's largest and most innovative organizations.
            </p>
            <div className="grid grid-cols-12 gap-4 items-start mt-4">
              <div className="col-span-12 mobile:col-span-6 laptopxl:col-span-4 grid gap-y-6">
                <i className="fa-solid fa-hands-bound text-2xl "></i>
                <p>Founded in 2021.</p>
              </div>
              <div className="col-span-12 mobile:col-span-6 laptopxl:col-span-4 grid gap-y-6">
                <i className="fa-solid fa-people-group  text-2xl"></i>
                <p>Leading tech specialist working.</p>
              </div>
              <div className="col-span-12 mobile:col-span-6 laptopxl:col-span-4 grid gap-y-6">
                <i className="fa-solid fa-money-bill-1-wave text-2xl "></i>
                <p>Outstanding Revenue</p>
              </div>
              <div className="col-span-12 mobile:col-span-6 laptopxl:col-span-4 grid gap-y-6">
                <i className="fa-solid fa-dna text-2xl "></i>
                <p>Solution provider for more than dozen of companies</p>
              </div>
              <div className="col-span-12 mobile:col-span-6 laptopxl:col-span-4 grid gap-y-6">
                <i className="fa-solid fa-handshake-angle text-2xl "></i>
                <p>Huge reliable partners</p>
              </div>
              <div className="col-span-12 mobile:col-span-6 laptopxl:col-span-4 grid gap-y-6">
                <i className="fa-solid fa-award text-2xl "></i>
                <p>"Great Place to Work"</p>
              </div>
            </div>
          </div>

          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">Get started today</h4>
            <p className=" leading-relaxed  ">
              Don't see what you're looking for or want to learn more?
            </p>
            <div>
              <Link href="/contact-us">
                <button className="px-6 py-2 bg-button">Contact us</button>
              </Link>
            </div>
          </div>
        </div>
        <RightNavigationBelow />
      </div>
    </>
  );
}

export default Overview;
