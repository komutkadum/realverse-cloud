import React from 'react';

function ScrollToTop() {
  return (
    <a
      href="#top"
      aria-label="topScroll"
      className="fixed bottom-10 right-10 w-10 h-10 border rounded-full flex justify-center items-center z-50 opacity-80 hover:opacity-100 bg-button"
    >
      <span className="sr-only"></span>
      <i className="fa-solid fa-angle-up"></i>
    </a>
  );
}

export default ScrollToTop;
