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
          <Link href="/explore/solutions#top">
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
            bgImage="/images/turn-on-2923046_1920.jpg"
            href="/service/consulting-services/overview#top"
          />
          <FourColumnContent
            title="Infrastructure Services"
            content="Assessing today's technology, designing tommorow's solutions
            and seamlessly deploying critical invest...."
            bgImage="/images/businessman-1176006_1920.jpg"
            href="/service/infrastructure-services/overview#top"
          />
        </FourColumn>

        <hr className="border-b bg-sky-400 my-16" />

        <div className="grid gap-y-12">
          <FourColumn title="Consulting Services">
            <FourColumnContent
              bgImage="/images/devops-3155972_1920.jpg"
              title="Cloud Services"
              href="/category/cloud/overview#top"
            />
            <FourColumnContent
              bgImage="/images/maxim-hopman-IayKLkmz6g0-unsplash.jpg"
              title="Enterprise Architechture Services"
              href="/enterprise-architecture#top"
            />
          </FourColumn>
          <FourColumn title="Infrastructure Services">
            <FourColumnContent
              bgImage="/images/wuz-vTBqLytx6SQ-unsplash.jpg"
              title="Command Center"
              href=""
            />
            <FourColumnContent
              bgImage="/images/kabiur-rahman-riyad-YzZJUXjb9aw-unsplash.jpg"
              title="Service Delivery Management"
              href=""
            />
            <FourColumnContent
              bgImage="/images/kabiur-rahman-riyad-YzZJUXjb9aw-unsplash.jpg"
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
