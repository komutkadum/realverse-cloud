import React from 'react';

function contactus() {
  return (
    <>
      <div className="grid grid-cols-12 text-black">
        <div className="col-span-12 laptoplg:col-span-7 grid gap-y-4 ">
          <form className="col-span-6 grid gap-x-4 gap-y-6 text-left mobile:text-justify">
            <div className="grid gap-y-4">
              <h1 className="text-4xl">Contact Us</h1>
              <h3 className="text-2xl">Questions? We’ve got answers</h3>
              <p>
                Each organization is unique. We’ll take the time to understand
                your IT environment and explore possible solutions. Start by
                filling out the form, and we’ll be in touch soon.
              </p>
            </div>
            <div className="grid grid-cols-12 gap-x-6 gap-y-4">
              <div className="grid col-span-12 mobile:col-span-6 gap-y-2 mobile:gap-y-2">
                <label className="text-sm font-semibold">First Name</label>
                <input type="text" className="rounded" />
              </div>
              <div className="grid col-span-12 mobile:col-span-6 gap-y-2 mobile:gap-y-2">
                <label className="text-sm font-semibold">Last Name</label>
                <input type="text" className="rounded" />
              </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6 gap-y-4">
              <div className="grid col-span-12 mobile:col-span-6 gap-y-2 mobile:gap-y-2">
                <label className="text-sm font-semibold">
                  Email Address<span className="text-red-600 ml-1">*</span>
                </label>
                <input type="text" className="rounded" />
              </div>
              <div className="grid col-span-12 mobile:col-span-6 gap-y-2 mobile:gap-y-2">
                <label className="text-sm font-semibold">
                  Organization<span className="text-red-600 ml-1">*</span>{' '}
                </label>
                <input type="text" className="rounded" />
              </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6 gap-y-4">
              <div className="grid col-span-12 mobile:col-span-6 gap-y-2 mobile:gap-y-2">
                <label className="text-sm font-semibold">
                  Phone Number<span className="text-red-600 ml-1">*</span>
                </label>
                <input type="text" className="rounded" />
              </div>
              <div className="grid col-span-12 mobile:col-span-6 gap-y-2 mobile:gap-y-2">
                <label className="text-sm font-semibold">Job Title</label>
                <input type="text" className="rounded" />
              </div>
            </div>
            <div className="grid  gap-x-6 gap-y-2">
              <label className="text-sm font-semibold">Contact Type</label>
              <select className="rounded">
                <option>Select an option</option>
                <option>General inquiry</option>
                <option>Engage Realverse Cloud Sales</option>
                <option>Something is broken</option>
                <option>Enhancement request</option>
              </select>
            </div>
            <div className="grid  gap-x-6 gap-y-2">
              <label className="text-sm font-semibold">
                Description<span className="text-red-600 ml-1">*</span>
              </label>
              <textarea rows="6" className="rounded" />
            </div>
            <div className="flex justify-end">
              <button className="border py-2 px-4 tablet:py-4 tablet:px-8 text-white inline-flex bg-blue-600 hover:bg-blue-800 rounded">
                Sumbit
              </button>
            </div>
          </form>
        </div>
        <div className="col-span-12 sticky top-14 laptoplg:col-span-5"></div>
      </div>
    </>
  );
}

export default contactus;
