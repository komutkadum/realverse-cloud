import Image from 'next/image';
import React from 'react';
import notFoundImage from '../public/images/not-found.jpg';

function NotFoundPage() {
  return (
    <>
      <div className="flex w-full justify-center ">
        <Image src={notFoundImage} alt="404 image" />
      </div>
    </>
  );
}

export default NotFoundPage;
