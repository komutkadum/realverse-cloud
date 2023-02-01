import React from 'react';

function Footer() {
  return (
    <div>
      <div class=" hidden flex-col justify-start items-start laptop:flex-row laptop:justify-between laptop:items-center text-sm">
        <div class="">
          <img src="images/hello.png" class="" alt="" />
        </div>
        <div class="grid gap-y-10 font-thin text-gray-500 text-right">
          <ul class="flex justify-end gap-x-6">
            <li>About</li>
            <li>Careers</li>
            <li>Locations</li>
            <li>Contact Us</li>
          </ul>
          <ul class="flex justify-end gap-x-6">
            <li>Privacy Policy</li>
            <li>Acceptable Use Policy</li>
            <li>Quality</li>
            <li>Information Security</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>
      <div class="py-8 pb-12 text-xs flex justify-between items-center">
        <div>
          © 2023 Realverse Cloud - Realverse Proptech Pvt Limited. All Rights
          Reserved
        </div>
        <div class="flex gap-x-6 text-2xl">
          <div>
            <i class="fa-brands fa-linkedin cursor-pointer hover:text-blue-500 duration-300"></i>
          </div>
          <div>
            <i class="fa-brands fa-twitter cursor-pointer hover:text-sky-400 duration-300"></i>
          </div>
          <div>
            <i class="fa-brands fa-facebook cursor-pointer hover:text-blue-600 duration-300"></i>
          </div>
          <div>
            <i class="fa-brands fa-youtube cursor-pointer hover:text-red-600 duration-300"></i>
          </div>
          <div>
            <i class="fa-brands fa-instagram cursor-pointer hover:text-orange-600 duration-300"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
