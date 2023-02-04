import Link from 'next/link';
import React from 'react';

function CallToAction({ text, buttonText }) {
  return (
    <Link
      href="/contact-us#top"
      className="py-6 flex flex-col  mobile:flex-row gap-y-4 items-center bg-indigo-100 text-center mobile:justify-between px-5"
    >
      <h1 className="text-indigo-900 text-2xl font-bold">{text}</h1>
      <button className="bg-indigo-800 hover:bg-indigo-900 duration-200 font-medium rounded-md text-white px-4 py-2">
        {buttonText}
      </button>
    </Link>
  );
}

export default CallToAction;
