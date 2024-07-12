import React, { useState } from "react";

import PropTypes from "prop-types";

const Features1 = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeTab1, setActiveTab1] = useState(0);
  return (
    <>
      <div className="thq-section-padding">
        <h1 className="text-3xl font-semibold mb-2">Our Services</h1>
        <h1 className="text-xl mb-5">
          At tech deck we specialise in enhancing your company’s operations
          through tailored solutions.
        </h1>
        <h1 className="text-2xl font-semibold mb-2 bg-gray-100 rounded-xl px-10">What We Bring To You?
        </h1>
        <p className="text-md mb-10 lg:w-2/3 text-center font-semibold">
        Are you struggling to streamline your candidate assessments? We provide advanced tools and strategies to optimise your hiring process, ensuring you find the right fit for your team and culture.
        </p>
        <div className="flex flex-col lg:flex-row gap-10 text-center mb-10 justify-center">
          <div className="lg:w-1/2 shadow-xl p-3 rounded-3xl bg-gray-100 py-10">
            <h1 className="text-2xl font-semibold">IT Services</h1>
            <p className="mt-3 px-10">
              Tech Deck Company specialises in helping clients create
              environments that attract top talent and foster employee
              satisfaction. Through our expert services, we guide organisations
              in identifying and implementing strategies that enhance workplace
              culture and employee experience. From optimising recruitment
              processes to developing robust employee engagement initiatives, we
              ensure our clients stand out as employers of choice. Partner with
              Tech Deck Company to transform your workplace into a destination
              where talented professionals thrive and contribute to your
              organisation’s growth and innovation.
            </p>
          </div>
          <div className="lg:w-1/2 shadow-xl p-3 rounded-3xl bg-gray-100 py-10">
            <h1 className="text-2xl font-semibold">Healthcare Services</h1>
            <p className="mt-3 px-10">
            Tech Deck Company excels in elevating healthcare organisations into premier employers, fostering environments where staff thrive and deliver exceptional care. our services include refining recruitment processes, implementing effective employee engagement programs, and developing robust healthcare-specific training initiatives. We collaborate closely with clients to understand their unique challenges and goals, crafting strategies that align with industry standards and regulatory requirements. By leveraging our expertise in healthcare and technology, we empower organisations to build resilient teams and achieve operational excellence.
            </p>
          </div>
        </div>
        <h1 className="text-2xl mb-10 font-semibold">IT Services</h1>
        <div className="features1-container1 thq-section-max-width">
          <div className="features1-image-container">
            {activeTab === 0 && (
              <h1 className="bg-blue-900 text-lg text-indigo-100 tracking-wider font-semibold p-6 rounded-xl shadow-xl flex items-center">
                Deploying secure and scalable cloud infrastructure to streamline data management and enhance accessibility for healthcare providers.
              </h1>
            )}
            {activeTab === 1 && (
              <h1 className="bg-blue-900 text-lg text-indigo-100 tracking-wider font-semibold p-6 rounded-xl shadow-xl flex items-center">
                Implementing robust cybersecurity measures to protect patient data and ensure compliance with industry regulations such as HIPAA.
              </h1>
            )}
            {activeTab === 2 && (
              <h1 className="bg-blue-900 text-lg text-indigo-100 tracking-wider font-semibold p-6 rounded-xl shadow-xl flex items-center">
                Utilizing advanced analytics to derive actionable insights from healthcare data, enhancing decision-making and operational efficiency.
              </h1>
            )}
          </div>
          <div className="features1-tabs-menu">
            <div
              onClick={() => setActiveTab(0)}
              className="features1-tab-horizontal"
            >
              <div className="features1-divider-container">
                {activeTab === 0 && (
                  <div className="features1-container2"></div>
                )}
              </div>
              <div className="features1-content">
                <h2 className="thq-heading-2">Cloud Solutions</h2>
                {/* <span className="thq-body-small">
                  {props.feature1Description}
                </span> */}
              </div>
            </div>
            <div
              onClick={() => setActiveTab(1)}
              className="features1-tab-horizontal1"
            >
              <div className="features1-divider-container1">
                {activeTab === 1 && (
                  <div className="features1-container3"></div>
                )}
              </div>
              <div className="features1-content1">
                <h2 className="thq-heading-2">Cybersecurity</h2>
                {/* <span className="thq-body-small">
                  {props.feature2Description}
                </span> */}
              </div>
            </div>
            <div
              onClick={() => setActiveTab(2)}
              className="features1-tab-horizontal2"
            >
              <div className="features1-divider-container2">
                {activeTab === 2 && (
                  <div className="features1-container4"></div>
                )}
              </div>
              <div className="features1-content2">
                <h2 className="thq-heading-2">Data Analytics</h2>
                {/* <span className="thq-body-small">
                  {props.feature3Description}
                </span> */}
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-2xl my-10 font-semibold">Healthcare Services</h1>
        <div className="features1-container1 thq-section-max-width lg:!flex lg:!flex-row-reverse">
          <div className="features1-image-container lg:mr-10 lg:mt-20">
            {activeTab1 === 0 && (
              <h1 className="bg-blue-900 text-lg text-indigo-100 tracking-wider font-semibold p-6 rounded-xl shadow-xl flex items-center">
                Integrating remote monitoring devices and applications to enable healthcare providers to monitor patients’ health remotely, reducing hospital readmissions.

              </h1>
            )}
            {activeTab1 === 1 && (
              <h1 className="bg-blue-900 text-lg text-indigo-100 tracking-wider font-semibold p-6 rounded-xl shadow-xl flex items-center">
                Designing and developing mobile applications for healthcare professionals and patients, facilitating easier access to medical information and services.
              </h1>
            )}
            {activeTab1 === 2 && (
              <h1 className="bg-blue-900 text-lg text-indigo-100 tracking-wider font-semibold p-6 rounded-xl shadow-xl flex items-center">
                Providing guidance on healthcare regulations and compliance requirements, ensuring that IT solutions meet industry standards and legal obligations.
              </h1>
            )}
          </div>
          <div className="features1-tabs-menu lg:pl-40">
            <div
              onClick={() => setActiveTab1(0)}
              className="features1-tab-horizontal"
            >
              <div className="features1-divider-container">
                {activeTab1 === 0 && (
                  <div className="features1-container2"></div>
                )}
              </div>
              <div className="features1-content">
                <h2 className="thq-heading-2">Remote Monitoring Solutions</h2>
                {/* <span className="thq-body-small">
                  {props.feature1Description}
                </span> */}
              </div>
            </div>
            <div
              onClick={() => setActiveTab1(1)}
              className="features1-tab-horizontal1"
            >
              <div className="features1-divider-container1">
                {activeTab1 === 1 && (
                  <div className="features1-container3"></div>
                )}
              </div>
              <div className="features1-content1">
                <h2 className="thq-heading-2">Healthcare Mobile Apps</h2>
                {/* <span className="thq-body-small">
                  {props.feature2Description}
                </span> */}
              </div>
            </div>
            <div
              onClick={() => setActiveTab1(2)}
              className="features1-tab-horizontal2"
            >
              <div className="features1-divider-container2">
                {activeTab1 === 2 && (
                  <div className="features1-container4"></div>
                )}
              </div>
              <div className="features1-content2">
                <h2 className="thq-heading-2">Compliance and Regulatory Support</h2>
                {/* <span className="thq-body-small">
                  {props.feature3Description}
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features1-container1 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-fiveunits);
            position: relative;
            grid-template-columns: 1fr 1fr;
          }
          .features1-image-container {
            height: 100%;
            display: flex;
            position: relative;
          }
          .features1-image {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features1-image1 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features1-image2 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features1-tabs-menu {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .features1-tab-horizontal {
            gap: var(--dl-space-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features1-divider-container {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features1-container2 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features1-content {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .features1-tab-horizontal1 {
            gap: var(--dl-space-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features1-divider-container1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features1-container3 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features1-content1 {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .features1-tab-horizontal2 {
            gap: var(--dl-space-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features1-divider-container2 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features1-container4 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features1-content2 {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          @media (max-width: 991px) {
            .features1-container1 {
              grid-gap: var(--dl-space-space-twounits);
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  );
};

Features1.defaultProps = {
  feature2Title: "Tailored Approach",
  feature1ImgSrc:
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDE4OTkyM3w&ixlib=rb-4.0.3&q=80&w=1080",
  feature2ImgAlt: "Customized Solutions Image",
  feature3Description: "Access to top IT talent",
  feature2ImgSrc:
    "https://images.unsplash.com/photo-1487088678257-3a541e6e3922?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDE4OTkyNHw&ixlib=rb-4.0.3&q=80&w=1080",
  feature1ImgAlt: "Professional IT Recruiter",
  feature2Description: "Customized recruitment solutions",
  feature1Title: "Expert IT Recruitment",
  feature3ImgSrc:
    "https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDE4OTkyMnw&ixlib=rb-4.0.3&q=80&w=1080",
  feature3ImgAlt: "Quality Candidates Image",
  feature3Title: "Quality Candidates",
  feature1Description: "Specialized in IT recruitment services",
};

Features1.propTypes = {
  feature2Title: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature3Description: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature3Title: PropTypes.string,
  feature1Description: PropTypes.string,
};

export default Features1;
