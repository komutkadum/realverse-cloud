import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { PageSEO } from '../components/SEO';
import Loader from '../components/utility/Loader';

function ContactUs() {
  const [checkSubmitted, setCheckSubmitted] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      organization: '',
      phone: '',
      jobTitle: '',
      contactType: '',
      description: '',
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      email: Yup.string()
        .email('invalid email address')
        .required('email is required'),
      organization: Yup.string().required('Organization name is required'),
      phone: Yup.number().required('phone number required'),
      jobTitle: Yup.string().required('job title required'),
      description: Yup.string().required('description is required'),
    }),

    onSubmit: (values, { setSubmitting }) => {
      axios
        .post('/api/sendmail', values)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
        .finally(() => setSubmitting(false));
    },
  });

  return (
    <>
      <PageSEO
        description="Contact Realverse Cloud to explore solutions in network, mobility, collaboration, security, compute and cloud, storage, big data and more."
        title="Contact Us - Realverse Cloud"
      />
      <div className="w-full bg-gradient-to-r from-sky-800 to-pink-900 py-20 mobile:py-28 desktop:py-48"></div>
      <div className="grid grid-cols-12 text-black page-padding ">
        <div className="col-span-12 laptoplg:col-span-7 grid gap-y-4 ">
          <form
            className="col-span-6 grid gap-x-4 gap-y-6 text-left"
            onSubmit={formik.handleSubmit}
            method="post"
          >
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
                <label className="text-sm font-semibold">
                  First Name<span className="text-red-600 ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  className="rounded"
                  required
                />
              </div>
              <div className="grid col-span-12 mobile:col-span-6 gap-y-2 mobile:gap-y-2">
                <label className="text-sm font-semibold">
                  Last Name<span className="text-red-600 ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  className="rounded"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6 gap-y-4">
              <div className="grid col-span-12 mobile:col-span-6 gap-y-2 mobile:gap-y-2">
                <label className="text-sm font-semibold">
                  Email Address<span className="text-red-600 ml-1">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className="rounded"
                  required
                />
              </div>
              <div className="grid col-span-12 mobile:col-span-6 gap-y-2 mobile:gap-y-2">
                <label className="text-sm font-semibold">
                  Organization<span className="text-red-600 ml-1">*</span>{' '}
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formik.values.organization}
                  onChange={formik.handleChange}
                  className="rounded"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6 gap-y-4">
              <div className="grid col-span-12 mobile:col-span-6 gap-y-2 mobile:gap-y-2">
                <label className="text-sm font-semibold">
                  Phone Number<span className="text-red-600 ml-1">*</span>
                </label>
                <input
                  type="number"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  className="rounded"
                  required
                />
              </div>
              <div className="grid col-span-12 mobile:col-span-6 gap-y-2 mobile:gap-y-2">
                <label className="text-sm font-semibold">
                  Job Title<span className="text-red-600 ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formik.values.jobTitle}
                  onChange={formik.handleChange}
                  className="rounded"
                  required
                />
              </div>
            </div>
            <div className="grid  gap-x-6 gap-y-2">
              <label className="text-sm font-semibold">
                Contact Type<span className="text-red-600 ml-1">*</span>
              </label>
              <select
                className="rounded"
                required
                name="contactType"
                value={formik.values.contactType}
                onChange={formik.handleChange}
              >
                <option value="">Select an option</option>
                <option value="general inquiry">General inquiry</option>
                <option value="engage realverse cloud sales">
                  Engage Realverse Cloud Sales
                </option>
                <option value="somethings is broken">
                  Something is broken
                </option>
                <option value="enhancement request">Enhancement request</option>
              </select>
            </div>
            <div className="grid  gap-x-6 gap-y-2">
              <label className="text-sm font-semibold">
                Description<span className="text-red-600 ml-1">*</span>
              </label>
              <textarea
                rows="6"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                className="rounded"
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="border py-2 px-4 tablet:py-2.5 duration-200 tablet:px-8 text-white inline-flex bg-sky-700 hover:bg-sky-800 rounded"
              >
                {formik.isSubmitting ? <Loader /> : <>Sumbit</>}
              </button>
            </div>
          </form>
        </div>
        <div className="col-span-12 sticky top-14 laptoplg:col-span-5"></div>
      </div>
    </>
  );
}

export default ContactUs;
