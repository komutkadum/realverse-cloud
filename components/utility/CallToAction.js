import Link from 'next/link';
import React from 'react';

function CallToAction({ text, buttonText }) {
  return (
    <Link
      href="/contact-us"
      className="py-6 flex flex-col  mobile:flex-row gap-y-4 items-center bg-sky-100 text-center mobile:justify-between px-5"
    >
      <h1 className="text-sky-900 text-2xl font-bold">{text}</h1>
      <button className="bg-sky-700 hover:bg-sky-800 duration-300 font-medium rounded-sm  text-white px-4 py-2">
        {buttonText}
      </button>
    </Link>
  );
}

export default CallToAction;
