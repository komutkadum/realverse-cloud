/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React from 'react';
import FourColumn, {
  FourColumnContent,
} from '../../components/layout/FourColumn';
import { PageSEO } from '../../components/SEO';

function services() {
  return (
    <>
      <PageSEO
        description="Corporate website for Realverse Cloud - Realverse proptech private limited"
        title="Realverse Cloud - Services"
      />
      <div className="page-padding">
        <h1 className="text-4xl pb-6">Explore</h1>
        <ul className="flex border-b border-gray-400 w-full">
          <Link href="/explore/solutions">
            <li className="px-5  py-1.5">Solutions</li>
          </Link>
          <li className="px-5 py-1.5 border-b-4 border-sky-700 font-bold">
            Services
          </li>
        </ul>
        <p className="py-6 leading-relaxed">
          Our comprehensive services portfolio is designed to help at every
          stage of your journey to digital transformation. From idea to outcome,
          you won't find another partner who combines strategic consulting
          expertise with the ability to seamlessly execute complex IT
          deployments worldwide. Explore the many ways WWT Services can deliver
          tangible outcomes for your business.
        </p>

        <FourColumn title="Realverse Cloud Services">
          <FourColumnContent
            title="Consulting Services"
            content="Combining the insights of a traditional consulting firm with
            the ability to execute complex infrastructure solutions."
            bgImage="/bgImages/consulting-services.webp"
            href="/service/consulting-services/overview"
          />
          <FourColumnContent
            title="Infrastructure Services"
            content="Assessing today's technology, designing tommorow's solutions
            and seamlessly deploying critical invest...."
            bgImage="/bgImages/infrastructure-services.webp"
            href="/service/infrastructure-services/overview"
          />
        </FourColumn>

        <hr className="border-b bg-sky-400 my-16" />

        <div className="grid gap-y-12">
          <FourColumn title="Consulting Services">
            <FourColumnContent
              bgImage="/bgImages/cloud.webp"
              title="Cloud Services"
              href="/category/cloud/overview"
            />
            <FourColumnContent
              bgImage="/bgImages/enterprise-architecture.webp"
              title="Enterprise Architechture Services"
              href="/enterprise-architecture"
            />
          </FourColumn>
          <FourColumn title="Infrastructure Services">
            <FourColumnContent
              bgImage="/bgImages/command-center.webp"
              title="Command Center"
              href=""
            />
            <FourColumnContent
              bgImage="/bgImages/sdn.webp"
              title="Service Delivery Management"
              href=""
            />
            <FourColumnContent
              bgImage="/bgImages/it-management-services.webp"
              title="IT Managed Services"
              href=""
            />
          </FourColumn>
        </div>
      </div>
    </>
  );
}

export default services;
