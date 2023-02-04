import React from 'react';

function ScrollToTop() {
  return (
    <a
      href="#top"
      className="fixed bottom-10 right-10 w-10 h-10 border rounded-full flex justify-center items-center z-50 bg-button"
    >
      <i className="fa-solid fa-arrow-up"></i>
    </a>
  );
}

export default ScrollToTop;
