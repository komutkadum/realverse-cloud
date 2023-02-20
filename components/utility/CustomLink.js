import Link from 'next/link';
import React from 'react';

function CustomLink({ href, text }) {
  return (
    <Link href={href} className="link-underline-animation-top group">
      {text}
      <span class="link-underline-animation-body"></span>
    </Link>
  );
}

export default CustomLink;
