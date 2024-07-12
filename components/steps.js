import React from 'react'

import PropTypes from 'prop-types'

const Steps = (props) => {
  return (
    <>
      <div className="steps-container thq-section-padding">
        <div className="steps-max-width thq-section-max-width">
          <div className="steps-container1 thq-grid-2">
            <div className="steps-section-header">
              <h2 className="thq-heading-2">
              Check out what our products can do for you in the IT job hunt
              </h2>
              <p className="thq-body-large">
              Are you struggling to streamline your candidate assessments? We provide advanced tools and strategies to optimise your hiring process, ensuring you find the right fit for your team and culture.
              </p>
              <div className="steps-actions"></div>
            </div>
            <div className="steps-container2">
              <div className="steps-container3 thq-card">
                <h2 className="thq-heading-2">{props.step1Title}</h2>
                <span className="steps-text03 thq-body-small">
                  {props.step1Description}
                </span>
                <label className="steps-text04 thq-heading-3">01</label>
              </div>
              <div className="steps-container4 thq-card">
                <h2 className="thq-heading-2">{props.step2Title}</h2>
                <span className="steps-text06 thq-body-small">
                  {props.step2Description}
                </span>
                <label className="steps-text07 thq-heading-3">02</label>
              </div>
              <div className="steps-container5 thq-card">
                <h2 className="thq-heading-2">{props.step3Title}</h2>
                <span className="steps-text09 thq-body-small">
                  {props.step3Description}
                </span>
                <label className="steps-text10 thq-heading-3">03</label>
              </div>
              <div className="steps-container6 thq-card">
                <h2 className="thq-heading-2">{props.step4Title}</h2>
                <span className="steps-text12 thq-body-small">
                  {props.step4Description}
                </span>
                <label className="steps-text13 thq-heading-3">04</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .steps-container {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steps-max-width {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .steps-container1 {
            align-items: start;
          }
          .steps-section-header {
            gap: var(--dl-space-space-oneandhalfunits);
            top: 10%;
            display: flex;
            position: sticky;
            align-items: flex-start;
            flex-direction: column;
          }
          .steps-actions {
            gap: var(--dl-space-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
          }
          .steps-container2 {
            grid-area: span 1 / span 1 / span 1 / span 1;
          }
          .steps-container3 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .steps-text03 {
            text-align: center;
          }
          .steps-text04 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps-container4 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent2);
          }
          .steps-text06 {
            text-align: center;
          }
          .steps-text07 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps-container5 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .steps-text09 {
            text-align: center;
          }
          .steps-text10 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps-container6 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            background-color: var(--dl-color-theme-accent2);
          }
          .steps-text12 {
            text-align: center;
          }
          .steps-text13 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          @media (max-width: 1200px) {
            .steps-container1 {
              animation-name: none;
              animation-delay: 0s;
              animation-duration: 300ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
          }
          @media (max-width: 991px) {
            .steps-max-width {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .steps-section-header {
              position: static;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .steps-actions {
              width: 100%;
              align-self: flex-start;
            }
            .steps-container3 {
              width: 100%;
            }
            .steps-container4 {
              width: 100%;
            }
            .steps-container5 {
              width: 100%;
            }
            .steps-container6 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Steps.defaultProps = {
  step2Description:
    'Our team utilizes various channels to source top IT talent that aligns with your requirements.',
  step3Description:
    'We conduct thorough screenings and evaluations to ensure the candidates match both technically and culturally.',
  step1Description:
    "We start by understanding your company's unique IT recruitment needs and goals.",
  step4Description:
    'Once the right candidate is identified, we assist in the placement process and follow up to ensure a successful integration.',
  step3Title: 'Screening and Evaluation',
  step4Title: 'Placement and Follow-up',
  step2Title: 'Candidate Sourcing',
  step1Title: 'Initial Consultation',
}

Steps.propTypes = {
  step2Description: PropTypes.string,
  step3Description: PropTypes.string,
  step1Description: PropTypes.string,
  step4Description: PropTypes.string,
  step3Title: PropTypes.string,
  step4Title: PropTypes.string,
  step2Title: PropTypes.string,
  step1Title: PropTypes.string,
}

export default Steps
