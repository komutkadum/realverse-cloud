import Link from 'next/link';
import React from 'react';
import FourColumn, {
  FourColumnContent,
} from '../../components/layout/FourColumn';
import { PageSEO } from '../../components/SEO';

function solutions() {
  return (
    <>
      <PageSEO
        description="Corporate website for Realverse Cloud - Realverse proptech private limited"
        title="Realverse Cloud - Solutions"
      />
      <div className="page-padding">
        <h1 className="text-4xl pb-6">Explore</h1>
        <ul className="flex border-b border-gray-400 w-full">
          <li className="px-5 border-b-4 border-sky-700 font-bold py-1.5">
            Solutions
          </li>
          <Link href="/explore/services#top">
            <li className="px-5 py-1.5">Services</li>
          </Link>
        </ul>
        <p className="py-6 leading-relaxed">
          From user end-points such as laptops, desktops and smartphones to
          servers, virtualization, cloud computing and IT optimization. Our
          managed IT services are provided by an engineering team that is not
          only highly skilled, but constantly upgrading their own certifications
          in the dynamic and ever-changing technology field to better serve you.
        </p>
        <FourColumn title="Featured Solutions">
          <FourColumnContent
            title="Automation and orchestration"
            content="Learn about automated infrastructure, platforms & operations."
            bgImage="/images/turn-on-2923046_1920.jpg"
            href="/category/automation-and-orchestration/overview#top"
          />
          <FourColumnContent
            title="Cloud"
            content="Unlock cloud' potential to transform your business, from
            strategy through implementation and beyond..."
            bgImage="/images/businessman-1176006_1920.jpg"
            href="/category/cloud/overview#top"
          />
          <FourColumnContent
            title="Data Center"
            content="Learn about data protection, facilities infrastructure,
            converged & hyperconverged infrastructure."
            bgImage="/images/electrical-2476782_1920.jpg"
            href="/category/data-center/overview#top"
          />
          <FourColumnContent
            title="Networking"
            content="Accelerate your organization' path to a global
            connectivity architechture that enforces security..."
            bgImage="/images/fiber-4814456_1920.jpg"
            href="/category/networking/overview#top"
          />
        </FourColumn>

        <hr className="border-b bg-sky-400 my-16" />

        <div className="grid gap-y-12">
          <FourColumn title="Automation and orchestration">
            <FourColumnContent
              title="DevOps"
              content="Combining people, processess and technology to enable the
              continuous delivery of value to end users."
              bgImage="/images/devops-3155972_1920.jpg"
              href=""
            />
            <FourColumnContent
              title="Infrastructure Automation"
              content="Reduce operational cost, lower the potential for human error and deliver services at scale."
              bgImage="/images/maxim-hopman-IayKLkmz6g0-unsplash.jpg"
              href=""
            />
          </FourColumn>
          <FourColumn title="Cloud">
            <FourColumnContent
              title="Cloud Migration"
              content="Simplify the process of migrating applications and workloads to the right cloud environment for your business."
              bgImage="/images/wuz-vTBqLytx6SQ-unsplash.jpg"
              href=""
            />
            <FourColumnContent
              title="Cloud Networking"
              content="Paving the way for connectivity across multiple cloud environments."
              bgImage="/images/kabiur-rahman-riyad-YzZJUXjb9aw-unsplash.jpg"
              href=""
            />
          </FourColumn>
          <FourColumn title="Data Center">
            <FourColumnContent
              title="Data Protection"
              content="Eliminate complexity across physical, virtual and cloud
                    storage tiers."
              bgImage="/images/dan-nelson-AvSFPw5Tp68-unsplash.jpg"
              href=""
            />
            <FourColumnContent
              title="Facilities Infrastructure"
              content="Turn-key assessment and installation services designed to
              ensure facilities are operating at optimal effieciency."
              bgImage="/images/cdc-_XLJy3h77cw-unsplash.jpg"
              href=""
            />
            <FourColumnContent
              title="Converged & Hyper-Converged Infrastructure"
              content="Seamless integrate compute, storage, networking and
              infrastructure managed software into one optimization"
              bgImage="/images/pexels-christina-morillo-1181335.jpg"
              href=""
            />
            <FourColumnContent
              title="Server Infrastructure"
              content="The foundation that holds It/ICT systems together. It
                    includeds physical and virtual resources."
              bgImage="/images/christina-wocintechchat-com-glRqyWJgUeY-unsplash.jpg"
              href=""
            />
          </FourColumn>
          <FourColumn title="Networking">
            <FourColumnContent
              title="Data Center Networking"
              content="It provides the connectivity between servers and data for
                    applications critical to the business."
              bgImage="/images/imgix-klWUhr-wPJ8-unsplash.jpg"
              href=""
            />
          </FourColumn>
        </div>
      </div>
    </>
  );
}

export default solutions;
