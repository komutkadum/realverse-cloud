import Link from 'next/link';
import React from 'react';

export default function FourColumn({ title, children }) {
  return (
    <div className="grid gap-y-4">
      <h4 className="text-2xl font-bold">{title}</h4>
      {/* grid done */}
      <div className="grid grid-cols-12 gap-2">{children}</div>
    </div>
  );
}

export function FourColumnContent({ bgImage, title, content = '', href }) {
  return (
    <>
      <Link
        href={href}
        className="col-span-12 mobile:col-span-6 tabletxl:col-span-4 laptopxl:col-span-3 rounded-sm border aspect-w-16 aspect-h-9 bg-red-600 bg-cover bg-no-repeat text-white box-image-shadow"
        style={{
          backgroundImage: `url('${bgImage}')`,
        }}
      >
        <div className="flex flex-col items-center justify-end group hover:backdrop-blur-sm cursor-pointer">
          <h4 className="w-full py-2.5 px-4 font-bold transparent-background">
            {title}
          </h4>
          {content !== '' && (
            <p className="hidden py-2 px-4 text-sm group-hover:block transparent-background animate__animated animate__fadeIn animate__fast">
              {content}
            </p>
          )}
        </div>
      </Link>
    </>
  );
}
