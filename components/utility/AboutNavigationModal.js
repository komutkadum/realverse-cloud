import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function AboutNavigationModal({ isOpen, onClose }) {
  const router = useRouter();
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 backdrop-blur left-0 bottom-0 right-0 z-[60]"></div>
      )}
      <div
        className={`fixed shadow-2xl left-1/2 grid gap-y-4 w-full  bg-[#fff] z-[60] ${
          isOpen ? '-bottom-1' : '-bottom-[250px]'
        } -translate-x-1/2 duration-300 ease-in-out }'`}
      >
        <div className="flex py-4 border-b justify-between items-center border-gray-300 px-6">
          <h1 className="text-xl font-bold">Select An option</h1>
          <button onClick={onClose} className="text-2xl">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className={`grid w-full pb-10 gap-y-3 px-6 text-black`}>
          <Link
            href="/about/overview"
            className={`py-2 ${
              router.pathname == '/about/overview' ? 'hidden' : 'inline'
            }`}
          >
            Overview
          </Link>
          <Link
            href="/about/our-work"
            className={`py-2 ${
              router.pathname == '/about/our-work' ? 'hidden' : 'inline'
            }`}
          >
            Our Work
          </Link>
          <Link
            href="/about/culture"
            className={`py-2 ${
              router.pathname == '/about/culture' ? 'hidden' : 'inline'
            }`}
          >
            Culture
          </Link>
          <Link
            href="/about/leadership"
            className={`py-2 ${
              router.pathname == '/about/leadership' ? 'hidden' : 'inline'
            }`}
          >
            Leadership
          </Link>
        </div>
      </div>
    </>
  );
}
