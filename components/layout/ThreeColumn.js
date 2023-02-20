import Link from 'next/link';
import React from 'react';

export default function ThreeColumn({ title, content = '', children }) {
  return (
    <div className="py-6 grid gap-y-6">
      {content === '' ? (
        <h4 className="text-2xl font-bold">{title}</h4>
      ) : (
        <div className="grid gap-y-2">
          <h4 className="text-2xl font-bold">{title}</h4>
          <p className="leading-relaxed ">{content}</p>
        </div>
      )}
      <div className="grid grid-cols-12 gap-2">{children}</div>
    </div>
  );
}

export function ThreeColumnContent({ href, title, content = '', bgImage }) {
  return (
    <Link
      href={href}
      className="col-span-12 mobile:col-span-6 laptopxl:col-span-4 rounded-sm border aspect-w-16 aspect-h-9 bg-red-600 bg-cover bg-no-repeat text-white box-image-shadow"
      style={{
        backgroundImage: `url('${bgImage}')`,
      }}
    >
      <div className="flex flex-col items-center justify-end group hover:backdrop-blur-sm cursor-pointer">
        <h4 className="w-full py-2.5 px-4 font-bold transparent-background">
          {title}
        </h4>
        {content !== '' && (
          <p className="hidden text-sm py-2 px-4 transparent-background group-hover:block animate__animated animate__fadeIn animate__fast">
            {content}
          </p>
        )}
      </div>
    </Link>
  );
}
