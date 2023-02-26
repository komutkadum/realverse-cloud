/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import Footer from './Navigation/Footer';
import Header from './Navigation/Header';
import MobileNavigation from './Navigation/MobileNavigation';
import SideNavigation from './Navigation/SideNavigation';
import ScrollToTop from './utility/ScrollToTop';

function LayoutWrapper({ children }) {
  const [navOpen, setNavOpen] = useState(false);
  const [firstAccordion, setFirstAccordion] = useState(true);
  const [secondAccordion, setSecondAccordion] = useState(true);
  const router = useRouter();
  const topref = useRef();

  useEffect(() => {
    setNavOpen(false);
    setFirstAccordion(true);
    setSecondAccordion(true);
    topref.current.scrollIntoView(true);
  }, [router]);

  return (
    <>
      <ScrollToTop />
      <Header navOpen={navOpen} setNavOpen={setNavOpen} />
      <SideNavigation />
      <main className="left-0  tablet:left-[70px] desktop:left-56 absolute overflow-y-scroll top-14 text-gray-800 right-0 bottom-0 ">
        {/* top div for scrolltotop button */}
        <div id="top" ref={topref} className="-top-20 absolute"></div>
        {children}
        <div>
          <hr className="h-1.5 my-32 mb-20 bg-gradient-to-r from-sky-600 to-red-800" />
          <Footer />
        </div>
      </main>
      {/* mobile navigation menu */}
      <MobileNavigation
        navOpen={navOpen}
        firstAccordion={firstAccordion}
        setFirstAccordion={setFirstAccordion}
        secondAccordion={secondAccordion}
        setSecondAccordion={setSecondAccordion}
      />
    </>
  );
}

export default LayoutWrapper;
