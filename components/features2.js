import React, { useState } from "react";

import PropTypes from "prop-types";

const Features2 = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      {/* <div className="thq-section-padding">
        <div className="features2-container1 thq-section-max-width">
          <div className="features2-tabs-menu">
            <div
              onClick={() => setActiveTab(0)}
              className="features2-tab-horizontal"
            >
              <div className="features2-divider-container">
                {activeTab === 0 && (
                  <div className="features2-container2"></div>
                )}
              </div>
              <div className="features2-content">
                <h2 className="thq-heading-2">{props.feature1Title}</h2>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(1)}
              className="features2-tab-horizontal1"
            >
              <div className="features2-divider-container1">
                {activeTab === 1 && (
                  <div className="features2-container3"></div>
                )}
              </div>
              <div className="features2-content1">
                <h2 className="thq-heading-2">{props.feature2Title}</h2>
                <span className="thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(2)}
              className="features2-tab-horizontal2"
            >
              <div className="features2-divider-container2">
                {activeTab === 2 && (
                  <div className="features2-container4"></div>
                )}
              </div>
              <div className="features2-content2">
                <h2 className="thq-heading-2">{props.feature3Title}</h2>
                <span className="thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
            </div>
          </div>
          <div className="features2-image-container">
            {activeTab === 0 && (
              <img
                alt={props.feature1ImgAlt}
                src={props.feature1ImgSrc}
                className="features2-image thq-img-ratio-16-9"
              />
            )}
            {activeTab === 1 && (
              <img
                alt={props.feature2ImgAlt}
                src={props.feature2ImgSrc}
                className="features2-image1 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 2 && (
              <img
                alt={props.feature3ImgAlt}
                src={props.feature3ImgSrc}
                className="features2-image2 thq-img-ratio-16-9"
              />
            )}
          </div>
        </div>
      </div> */}
      <div>
        <div className="w-[100vw] min-h-[500px] overflow-hidden relative quote-box">
          <div className="w-full h-full absolute bg-black/80 top-0 text-gray-300 flex flex-wrap justify-center lg:text-4xl font-['Playfair_Display_SC'] items-center">
          <h1 className="p-10 max-w-[700px] border-r-white lg:border-r-4 border-b-4 lg:border-b-0">
              "Beyond skills, we build bridges. We go deeper than resumes to find
              talent that aligns with your vision and empowers your team to
              thrive."
            </h1>
            <h1 className="p-10 max-w-[700px]">
              "Shaping the future of IT, one perfect match at a time. We connect
              companies with the tech talent that ignites innovation
              and drives success."
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

Features2.defaultProps = {
  feature2Description:
    "We offer customized recruitment solutions to meet your specific IT hiring needs.",
  feature1ImgSrc:
    "https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDE4OTkyMnw&ixlib=rb-4.0.3&q=80&w=1080",
  feature1ImgAlt: "feature 1",
  feature3Description:
    "By leveraging cutting-edge recruitment strategies and deep industry knowledge, we connect the right talent with the right companies, propelling the tech sector forward.",
  feature3ImgSrc:
    "https://images.unsplash.com/photo-1519750783826-e2420f4d687f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDE4OTkyM3w&ixlib=rb-4.0.3&q=80&w=1080",
  feature1Title: "Powering the Future of Tech through Recruitment",
  feature2ImgSrc:
    "https://images.unsplash.com/photo-1499244571948-7ccddb3583f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDE4OTkyNHw&ixlib=rb-4.0.3&q=80&w=1080",
  feature2Title: "Tailored Recruitment Solutions",
  feature3ImgAlt: "image",
  feature3Title: "From Resume to Reality",
  feature1Description:
    "Our personalized approach and access to a vast network of opportunities empower you to land your dream IT job and reach your full potential.",
  feature2ImgAlt: "Tailored Recruitment Solutions Image Alt",
};

Features2.propTypes = {
  feature2Description: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature3Description: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature1Title: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature2Title: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature3Title: PropTypes.string,
  feature1Description: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
};

export default Features2;
