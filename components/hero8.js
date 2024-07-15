import React from 'react'

import PropTypes from 'prop-types'

const Hero8 = (props) => {
  return (
    <>
      <div className="hero8-header26 thq-section-padding">
        <div className="hero8-max-width thq-section-max-width thq-flex-column">
          <div className="hero8-column">
            <div className="hero8-content">
              <animate animation="fadeInLeft">
                <h1
                  data-thq-animate-on-reveal="true"
                  className="hero8-text thq-heading-1 !w-4/5 !mx-auto"
                >
                  On the prowl for the sharpest geeks? Our team hooks up ace tech talent with killer jobs.
                </h1>
              </animate>
              <p className="hero8-text1 thq-body-large !text-left !w-3/4">At TechDeck US, we are dedicated specialists in IT recruitment and healthcare staffing, committed to connecting exceptional talent with career-defining opportunities. With a deep-rooted understanding of the complexities within these pivotal industries, we strive to deliver unparalleled service and results. <br></br>
              <br></br>
              Our mission is to serve as the catalyst for success, facilitating strategic matches that drive innovation and excellence. Whether it's sourcing top-tier IT professionals proficient in cutting-edge technologies or identifying compassionate healthcare providers dedicated to patient-centric care, we excel in meeting diverse staffing needs. <br></br>
              Backed by years of experience and a steadfast commitment to quality, we pride ourselves on our rigorous selection processes and personalised approach. We prioritise integrity and transparency in every interaction, fostering long-term relationships built on trust and mutual respect.
              </p>
            </div>
          </div>
          <img
            alt={props.image1Alt}
            src='3.jpg'
            className="thq-img-ratio-16-9 hero8-hero-image"
          />
        </div>
      </div>
      <style jsx>
        {`
          .hero8-header26 {
            gap: var(--dl-space-space-twounits);
          }
          .hero8-max-width {
            align-self: center;
          }
          .hero8-column {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero8-content {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero8-text {
            text-align: center;
          }
          .hero8-text1 {
            text-align: center;
          }
          @media (max-width: 1600px) {
            .hero8-text {
              animation-name: fadeInLeft;
              animation-delay: 0s;
              animation-duration: 300ms;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
            .hero8-text1 {
              width: 100%;
              margin-right: 0px;
            }
            .hero8-hero-image {
              width: 991px;
              height: 581px;
              animation-name: fadeInLeft;
              animation-delay: 0s;
              animation-duration: 800ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-in-out;
            }
          }
        `}
      </style>
    </>
  )
}

Hero8.defaultProps = {
  action2: 'Learn More',
  heading1: 'Award-Winning Recruitment Agency',
  content1:
    'Tech deck US is a leading Talent acquistation & HR management solutions provider, that is firmly rooted in the commitment of empowering the clients, maximize the resources and business performance. With an ongoing commitment to qualify, the Company’s continuing goal is to enhance its position to one of the leading independent providers of resources of IT, banking and insurance companies',
  image1Src:
    'https://images.unsplash.com/photo-1507208773393-40d9fc670acf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI2NTExNXw&ixlib=rb-4.0.3&q=80&w=1400',
  image1Alt: 'Connecting top IT talent with leading companies',
  action1: 'Get Started',
}

Hero8.propTypes = {
  action2: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
  action1: PropTypes.string,
}

export default Hero8
