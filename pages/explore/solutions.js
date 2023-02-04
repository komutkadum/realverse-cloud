import Link from 'next/link';
import React from 'react';

function solutions() {
  return (
    <>
      <h1 className="text-4xl pb-6">Explore</h1>
      <ul className="flex border-b border-gray-400 w-full">
        <li className="px-5 border-b-4 border-sky-600 font-bold py-1.5">
          Solutions
        </li>
        <Link href="/explore/services#top">
          <li className="px-5 py-1.5">Services</li>
        </Link>
      </ul>
      <p className="py-6 leading-relaxed  text-justify">
        From user end-points such as laptops, desktops and smartphones to
        servers, virtualization, cloud computing and IT optimization. Our
        managed IT services are provided by an engineering team that is not only
        highly skilled, but constantly upgrading their own certifications in the
        dynamic and ever-changing technology field to better serve you.
      </p>
      <div className="grid gap-y-4">
        <h4 className="text-2xl font-bold">Featured Solutions</h4>

        {/* grid done */}
        <div className="grid grid-cols-12 gap-2">
          <Link
            href="/category/automation-and-orchestration/overview#top"
            className="col-span-12 mobile:col-span-6 tabletxl:col-span-4 laptopxl:col-span-3 rounded-md border aspect-w-16 aspect-h-9 bg-red-600 bg-cover bg-no-repeat text-white"
            style={{
              backgroundImage: "url('/images/turn-on-2923046_1920.jpg')",
            }}
          >
            <div className="flex flex-col items-center justify-end group hover:backdrop-blur cursor-pointer">
              <p className="w-full py-2.5 px-4 font-bold transparent-background">
                Automation and orchestration
              </p>
              <p className="transparent-background hidden text-sm py-2 px-4 group-hover:block animate__animated animate__fadeInUp animate__fast">
                Learn about automated infrastructure, platforms & operations.
              </p>
            </div>
          </Link>
          <Link
            href="/category/cloud/overview#top"
            className="col-span-12 mobile:col-span-6 tabletxl:col-span-4 laptopxl:col-span-3 rounded-md border aspect-w-16 aspect-h-9 bg-red-600 bg-cover bg-no-repeat text-white"
            style={{
              backgroundImage: "url('/images/businessman-1176006_1920.jpg')",
            }}
          >
            <div className="flex flex-col items-center justify-end group hover:backdrop-blur cursor-pointer">
              <p className="w-full py-2.5 px-4 font-bold transparent-background">
                Cloud
              </p>
              <p className="hidden py-2 px-4 text-sm group-hover:block transparent-background animate__animated animate__fadeInUp animate__fast">
                Unlock cloud&apos; potential to transform your business, from
                strategy through implementation and beyond...
              </p>
            </div>
          </Link>
          <Link
            href="/category/data-center/overview#top"
            className="col-span-12 mobile:col-span-6 tabletxl:col-span-4 laptopxl:col-span-3 rounded-md border aspect-w-16 aspect-h-9 bg-red-600 bg-cover bg-no-repeat text-white"
            style={{
              backgroundImage: "url('/images/electrical-2476782_1920.jpg')",
            }}
          >
            <div className="flex flex-col items-center justify-end group hover:backdrop-blur cursor-pointer">
              <p className="w-full py-2.5 px-4 font-bold transparent-background">
                Data Center
              </p>
              <p className="hidden py-2 px-4 text-sm group-hover:block transparent-background animate__animated animate__fadeInUp animate__fast">
                Learn about data protection, facilities infrastructure,
                converged & hyperconverged infrastructure.
              </p>
            </div>
          </Link>
          <Link
            href="/category/networking/overview#top"
            className="col-span-12 mobile:col-span-6 tabletxl:col-span-4 laptopxl:col-span-3 rounded-md border aspect-w-16 aspect-h-9 bg-red-600 bg-cover bg-no-repeat text-white"
            style={{
              backgroundImage: "url('/images/fiber-4814456_1920.jpg')",
            }}
          >
            <div className="flex flex-col items-center justify-end group hover:backdrop-blur cursor-pointer">
              <p className="w-full py-2.5 px-4 font-bold transparent-background">
                Networking
              </p>
              <p className="hidden py-2 px-4 text-sm transparent-background group-hover:block animate__animated animate__fadeInUp animate__fast">
                Accelerate your organization&apos; path to a global connectivity
                architechture that enforces security...
              </p>
            </div>
          </Link>
        </div>
      </div>

      <hr className="h-px bg-sky-400 my-16" />

      <div className="grid gap-y-12">
        <div className="grid gap-y-4">
          <h4 className="text-2xl font-bold">Automation and orchestration</h4>
          <div className="grid grid-cols-12 gap-2">
            <div
              className="col-span-12 mobile:col-span-6 tabletxl:col-span-4 laptopxl:col-span-3 rounded-md border aspect-w-16 aspect-h-9 bg-red-600 bg-cover bg-no-repeat text-white"
              style={{
                backgroundImage: "url('/images/devops-3155972_1920.jpg')",
              }}
            >
              <div className="flex flex-col items-center justify-end group hover:backdrop-blur cursor-pointer">
                <p className="w-full py-2.5 px-4 font-bold transparent-background">
                  DevOps
                </p>
                <p className="hidden text-sm py-2 transparent-background px-4 group-hover:block animate__animated animate__fadeInUp animate__fast">
                  Combining people, processess and technology to enable the
                  continuous delivery of value to end users.
                </p>
              </div>
            </div>
            <div
              className="col-span-12 mobile:col-span-6 tabletxl:col-span-4 laptopxl:col-span-3 rounded-md border aspect-w-16 aspect-h-9 bg-red-600 bg-cover bg-no-repeat text-white"
              style={{
                backgroundImage:
                  "url('/images/maxim-hopman-IayKLkmz6g0-unsplash.jpg')",
              }}
            >
              <div className="flex flex-col items-center justify-end group hover:backdrop-blur cursor-pointer">
                <p className="w-full py-2.5 px-4 font-bold transparent-background">
                  Infrastructure Automation
                </p>
                <p className="hidden text-sm py-2 px-4 transparent-background group-hover:block animate__animated animate__fadeInUp animate__fast">
                  Reduce operational cost, lower the potential for human error
                  and deliver services at scale.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-y-4">
          <h4 className="text-2xl font-bold">Cloud</h4>
          <div className="grid grid-cols-12 gap-2">
            <div
              className="col-span-12 mobile:col-span-6 tabletxl:col-span-4 laptopxl:col-span-3 rounded-md border aspect-w-16 aspect-h-9 bg-red-600 bg-cover bg-no-repeat text-white"
              style={{
                backgroundImage: "url('/images/wuz-vTBqLytx6SQ-unsplash.jpg')",
              }}
            >
              <div className="flex flex-col items-center justify-end group hover:backdrop-blur cursor-pointer">
                <p className="w-full py-2.5 px-4 font-bold transparent-background">
                  Cloud Migration
                </p>
                <p className="hidden text-sm py-2 px-4 transparent-background group-hover:block animate__animated animate__fadeInUp animate__fast">
                  Simplify the process of migrating applications and workloads
                  to the right cloud environment for your business.
                </p>
              </div>
            </div>

            <div
              className="col-span-12 mobile:col-span-6 tabletxl:col-span-4 laptopxl:col-span-3 rounded-md border aspect-w-16 aspect-h-9 bg-red-600 bg-cover bg-no-repeat text-white"
              style={{
                backgroundImage:
                  "url('/images/kabiur-rahman-riyad-YzZJUXjb9aw-unsplash.jpg')",
              }}
            >
              <div className="flex flex-col items-center justify-end group hover:backdrop-blur cursor-pointer">
                <p className="w-full py-2.5 px-4 font-bold transparent-background">
                  Cloud Networking
                </p>
                <p className="hidden text-sm py-2 px-4 transparent-background group-hover:block animate__animated animate__fadeInUp animate__fast">
                  Paving the way for connectivity across multiple cloud
                  environments.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-y-4">
          <h4 className="text-2xl font-bold">Data Center</h4>
          <div className="grid grid-cols-12 gap-2">
            <div
              className="col-span-12 mobile:col-span-6 tabletxl:col-span-4 laptopxl:col-span-3 rounded-md border aspect-w-16 aspect-h-9 bg-red-600 bg-cover bg-no-repeat text-white"
              style={{
                backgroundImage:
                  "url('/images/dan-nelson-AvSFPw5Tp68-unsplash.jpg')",
              }}
            >
              <div className="flex flex-col items-center justify-end group hover:backdrop-blur cursor-pointer">
                <p className="w-full py-2.5 px-4 font-bold transparent-background">
                  Data Protection
                </p>
                <p className="hidden text-sm py-2 px-4 transparent-background group-hover:block animate__animated animate__fadeInUp animate__fast">
                  Eliminate complexity across physical, virtual and cloud
                  storage tiers.
                </p>
              </div>
            </div>
            <div
              className="col-span-12 mobile:col-span-6 tabletxl:col-span-4 laptopxl:col-span-3 rounded-md border aspect-w-16 aspect-h-9 bg-red-600 bg-cover bg-no-repeat text-white"
              style={{
                backgroundImage: "url('/images/cdc-_XLJy3h77cw-unsplash.jpg')",
              }}
            >
              <div className="flex flex-col items-center justify-end group hover:backdrop-blur cursor-pointer">
                <p className="w-full py-2.5 px-4 font-bold transparent-background">
                  Facilities Infrastructure
                </p>
                <p className="hidden text-sm py-2 px-4 transparent-background group-hover:block animate__animated animate__fadeInUp animate__fast">
                  Turn-key assessment and installation services designed to
                  ensure facilities are operating at optimal effieciency.
                </p>
              </div>
            </div>
            <div
              className="col-span-12 mobile:col-span-6 tabletxl:col-span-4 laptopxl:col-span-3 rounded-md border aspect-w-16 aspect-h-9 bg-red-600 bg-cover bg-no-repeat text-white"
              style={{
                backgroundImage:
                  "url('/images/pexels-christina-morillo-1181335.jpg')",
              }}
            >
              <div className="flex flex-col items-center justify-end group hover:backdrop-blur cursor-pointer">
                <p className="w-full py-2.5 px-4 font-bold transparent-background">
                  Converged & Hyper-Converged Infrastructure
                </p>
                <p className="hidden text-sm py-2 px-4 transparent-background group-hover:block animate__animated animate__fadeInUp animate__fast">
                  Seamless integrate compute, storage, networking and
                  infrastructure managed software into one optimization
                </p>
              </div>
            </div>
            <div
              className="col-span-12 mobile:col-span-6 tabletxl:col-span-4 laptopxl:col-span-3 rounded-md border aspect-w-16 aspect-h-9 bg-red-600 bg-cover bg-no-repeat text-white"
              style={{
                backgroundImage:
                  "url('/images/christina-wocintechchat-com-glRqyWJgUeY-unsplash.jpg')",
              }}
            >
              <div className="flex flex-col items-center justify-end group hover:backdrop-blur cursor-pointer">
                <p className="w-full py-2.5 px-4 font-bold transparent-background">
                  Server Infrastructure
                </p>
                <p className="hidden text-sm py-2 px-4 transparent-background group-hover:block animate__animated animate__fadeInUp animate__fast">
                  The foundation that holds It/ICT systems together. It
                  includeds physical and virtual resources.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-y-4">
          <h4 className="text-2xl font-bold">Networking</h4>
          <div className="grid grid-cols-12 gap-2">
            <div
              className="col-span-12 mobile:col-span-6 tabletxl:col-span-4 laptopxl:col-span-3 rounded-md border aspect-w-16 aspect-h-9 bg-red-600 bg-cover bg-no-repeat text-white"
              style={{
                backgroundImage:
                  "url('/images/imgix-klWUhr-wPJ8-unsplash.jpg')",
              }}
            >
              <div className="flex flex-col items-center justify-end group hover:backdrop-blur cursor-pointer">
                <p className="w-full py-2.5 px-4 font-bold transparent-background">
                  Data Center Networking
                </p>
                <p className="hidden text-sm py-2 px-4 transparent-background group-hover:block animate__animated animate__fadeInUp animate__fast">
                  It provides the connectivity between servers and data for
                  applications critical to the business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default solutions;
