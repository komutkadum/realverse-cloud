import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import AboutNavigationModal from './AboutNavigationModal';

function AboutNavigation() {
  const [moreDropdown, setMoreDropdown] = useState(false);
  const router = useRouter();
  return (
    <>
      <ul className="flex border-b relative border-gray-400 w-full">
        <Link
          href="/about/overview"
          className={`px-5 hover:font-bold ${
            router.pathname == '/about/overview'
              ? 'border-sky-700 border-b-4 font-bold'
              : 'hidden mobilesm:inline-flex'
          } py-1.5`}
        >
          <li>Overview</li>
        </Link>
        <Link
          href="/about/our-work"
          className={`px-5 hover:font-bold ${
            router.pathname == '/about/our-work'
              ? 'border-sky-700 border-b-4 font-bold'
              : 'hidden mobilesm:inline-flex'
          } py-1.5`}
        >
          <li>Our&nbsp;Work</li>
        </Link>
        <Link
          href="/about/culture"
          className={`px-5 hover:font-bold ${
            router.pathname == '/about/culture'
              ? 'border-sky-700 border-b-4 font-bold'
              : 'hidden mobilesm:inline-flex'
          } py-1.5`}
        >
          <li>Culture</li>
        </Link>
        <Link
          href="/about/leadership"
          className={`px-5 hover:font-bold ${
            router.pathname == '/about/leadership'
              ? 'border-sky-700 border-b-4 font-bold'
              : 'hidden mobilesm:inline-flex'
          } py-1.5`}
        >
          <li>Leadership</li>
        </Link>

        <li className="px-5 py-1.5  inline-flex mobilesm:hidden">
          <button
            className="hover:font-bold"
            onClick={() => setMoreDropdown((prev) => !prev)}
          >
            More&nbsp;&nbsp;
            {moreDropdown ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-ellipsis"></i>
            )}
          </button>
          <AboutNavigationModal
            isOpen={moreDropdown}
            onClose={() => setMoreDropdown(false)}
          />
        </li>
      </ul>
    </>
  );
}

export default AboutNavigation;
