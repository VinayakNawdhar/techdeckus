"use client";
import React, { useEffect } from "react";
import Head from "next/head";

import Navbar from "../components/navbar";

import Footer from "../components/footer";

const OurPartners = (props) => {
  useEffect(() => {
    let elements = document.querySelectorAll("[data-menu]");
    for (let i = 0; i < elements.length; i++) {
      let main = elements[i];

      main.addEventListener("click", function () {
        let element = main.parentElement.parentElement;
        let indicators = main.querySelectorAll("img");
        let child = element.querySelector("#menu");
        let h = element.querySelector("#mainHeading>div>p");

        h.classList.toggle("font-semibold");
        child.classList.toggle("hidden");
        // console.log(indicators[0]);
        indicators[0].classList.toggle("rotate-180");
      });
    }
  });
  return (
    <>
      <div className="our-partners-container">
        <Head>
          <title>Our-partners - TechDeck US</title>
          <meta
            property="og:title"
            content="Our-partners - TechDeck US"
          />
        </Head>
        <Navbar rootClassName="navbar-root-class-name3"></Navbar>
        <div className="w-full">
          <div className="lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
            <h1 className="text-center dark:text-white lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">
              Frequently Asked Questions
            </h1>
            <div className="lg:w-8/12 w-full mx-auto mt-10">
              <div className="w-full md:px-6">
                <div
                  id="mainHeading"
                  className="flex justify-between items-center w-full"
                >
                  <div className="">
                    <p className="flex justify-center items-center dark:text-white font-medium text-base leading-6 md:leading-4 text-gray-800">
                      <span className="lg:mr-6 mr-4 dark:text-white lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                        Q1.
                      </span>{" "}
                      Is Tech Deck US experience. What IT services does Tech
                      Deck US provide?
                    </p>
                  </div>
                  <button
                    aria-label="toggler"
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                    data-menu
                  >
                    <img
                      className="transform dark:hidden "
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                      alt="toggler"
                    />
                    <img
                      className="transform dark:block hidden "
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2dark.svg"
                      alt="toggler"
                    />
                  </button>
                </div>
                <div id="menu" className="hidden mt-6 w-full">
                  <p className="text-base leading-6 text-gray-600 dark:text-gray-300 font-normal">
                    Tech Deck US offers a wide range of IT services including
                    network infrastructure setup, cloud computing solutions,
                    cybersecurity services, data analytics, software
                    development, IT consulting, and managed IT services.
                  </p>
                </div>
              </div>

              <hr className="w-full lg:mt-10 my-8" />

              <div className="w-full md:px-6">
                <div
                  id="mainHeading"
                  className="flex justify-between items-center w-full"
                >
                  <div className="">
                    <p className="flex justify-center items-center dark:text-white font-medium text-base leading-6 lg:leading-4 text-gray-800">
                      <span className="lg:mr-6 dark:text-white mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                        Q2.
                      </span>{" "}
                      How can Tech Deck US's IT solutions benefit my business?
                    </p>
                  </div>
                  <button
                    aria-label="toggler"
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                    data-menu
                  >
                    <img
                      className="transform dark:hidden "
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                      alt="toggler"
                    />
                    <img
                      className="transform dark:block hidden "
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2dark.svg"
                      alt="toggler"
                    />
                  </button>
                </div>
                <div id="menu" className="hidden mt-6 w-full">
                  <p className="text-base leading-6 text-gray-600 dark:text-gray-300 font-normal">
                    Our IT solutions are designed to enhance operational
                    efficiency, improve cybersecurity posture, streamline
                    workflows, and leverage technology to drive business growth.
                    Whether you're a small startup or a large enterprise, we
                    have scalable solutions to meet your specific needs.
                  </p>
                </div>
              </div>

              <hr className="w-full lg:mt-10 my-8" />

              <div className="w-full md:px-6">
                <div
                  id="mainHeading"
                  className="flex justify-between items-center w-full"
                >
                  <div className="">
                    <p className="flex justify-center items-center dark:text-white font-medium text-base leading-6 lg:leading-4 text-gray-800">
                      <span className="lg:mr-6 dark:text-white mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                        Q3.
                      </span>
                      Is Tech Deck US experienced in working with businesses in
                      various industries?
                    </p>
                  </div>
                  <button
                    aria-label="toggler"
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                    data-menu
                  >
                    <img
                      className="transform dark:hidden "
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                      alt="toggler"
                    />
                    <img
                      className="transform dark:block hidden "
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2dark.svg"
                      alt="toggler"
                    />
                  </button>
                </div>
                <div id="menu" className="hidden mt-6 w-full">
                  <p className="text-base leading-6 text-gray-600 dark:text-gray-300 font-normal">
                    Yes, Tech Deck US has extensive experience working with
                    clients across different industries including healthcare,
                    finance, education, manufacturing, and more. We tailor our
                    solutions to address industry-specific challenges and
                    requirements.
                  </p>
                </div>
              </div>

              <hr className="w-full lg:mt-10 my-8" />

              <div className="w-full md:px-6">
                <div
                  id="mainHeading"
                  className="flex justify-between items-center w-full"
                >
                  <div className="">
                    <p className="flex justify-center items-center dark:text-white font-medium text-base leading-6 lg:leading-4 text-gray-800">
                      <span className="lg:mr-6 dark:text-white mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                        Q4.
                      </span>
                      What IT services does Tech Deck US provide specifically
                      for the healthcare industry?
                    </p>
                  </div>
                  <button
                    aria-label="toggler"
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                    data-menu
                  >
                    <img
                      className="transform dark:hidden "
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                      alt="toggler"
                    />
                    <img
                      className="transform dark:block hidden "
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2dark.svg"
                      alt="toggler"
                    />
                  </button>
                </div>
                <div id="menu" className="hidden mt-6 w-full">
                  <p className="text-base leading-6 text-gray-600 dark:text-gray-300 font-normal">
                    Tech Deck US specialises in providing tailored IT solutions
                    for healthcare providers. Our services include network
                    infrastructure setup, cybersecurity solutions, EMR/EHR
                    integration, telehealth solutions, and managed IT services
                    designed to enhance operational efficiency and patient care.
                  </p>
                </div>
              </div>

              <hr className="w-full lg:mt-10 my-8" />

              <div className="w-full md:px-6">
                <div
                  id="mainHeading"
                  className="flex justify-between items-center w-full"
                >
                  <div className="">
                    <p className="flex justify-center items-center dark:text-white font-medium text-base leading-6 lg:leading-4 text-gray-800">
                      <span className="lg:mr-6 dark:text-white mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                        Q5.
                      </span>
                      How can Tech Deck US's IT solutions benefit healthcare
                      organisations?ced in working with healthcare
                      organisations?
                    </p>
                  </div>
                  <button
                    aria-label="toggler"
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                    data-menu
                  >
                    <img
                      className="transform dark:hidden "
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                      alt="toggler"
                    />
                    <img
                      className="transform dark:block hidden "
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2dark.svg"
                      alt="toggler"
                    />
                  </button>
                </div>
                <div id="menu" className="hidden mt-6 w-full">
                  <p className="text-base leading-6 text-gray-600 dark:text-gray-300 font-normal">
                    Yes, Tech Deck US has extensive experience collaborating
                    with healthcare providers, ranging from small clinics to
                    large hospital networks. We understand the unique challenges
                    and regulatory requirements of the healthcare industry and
                    tailor our solutions to meet these specific needs.
                  </p>
                </div>
              </div>

              <hr className="w-full lg:mt-10 my-8" />
            </div>
          </div>
          <div>
            <h1 className="text-center dark:text-white lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">
              Careers at Tech Deck US
            </h1>
            <div className="px-4 md:px-96 py-5">
              <div>
                <div className="grid gap-3 my-10 font-['Outfit']">
                  <h1 className='text-xl md:text-3xl font-semibold font-["Outfit"]'>
                    Join Our Team!
                  </h1>
                  <p className='text-sm md:text-md font-["Outfit"]'>
                    Tech Deck US is committed to leveraging technology to
                    improve healthcare delivery and empower businesses across
                    industries. Explore our current job openings and join a team
                    dedicated to innovation and excellence in IT and
                    healthcare sectors.
                  </p>
                  <p className='text-sm md:text-md font-["Outfit"]'>
                    Our team is the heart of our company, and we're always
                    looking for talented, enthusiastic individuals to join us in
                    our mission. If you're looking for a dynamic and rewarding
                    career, we’d love to hear from you!
                  </p>
                </div>
                <div className="grid gap-3 my-10">
                  <h1 className='text-xl md:text-3xl font-semibold font-["Outfit"]'>
                    Why Work With Us?
                  </h1>
                  <ul className="list-disc px-3 pt-3 text-sm md:text-lg">
                    <li className="py-1">
                      <span className="font-['Outfit'] font-semibold">
                        Innovative Environment
                      </span>
                      : Be a part of a creative team that values innovation and
                      quality.
                    </li>
                    <li className="py-1">
                      <span className="font-['Outfit'] font-semibold">
                        Collaborative Culture
                      </span>
                      : Work in a supportive and collaborative atmosphere where
                      every voice is heard.
                    </li>
                    <li className="py-1">
                      <span className="font-['Outfit'] font-semibold">
                        Career Growth
                      </span>
                      : We invest in our employees' growth and development
                      through training and advancement opportunities.
                    </li>
                    <li className="py-1">
                      <span className="font-['Outfit'] font-semibold">
                        Employee Perks
                      </span>
                      : Enjoy delicious treats, employee discounts, health
                      benefits, and more.
                    </li>
                  </ul>
                </div>
                <div className="grid gap-3 my-10">
                  <h1 className='text-xl md:text-3xl font-semibold font-["Outfit"]'>
                    Our Values
                  </h1>
                  <ul className="list-disc px-3 pt-3 text-sm md:text-lg">
                    <li className="py-1">
                      <span className="font-['Outfit'] font-semibold">
                        Quality
                      </span>
                      : Commitment to producing the highest quality products.
                    </li>
                    <li className="py-1">
                      <span className="font-['Outfit'] font-semibold">
                        Customer Satisfaction
                      </span>
                      : Ensuring our customers are delighted with every bite.
                    </li>
                    <li className="py-1">
                      <span className="font-['Outfit'] font-semibold">
                        Teamwork
                      </span>
                      : Fostering a collaborative and supportive work
                      environment.
                    </li>
                    <li className="py-1">
                      <span className="font-['Outfit'] font-semibold">
                        Innovation
                      </span>
                      : encouraging creativity and continuous improvement.
                    </li>
                  </ul>
                </div>
                <div className="grid gap-3 my-10">
                  <h1 className='text-xl md:text-3xl font-semibold font-["Outfit"]'>
                    Current Openings
                  </h1>
                  <ul className="list-disc px-3 pt-3 text-sm md:text-lg">
                  <h1 className='text-xl md:text-2xl font-semibold font-["Outfit"]'>
                    IT Sector
                  </h1>
                    <li className="py-1">
                      <span className="font-['Outfit'] font-semibold">
                        Systems Administrator
                      </span>
                      : Manage and maintain IT infrastructure, ensuring high
                      availability and security. Collaborate with teams to
                      implement new technologies and support day-to-day
                      operations.
                    </li>
                    <li className="py-1">
                      <span className="font-['Outfit'] font-semibold">
                        Cybersecurity Analyst
                      </span>
                      : Monitor and analyze security incidents, conduct
                      vulnerability assessments, and implement cybersecurity
                      measures. Ensure compliance with industry standards and
                      regulations.
                    </li>
                    <li className="py-1">
                      <span className="font-['Outfit'] font-semibold">
                        Software Developer
                      </span>
                      : Design, develop, and deploy software solutions across
                      various platforms. Collaborate with stakeholders to
                      deliver scalable and robust applications.
                    </li>
                    <li className="py-1">
                      <span className="font-['Outfit'] font-semibold">
                        IT Project Manager
                      </span>
                      : Lead IT projects from inception to completion, managing
                      resources, timelines, and budgets. Coordinate with
                      cross-functional teams to deliver projects successfully.
                    </li>
                    <li className="py-1">
                      <span className="font-['Outfit'] font-semibold">
                        Network Engineer
                      </span>
                      : Design, implement, and maintain secure networks.
                      Configure routers, switches, firewalls, and VPNs. Monitor
                      network performance and troubleshoot connectivity issues.
                    </li>
                    <li className="py-1">
                      <span className="font-['Outfit'] font-semibold">
                        Helpdesk Support Technician
                      </span>
                      : Provide technical support and troubleshooting assistance
                      to end-users. Install, configure, and maintain hardware
                      and software systems.
                    </li>
                    <h1 className='text-xl md:text-2xl font-semibold font-["Outfit"]'>
                    Healthcare Sector
                  </h1>
                    <li className="py-1">
                      <span className="font-['Outfit'] font-semibold">
                        Healthcare IT Consultant
                      </span>
                      : Provide strategic IT consulting services to healthcare
                      organizations. Advise on EMR/EHR implementations,
                      regulatory compliance (HIPAA), and IT infrastructure
                      optimization.
                    </li>
                    <li className="py-1">
                      <span className="font-['Outfit'] font-semibold">
                        Telehealth Specialist
                      </span>
                      : Implement and support telehealth solutions for
                      healthcare providers. Configure and maintain telemedicine
                      platforms, ensuring seamless integration and user
                      adoption.
                    </li>
                    <li className="py-1">
                      <span className="font-['Outfit'] font-semibold">
                        Healthcare Systems Analyst
                      </span>
                      : Analyze, design, and implement healthcare information
                      systems. Collaborate with clinical staff to optimize
                      workflows and enhance patient care delivery.
                    </li>
                    <li className="py-1">
                      <span className="font-['Outfit'] font-semibold">
                        Healthcare Data Analysis
                      </span>
                      : Collect, analyze, and interpret healthcare data to
                      support decision-making and improve operational
                      efficiencies. Develop reports and data visualizations for
                      stakeholders.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name2"></Footer>
      </div>
      <style jsx>
        {`
          .our-partners-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
};

export default OurPartners;
