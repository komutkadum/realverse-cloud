import React from 'react';
import Footer from './Navigation/Footer';
import Header from './Navigation/Header';
import SideNavigation from './Navigation/SideNavigation';

function LayoutWrapper({ children }) {
  return (
    <>
      <Header />
      <SideNavigation />
      <main className="left-0 tablet:left-[70px] desktop:left-56 absolute overflow-y-scroll top-14 text-gray-800 right-0 bottom-0 pt-10 px-5 tablet:p-10 tablet:px-5 desktop:px-10">
        {children}
        <div>
          <hr className="h-1.5 my-32 mb-20 bg-gradient-to-r from-red-600 to-blue-600" />
          <Footer />
        </div>
      </main>
    </>
  );
}

export default LayoutWrapper;
