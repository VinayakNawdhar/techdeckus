import React from 'react'

import PropTypes from 'prop-types'

const Contact14 = (props) => {
  return (
    <>
      <div className="contact14-contact20 thq-section-padding">
        <div className="contact14-max-width thq-section-max-width">
          <div className="contact14-content2">
          <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <div className="contact14-contact-info1">
              <div className="contact14-content3">
                <h3 className="contact14-text2 thq-heading-3">
                  {props.heading2}
                </h3>
                <p className="contact14-text3 thq-body-large">
                  {props.content2}
                </p>
              </div>
              <span className="contact14-email1 thq-body-small">
                {props.link1}
              </span>
            </div>
          </div>
          <div className="contact14-content4">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
            </svg>
            <div className="contact14-contact-info2">
              <div className="contact14-content5">
                <h3 className="contact14-text4 thq-heading-3">
                  {props.heading3}
                </h3>
                <p className="contact14-text5 thq-body-large">
                  {props.content3}
                </p>
              </div>
              <span className="contact14-phone thq-body-small">
                {props.phone1}
              </span>
            </div>
          </div>
          <div className="contact14-content6">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
            </svg>
            <div className="contact14-contact-info3">
              <div className="contact14-content7">
                <h3 className="contact14-text6 thq-heading-3">
                  {props.heading4}
                </h3>
                <p className="contact14-content4 thq-body-large">
                  {props.content4}
                </p>
              </div>
              <span className="contact14-address thq-body-small">
                {props.address1}
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact14-contact20 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            overflow: hidden;
            position: relative;
            flex-direction: column;
          }
          .contact14-max-width {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .contact14-content {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            flex-grow: 1;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact14-contact-info {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact14-content1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact14-text {
            align-self: stretch;
            text-align: center;
          }
          .contact14-text1 {
            text-align: center;
          }
          .contact14-email {
            text-align: center;
          }
          .contact14-content2 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            flex-grow: 1;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact14-icon2 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
          }
          .contact14-contact-info1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact14-content3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact14-text2 {
            align-self: stretch;
            text-align: center;
          }
          .contact14-text3 {
            text-align: center;
          }
          .contact14-email1 {
            text-align: center;
          }
          .contact14-content4 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact14-contact-info2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact14-content5 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact14-text4 {
            align-self: stretch;
            text-align: center;
          }
          .contact14-text5 {
            text-align: center;
          }
          .contact14-phone {
            text-align: center;
          }
          .contact14-content6 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact14-contact-info3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact14-content7 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact14-text6 {
            align-self: stretch;
            text-align: center;
          }
          .contact14-content4 {
            text-align: center;
          }
          .contact14-address {
            text-align: center;
          }
          @media (max-width: 767px) {
            .contact14-max-width {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Contact14.defaultProps = {
  content4:
    'We are happy to see you.',
  heading4: 'Office',
  address1: 'Houston, TX 77027 USA',
  content3:
    'We look forward to hearing from you!',
  phone1: '+1 (501) 5073466',
  heading3: 'Phone',
  content1:
    'Any queries? Dont worry send us',
  heading1: 'Contact Us',
  content2:
    'Any Queries? Mail us ',
  heading2: 'Mail Us',
  email1: 'info@techdeckus.com',
  link1: 'info@techdeckus.com',
}

Contact14.propTypes = {
  content4: PropTypes.string,
  heading4: PropTypes.string,
  address1: PropTypes.string,
  content3: PropTypes.string,
  phone1: PropTypes.string,
  heading3: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
  content2: PropTypes.string,
  heading2: PropTypes.string,
  email1: PropTypes.string,
  link1: PropTypes.string,
}

export default Contact14
