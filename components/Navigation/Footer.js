import React from 'react';

function Footer() {
  return (
    <div>
      <div className="grid grid-cols-12 items-center gap-y-10 justify-between text-sm">
        <div className="col-span-12 laptop:col-span-4">
          <img src="/images/hello.png" className="" alt="" />
          <div className="block laptop:hidden">
            © 2023 Realverse Cloud - Realverse Proptech Pvt Limited. All Rights
            Reserved
          </div>
        </div>
        <div className="col-span-12 laptop:col-span-8 grid grid-cols-12 gap-y-6">
          <ul className="grid  gap-y-6 col-span-6 laptop:col-span-12 laptop:flex laptop:flex-wrap gap-x-6 laptop:gap-y-6 laptop:justify-end">
            <li>About</li>
            <li>Careers</li>
            <li>Locations</li>
            <li>Contact Us</li>
          </ul>
          <ul className="grid  gap-y-6 col-span-6 laptop:col-span-12 laptop:flex laptop:flex-wrap gap-x-6 laptop:gap-y-6 laptop:justify-end">
            <li>Privacy Policy</li>
            <li>Acceptable Use Policy</li>
            <li>Quality</li>
            <li>Information Security</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>
      <div className="py-8 pb-12 text-xs flex justify-between items-center">
        <div className="hidden laptop:block">
          © 2023 Realverse Cloud - Realverse Proptech Pvt Limited. All Rights
          Reserved
        </div>
        <div className="flex justify-center laptop:justify-end w-full gap-x-6 text-2xl">
          <div>
            <i className="fa-brands fa-linkedin cursor-pointer hover:text-blue-500 duration-300"></i>
          </div>
          <div>
            <i className="fa-brands fa-twitter cursor-pointer hover:text-sky-400 duration-300"></i>
          </div>
          <div>
            <i className="fa-brands fa-facebook cursor-pointer hover:text-blue-600 duration-300"></i>
          </div>
          <div>
            <i className="fa-brands fa-youtube cursor-pointer hover:text-red-600 duration-300"></i>
          </div>
          <div>
            <i className="fa-brands fa-instagram cursor-pointer hover:text-orange-600 duration-300"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;