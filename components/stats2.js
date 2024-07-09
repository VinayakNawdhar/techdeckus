import React from 'react'

import PropTypes from 'prop-types'

const Stats2 = (props) => {
  return (
    <>
      <div className="stats2-container thq-section-padding">
        <div className="stats2-max-width thq-section-max-width">
          <div className="stats2-container1 thq-flex-column">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="thq-img-ratio-1-1 stats2-image"
            />
          </div>
          <div className="stats2-container2 thq-flex-column">
            <span className="thq-body-small">{props.content1}</span>
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="thq-body-large">{props.content2}</p>
            <div className="stats2-container3 thq-grid-2">
              <div className="stats2-container4">
                <h2 className="thq-heading-2">{props.stat1}</h2>
                <span className="thq-body-small">{props.stat1Description}</span>
              </div>
              <div className="stats2-container5">
                <h2 className="thq-heading-2">{props.stat2}</h2>
                <span className="thq-body-small">{props.stat2Description}</span>
              </div>
            </div>
            <div className="stats2-container6 thq-grid-2">
              <div className="stats2-container7">
                <h2 className="thq-heading-2">{props.stat3}</h2>
                <span className="thq-body-small">{props.stat3Description}</span>
              </div>
              <div className="stats2-container8">
                <h2 className="thq-heading-2">{props.stat4}</h2>
                <span className="thq-body-small">{props.stat4Description}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .stats2-container {
            width: 100%;
            flex-direction: column;
          }
          .stats2-max-width {
            gap: var(--dl-space-space-fourunits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .stats2-container1 {
            max-width: 50%;
          }
          .stats2-container2 {
            align-self: center;
            align-items: flex-start;
            margin-left: auto;
          }
          .stats2-container3 {
            width: 100%;
          }
          .stats2-container4 {
            width: 100%;
            height: 100%;
            align-items: flex-start;
          }
          .stats2-container5 {
            width: 100%;
            height: 100%;
            align-items: flex-start;
          }
          .stats2-container6 {
            width: 100%;
          }
          .stats2-container7 {
            width: 100%;
            height: 100%;
            align-items: flex-start;
          }
          .stats2-container8 {
            width: 100%;
            height: 100%;
            align-items: flex-start;
          }
          @media (max-width: 991px) {
            .stats2-max-width {
              gap: var(--dl-space-space-twounits);
              align-items: flex-start;
              flex-direction: column;
            }
            .stats2-container1 {
              width: 100%;
              max-width: 100%;
            }
            .stats2-container2 {
              align-self: flex-start;
              margin-left: 0px;
            }
          }
          @media (max-width: 479px) {
            .stats2-image {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Stats2.defaultProps = {
  heading1: 'Our Stats',
  stat3Description:
    'Our career coaching services help individuals navigate their IT career paths and make informed decisions.',
  stat2Description:
    'We offer personalized job matching services to ensure the perfect fit for both candidates and companies.',
  stat4Description:
    'We provide professional resume writing services to help individuals stand out in the competitive IT job market.',
  stat3: 'Career Coaching',
  image1Alt: 'Illustration of quality candidates',
  stat1Description:
    'We provide top-notch IT recruitment services to connect the best talent with leading companies.',
  content2: 'Access to Quality Candidates',
  content1: 'Tailored Recruitment Solutions',
  stat4: 'Resume Writing Services',
  stat1: 'Expert IT Recruitment Services',
  image1Src:
    'https://images.unsplash.com/photo-1587135991058-8816b028691f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI2NTExNXw&ixlib=rb-4.0.3&q=80&w=1080',
  stat2: 'Personalized Job Matching',
}

Stats2.propTypes = {
  heading1: PropTypes.string,
  stat3Description: PropTypes.string,
  stat2Description: PropTypes.string,
  stat4Description: PropTypes.string,
  stat3: PropTypes.string,
  image1Alt: PropTypes.string,
  stat1Description: PropTypes.string,
  content2: PropTypes.string,
  content1: PropTypes.string,
  stat4: PropTypes.string,
  stat1: PropTypes.string,
  image1Src: PropTypes.string,
  stat2: PropTypes.string,
}

export default Stats2
