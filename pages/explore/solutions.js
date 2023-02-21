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
      <div className="page-padding scroll-smooth">
        <h1 className="text-4xl pb-6">Explore</h1>
        <ul className="flex border-b border-gray-400 w-full">
          <li className="px-5 border-b-4 border-sky-700 font-bold py-1.5">
            Solutions
          </li>
          <Link href="/explore/services">
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
            bgImage="/bgImages/automation-and-orchestration.webp"
            href="/category/automation-and-orchestration/overview"
          />
          <FourColumnContent
            title="Cloud"
            content="Unlock cloud' potential to transform your business, from
            strategy through implementation and beyond."
            bgImage="/bgImages/cloud.webp"
            href="/category/cloud/overview"
          />
          <FourColumnContent
            title="Data Center"
            content="Learn about data protection, facilities infrastructure, hyper-converged infrastructure (HCI), primary storage and server infrastructure."
            bgImage="/bgImages/data-center.webp"
            href="/category/data-center/overview"
          />
          <FourColumnContent
            title="Networking"
            content="Accelerate your organization's path to a global connectivity architecture that enforces security, encourages productivity and enhances user experience."
            bgImage="/bgImages/networking.webp"
            href="/category/networking/overview"
          />
        </FourColumn>

        <hr className="border-b bg-sky-400 my-16" />

        <div className="grid gap-y-12">
          <FourColumn title="Automation and orchestration">
            <FourColumnContent
              title="DevOps"
              content="Combining people, processes and technology to enable the continuous delivery of value to end users."
              bgImage="/bgImages/devops.webp"
              href="/topic/devops/overview"
            />
            <FourColumnContent
              title="Infrastructure Automation"
              content="Reduce operational costs, lower the potential for human error and deliver services at scale that support your organization's success."
              bgImage="/bgImages/infrastructure-automation.webp"
              href="/topic/infrastructure-automation/overview"
            />
          </FourColumn>
          <FourColumn title="Cloud">
            <FourColumnContent
              title="Cloud Migration"
              content="Simplify the process of migrating applications and workloads to the right cloud environment for your business."
              bgImage="/bgImages/cloud-migration.webp"
              href="/topic/cloud-migration/overview"
            />
            <FourColumnContent
              title="Cloud Networking"
              content="Paving the way for connectivity across multiple cloud environments."
              bgImage="/bgImages/cloud-networking.webp"
              href="/topic/cloud-networking/overview"
            />
          </FourColumn>
          <FourColumn title="Data Center">
            <FourColumnContent
              title="Data Protection"
              content="Eliminate complexity across physical, virtual and cloud storage tiers while developing strategies to control data volume growth and streamline how you store, manage and leverage data assets."
              bgImage="/bgImages/data-protection.webp"
              href="/topic/data-protection/overview"
            />
            <FourColumnContent
              title="Facilities Infrastructure"
              content="Turn-key assessment and installation services designed to ensure facilities are operating at optimal efficiency and can support organizational growth needs."
              bgImage="/bgImages/facilities-infrastructure.webp"
              href="/topic/facilities-infrastructure/overview"
            />
            <FourColumnContent
              title="Converged & Hyper-Converged Infrastructure"
              content="Seamlessly integrate compute, storage, networking and infrastructure management software into one optimized platform."
              bgImage="/bgImages/hyper-converged-infrastructure.webp"
              href="/topic/hyper-converged-infrastructure/overview"
            />
            <FourColumnContent
              title="Server Infrastructure"
              content="The foundation that holds IT/ICT systems together. Server infrastructure includes physical and virtual resources across hardware, software, network resources and related services."
              bgImage="/bgImages/server-infrastructure.webp"
              href="/topic/server-infrastructure/overview"
            />
          </FourColumn>
          <FourColumn title="Networking">
            <FourColumnContent
              title="Data Center Networking"
              content="It provides the connectivity between servers and data for
                    applications critical to the business."
              bgImage="/bgImages/data-center-networking.webp"
              href="/topic/data-center-networking/overview"
            />
          </FourColumn>
        </div>
      </div>
    </>
  );
}

export default solutions;
