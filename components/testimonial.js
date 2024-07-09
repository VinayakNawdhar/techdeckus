import React from 'react'

import PropTypes from 'prop-types'

const Testimonial = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="testimonial-max-width thq-section-max-width">
          <div className="testimonial-container">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <span className="testimonial-text01 thq-body-small">
              {props.content1}
            </span>
          </div>
          <div className="thq-grid-2">
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div data-animated="true" className="thq-card testimonial-card">
                  <div className="testimonial-container02">
                    <img
                      alt={props.author1Alt}
                      src={props.author1Src}
                      className="testimonial-image"
                    />
                    <div className="testimonial-container03">
                      <strong className="thq-body-large">
                        {props.author1Name}
                      </strong>
                      <span className="thq-body-small">
                        {props.author1Position}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial-text04 thq-body-small">
                    {props.review1}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial-card1"
                >
                  <div className="testimonial-container04">
                    <img
                      alt={props.author2Alt}
                      src={props.author2Src}
                      className="testimonial-image1"
                    />
                    <div className="testimonial-container05">
                      <strong className="thq-body-large">
                        {props.author2Name}
                      </strong>
                      <span className="thq-body-small">
                        {props.author2Position}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial-text07 thq-body-small">
                    {props.review2}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial-card2"
                >
                  <div className="testimonial-container06">
                    <img
                      alt={props.author3Alt}
                      src={props.author3Src}
                      className="testimonial-image2"
                    />
                    <div className="testimonial-container07">
                      <strong className="thq-body-large">
                        {props.author3Name}
                      </strong>
                      <span className="thq-body-small">
                        {props.author3Position}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial-text10 thq-body-small">
                    {props.review3}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial-card3"
                >
                  <div className="testimonial-container08">
                    <img
                      alt={props.author4Alt}
                      src={props.author4Src}
                      className="testimonial-image3"
                    />
                    <div className="testimonial-container09">
                      <strong className="thq-body-large">
                        {props.author4Name}
                      </strong>
                      <span className="thq-body-small">
                        {props.author4Position}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial-text13 thq-body-small">
                    {props.review4}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .testimonial-max-width {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .testimonial-container {
            gap: var(--dl-space-space-unit);
            display: flex;
            max-width: 600px;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .testimonial-text01 {
            text-align: center;
          }
          .testimonial-container02 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial-image {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial-container03 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial-text04 {
            text-align: left;
          }
          .testimonial-container04 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial-image1 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial-container05 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial-text07 {
            text-align: left;
          }
          .testimonial-container06 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial-image2 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial-container07 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial-text10 {
            text-align: left;
          }
          .testimonial-container08 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial-image3 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial-container09 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial-text13 {
            text-align: left;
          }
          @media (max-width: 991px) {
            .testimonial-container {
              margin-bottom: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .testimonial-container {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .testimonial-card {
              width: 100%;
            }
            .testimonial-card1 {
              width: 100%;
            }
            .testimonial-card2 {
              width: 100%;
            }
            .testimonial-card3 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Testimonial.defaultProps = {
  review3:
    'The team at the IT Recruiting Consultancy Firm truly understands our needs and consistently delivers high-quality candidates. They are a pleasure to work with.',
  author4Position: 'Director of Engineering, Tech Firm A',
  author3Name: 'David Johnson',
  author3Alt: 'Image of David Johnson',
  author2Src:
    'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDE4OTkyMnw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Alt: 'Image of Sarah Williams',
  author2Name: 'Jane Smith',
  author1Name: 'John Doe',
  author1Src:
    'https://images.unsplash.com/photo-1546938576-7d56dda5e7d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDE4OTkyMXw&ixlib=rb-4.0.3&q=80&w=1080',
  review1:
    'Working with the IT Recruiting Consultancy Firm was a game-changer for our company. They provided us with top-notch talent that perfectly fit our requirements.',
  author1Alt: 'Image of John Doe',
  author1Position: 'CEO, Tech Company X',
  review4:
    'I have been impressed by the professionalism and dedication of the IT Recruiting Consultancy Firm. They have helped us build a strong technical team.',
  author2Position: 'CTO, Startup Y',
  heading1: 'Testimonials',
  author4Name: 'Sarah Williams',
  author3Position: 'HR Manager, Company Z',
  author2Alt: 'Image of Jane Smith',
  review2:
    'I highly recommend the IT Recruiting Consultancy Firm for their exceptional service and quick turnaround time in finding us skilled IT professionals.',
  author3Src:
    'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDE4OTkyMnw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Src:
    'https://images.unsplash.com/photo-1527980965255-d3b416303d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDE4OTkyMnw&ixlib=rb-4.0.3&q=80&w=1080',
  content1: 'What Our Clients Say: Success Stories from TechDeck US Partners',
}

Testimonial.propTypes = {
  review3: PropTypes.string,
  author4Position: PropTypes.string,
  author3Name: PropTypes.string,
  author3Alt: PropTypes.string,
  author2Src: PropTypes.string,
  author4Alt: PropTypes.string,
  author2Name: PropTypes.string,
  author1Name: PropTypes.string,
  author1Src: PropTypes.string,
  review1: PropTypes.string,
  author1Alt: PropTypes.string,
  author1Position: PropTypes.string,
  review4: PropTypes.string,
  author2Position: PropTypes.string,
  heading1: PropTypes.string,
  author4Name: PropTypes.string,
  author3Position: PropTypes.string,
  author2Alt: PropTypes.string,
  review2: PropTypes.string,
  author3Src: PropTypes.string,
  author4Src: PropTypes.string,
  content1: PropTypes.string,
}

export default Testimonial
