import React from 'react';

function Accordion({ question, children }) {
  return (
    <details className="border-t border-b">
      <summary className=" rounded  cursor-pointer flex items-center justify-between w-full p-4 focus:outline-none">
        <p className=" font-bold font-header">{question}</p>
        <div className="flex items-center  justify-center w-8 h-8 ">
          <i className="fa-solid fa-angle-down"></i>
        </div>
      </summary>
      <div className="p-2 px-4 pt-0 ">{children}</div>
    </details>
  );
}

export default Accordion;
