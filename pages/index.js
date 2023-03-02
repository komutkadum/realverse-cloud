/* eslint-disable @next/next/no-img-element */
import { PageSEO } from '../components/SEO';

export default function Home() {
  return (
    <>
      <PageSEO
        description="Explore on-demand technology labs, thought leadership and a portfolio of services designed to help IT and the business undergo digital transformation."
        title="Realverse Cloud"
      />

      <div className="w-full duration-200 grid grid-flow-row justify-center tablet:grid-flow-col items-center bg-gradient-to-tr from-sky-800 to-zinc-900 py-16 laptop:py-4  table:px-10 desktop:px-20">
        <div className=" text-white  px-4 tablet:px-10">
          <div className="flex flex-col gap-y-4 justify-center">
            <h1 className="text-2xl tablet:text-3xl font-extrabold">
              Cloud Priorties
            </h1>
            <p className="text-base tablet:text-lg">
              We offer the latest updates and guidance on cloud computing,
              storage, networking, security, and more for both new and
              experienced users.
            </p>
            <div>
              <button className="bg-[#52BDFF]  text-black  hover:bg-sky-600 duration-300 rounded-sm px-6 py-1.5 w-full mobilesm:w-auto">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <aside className="justify-center hidden tablet:flex">
          <img src="/images/intro_image.webp" alt="intro image" />
        </aside>
      </div>

      <div className="page-padding"></div>
    </>
  );
}
