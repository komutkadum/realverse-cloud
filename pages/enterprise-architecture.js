/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';
import { PageSEO } from '../components/SEO';
import Accordion from '../components/utility/Accordion';
import CallToAction from '../components/utility/CallToAction';
import CategoryNavigationAbove from '../components/utility/CategoryNavigationAbove';
import CategoryNavigationBelow from '../components/utility/CategoryNavigationBelow';
// images
import eaDiagram from '../public/images/ea-diagram.webp';
import eaMaturityImage from '../public/images/ea-maturity-old.webp';
import eaPicture from '../public/images/ea-pic.webp';

function enterprisearchitecture() {
  return (
    <>
      <PageSEO
        description="Achieve an agile, supported, service-oriented enterprise architecture that empowers IT and the business."
        title="Enterprise Architechture - Realverse Cloud"
      />
      <div className="grid grid-flow-row laptop:grid-flow-col page-padding">
        <CategoryNavigationAbove
          text="Enterprise Architecture"
          desc="Aligning business strategy to IT decision-making"
        />
        <div>
          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">
              The importance of Enterprise Architecture
            </h4>
            <p className=" leading-relaxed  ">
              Growing interdependencies between the business and IT are driving
              a renewed interest in Enterprise Architecture. Yet without the
              right approach, organizations pursuing digital transformation risk
              failure. Especially as Enterprise Architecture has a tendency to
              become too theoretical to drive meaningful outcomes or too focused
              on technology to align with business planning.
            </p>
            <b>
              Our practical approach to Enterprise Architecture avoids these
              pitfalls by balancing actionable projects with a dynamic,
              long-term strategy.
            </b>
          </div>

          <div className="py-6 grid gap-y-2">
            <h4 className="text-xl font-bold">
              The importance of Enterprise Architecture
            </h4>
            <ul className="grid gap-y-4 mx-6 my-2 list-disc">
              <li>
                Accelerate decision-making and delivery of business outcomes
              </li>
              <li>
                Organize and optimize infrastructure to align with business
                goals
              </li>
              <li>Modernize and grow your IT department</li>
              <li>
                Foster collaboration and alignment between business and IT
                leadership to generate tech-enabled innovations and operating
                models
              </li>
            </ul>
          </div>

          <div className="py-6 grid gap-y-2">
            <Image src={eaDiagram} alt="ea diagram" />
          </div>

          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">Think differently</h4>
            <p className=" leading-relaxed  ">
              Our experts take a practical approach to building an Enterprise
              Architecture function that drives positive business results. Learn
              to position Enterprise Architecture in a way that influences key
              strategy, planning and delivery decisions, becoming the connective
              tissue between IT and the business.
            </p>
            <p className=" leading-relaxed  ">
              Using our Enterprise Architecture Maturity Curve framework, we
              work to understand your current state capabilities to help you
              chart a path toward a fully-integrated Enterprise Architecture
              function.
            </p>
            <Image src={eaMaturityImage} className="mt-4" alt="ea maturity" />
          </div>

          <div className="py-6 grid">
            <h4 className="text-2xl font-bold mb-6">
              Expand to explore different stages of maturity
            </h4>
            <Accordion question="Zero State: Siloed solution architecture">
              <ul className="grid gap-y-2 mx-6 my-2 list-disc">
                <li>No Enterprise Architecture team or artifacts</li>
                <li>Disparate solutioning</li>
                <li>Shadow IT</li>
                <li>IT disjointed reactive to business</li>
              </ul>
            </Accordion>
            <Accordion question="Stage One: Technology-focused, ivory tower Enterprise Architecture">
              <ul className="grid gap-y-2 mx-6 my-2 list-disc">
                <li>
                  Enterprise Architecture team in place but not collaborative
                </li>
                <li>Artifacts are "shelfware"</li>
                <li>Mainly technology reference architectures</li>
                <li>No executive buy-in or ownership</li>
              </ul>
            </Accordion>
            <Accordion question="Stage Two: Technology executives own, drive tech strategy">
              <ul className="grid gap-y-2 mx-6 my-2 list-disc">
                <li>Technology now has executive ownership</li>
                <li>Exec strategy drives tech decisions</li>
                <li>Tension created by lack of interaction with business</li>
                <li>Artifacts are accessible</li>
              </ul>
            </Accordion>
            <Accordion question="Stage Three: Business-driven, technology based">
              <ul className="grid gap-y-2 mx-6 my-2 list-disc">
                <li>Business-focused insights and drivers</li>
                <li>Light interactions with business stakeholders</li>
                <li>Business has minimal interest using artifacts</li>
                <li>Artifacts written in technologists' language</li>
                <li>Lack of integration into budget cycle</li>
              </ul>
            </Accordion>
            <Accordion question="Stage Four: Technology and business execs have ownership">
              <ul className="grid gap-y-2 mx-6 my-2 list-disc">
                <li>Both business and tech leaders invested</li>
                <li>As-needed integration with budget cycle</li>
                <li>Minimal messaging to greater organization</li>
                <li>
                  Mature governance processes enforce Enterprise Architecture
                  guidelines
                </li>
                <li>Artifacts written with more focus on business language</li>
              </ul>
            </Accordion>
            <Accordion question="Stage Five: Complete Enterprise Architecture function">
              <ul className="grid gap-y-2 mx-6 my-2 list-disc">
                <li>
                  Enterprise Architecture is fully integrated with business
                  strategy discussions
                </li>
                <li>Tight link between business and tech strategies</li>
                <li>Proactive messaging and communication</li>
                <li>Governance is business outcome-driven</li>
                <li>Enterprise Architecture tightly linked to budget cycle</li>
                <li>
                  Business units leverage Enterprise Architecture artifacts
                </li>
                <li>
                  Enterprise Architecture is connective tissue across tech silos
                </li>
              </ul>
            </Accordion>
          </div>

          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">
              From strategy through delivery
            </h4>
            <p className=" leading-relaxed  ">
              As organizations look to transform the core functionality of IT to
              thrive in today's digital world, the role of Enterprise
              Architecture must not remain solely strategy based.
            </p>
            <p className=" leading-relaxed  ">
              Rather, Enterprise Architecture must become the connective tissue
              between a company's business and IT organizations, playing a
              central role in influencing strategy, planning and delivery
              decisions.
            </p>
            <p className=" leading-relaxed  ">
              Our experts are ready to help, wherever your organization is in
              the journey to a mature Enterprise Architecture.
            </p>
            <Image src={eaPicture} className="mt-4" alt="ea picture" />
          </div>

          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">
              Enterprise Architecture assessments
            </h4>
            <p className=" leading-relaxed  ">
              Whether your organization currently has an Enterprise Architecture
              function or not, our experts can help you kickstart or mature your
              capabilities by building the foundational components of Enterprise
              Architecture while driving quick wins for key business and
              technology initiatives.
            </p>
          </div>

          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">Scale-out engagements</h4>
            <p className=" leading-relaxed  ">
              Once you establish the foundation of your Enterprise Architecture
              plan, we'll help you scale the downstream delivery of technology
              projects and programs by building artifacts and implementing
              roadmaps across the breadth of your technology and business
              domains.
            </p>
          </div>

          <div className="py-6 grid gap-y-2">
            <h4 className="text-2xl font-bold">
              Operational readiness engagements
            </h4>
            <p className=" leading-relaxed  ">
              During operational readiness engagements, our experts deep dive
              into the current state of your business or technology environment
              and identify gaps compared to your desired future state. We also
              recommend which tools and resources to invest in to achieve that
              defined future state.
            </p>
          </div>

          <CallToAction
            buttonText="Learn Why Today"
            text="Enterprise architecture is the key"
          />
        </div>
        <CategoryNavigationBelow
          text="Enterprise Architecture"
          desc="Aligning business strategy to IT decision-making"
        />
      </div>
    </>
  );
}

export default enterprisearchitecture;
