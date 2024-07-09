import React from 'react'

import PropTypes from 'prop-types'

const Team1 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="team1-max-width thq-section-max-width">
          <div className="team1-section-title">
            <span className="thq-body-small team1-text">{props.content1}</span>
            <div className="team1-content">
              <h2 className="thq-heading-2 team1-text01">{props.heading1}</h2>
            </div>
          </div>
          <div className="team1-content1">
            <div className="team1-content2">
              <div className="team1-row">
                <div className="team1-container1">
                  <div className="team1-card3">
                    <img
                      alt={props.member4Alt}
                      src={props.member4Src}
                      className="team1-placeholder-image3 thq-img-round thq-img-ratio-1-1"
                    />
                    <div className="team1-content6">
                      <div className="team1-title3">
                        <span className="team1-text12 thq-body-small">
                          {props.member4}
                        </span>
                        <span className="team1-text13 thq-body-small">
                          {props.member4Job}
                        </span>
                      </div>
                      <span className="team1-text14 thq-body-small">
                        {"I'm incredibly proud of the work you've done. Together, let's keep pushing boundaries and reaching new heights."}
                      </span>
                    </div>
                    <div className="team1-social-icons3">
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="thq-icon-small"
                      >
                        <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="thq-icon-small"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="team1-content7">
              <div className="team1-content8">
                <h2 className="thq-heading-2 team1-text15">{props.heading2}</h2>
                <span className="thq-body-small team1-text16">
                  {props.content3}
                </span>
              </div>
              <button className="team1-button thq-button-filled">
                <span className="thq-body-small">{props.actionContent}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .team1-max-width {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .team1-section-title {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team1-content {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-content1 {
            gap: var(--dl-space-space-sixunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-content2 {
            gap: 64px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .team1-row {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: center;
          }
          .team1-container {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .team1-card {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team1-placeholder-image {
            width: 80px;
            height: 80px;
          }
          .team1-content3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-title {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-text03 {
            font-style: normal;
            font-weight: 600;
          }
          .team1-text04 {
            text-align: center;
          }
          .team1-text05 {
            text-align: center;
          }
          .team1-social-icons {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team1-card1 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team1-placeholder-image1 {
            width: 80px;
            height: 80px;
          }
          .team1-content4 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-title1 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-text06 {
            font-style: normal;
            font-weight: 600;
          }
          .team1-text07 {
            text-align: center;
          }
          .team1-text08 {
            text-align: center;
          }
          .team1-social-icons1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team1-container1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .team1-card2 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team1-placeholder-image2 {
            width: 80px;
            height: 80px;
          }
          .team1-content5 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-title2 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-text09 {
            font-style: normal;
            font-weight: 600;
          }
          .team1-text10 {
            text-align: center;
          }
          .team1-text11 {
            text-align: center;
          }
          .team1-social-icons2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team1-card3 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team1-placeholder-image3 {
            width: 80px;
            height: 80px;
          }
          .team1-content6 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-title3 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team1-text12 {
            font-style: normal;
            font-weight: 600;
          }
          .team1-text13 {
            text-align: center;
          }
          .team1-text14 {
            text-align: center;
          }
          .team1-social-icons3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team1-content7 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-direction: column;
          }
          .team1-content8 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team1-button {
            width: 100%;
            max-width: 300px;
          }
          @media (max-width: 991px) {
            .team1-content1 {
              gap: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .team1-row {
              align-items: center;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .team1-text {
              text-align: center;
            }
            .team1-text01 {
              text-align: center;
            }
            .team1-text02 {
              text-align: center;
            }
            .team1-container {
              flex-direction: column;
            }
            .team1-container1 {
              flex-direction: column;
            }
            .team1-text15 {
              text-align: center;
            }
            .team1-text16 {
              text-align: center;
            }
            .team1-button {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Team1.defaultProps = {
  member2Job: 'Job title',
  member8Alt: 'Member Alt',
  member8: 'Full name',
  member6Job: 'Job title',
  member2Alt: 'Member Alt',
  member2Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  member3Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  member8Job: 'Job title',
  member6: 'Full name',
  member4Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  member6Alt: 'Member Alt',
  member1Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  heading2: 'We’re hiring!',
  member5: 'Full name',
  member4Job: 'CEO',
  member4Src:
    '/imgCeo.jpg',
  member7Alt: 'Member Alt',
  member7Src:
    'https://images.unsplash.com/photo-1463453091185-61582044d556?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI2NTExN3w&ixlib=rb-4.0.3&q=80&w=1080',
  member3Alt: 'Member Alt',
  member8Src:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI2NTExNXw&ixlib=rb-4.0.3&q=80&w=1080',
  member2: 'Full name',
  member6Src:
    'https://images.unsplash.com/photo-1530785602389-07594beb8b73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI2NTExNnw&ixlib=rb-4.0.3&q=80&w=1080',
  member5Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  member2Src:
    'https://images.unsplash.com/photo-1536626164736-720ce8914465?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI2NTExN3w&ixlib=rb-4.0.3&q=80&w=1080',
  member5Src:
    'https://images.unsplash.com/photo-1615477081663-8498d3827bc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI2NTExNXw&ixlib=rb-4.0.3&q=80&w=1080',
  member7Job: 'Job title',
  member3: 'Full name',
  member3Src:
    'https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI2NTExNnw&ixlib=rb-4.0.3&q=80&w=1080',
  member7: 'Full name',
  member4Alt: 'Member Alt',
  content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  member4: 'Ajith Nadar',
  member1Src:
    'https://images.unsplash.com/photo-1628260412297-a3377e45006f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI2NTExN3w&ixlib=rb-4.0.3&q=80&w=1080',
  content3: '',
  member5Job: 'Job title',
  member1: 'Full name',
  member3Job: 'Job title',
  member8Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  member7Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  actionContent: 'Open positions',
  member6Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  content1: 'Join Our Team Today!',
  member5Alt: 'Member Alt',
  member1Alt: 'Member Alt',
  heading1: 'Meet our team',
}

Team1.propTypes = {
  member2Job: PropTypes.string,
  member8Alt: PropTypes.string,
  member8: PropTypes.string,
  member6Job: PropTypes.string,
  member2Alt: PropTypes.string,
  member2Content: PropTypes.string,
  member3Content: PropTypes.string,
  member8Job: PropTypes.string,
  member6: PropTypes.string,
  member4Content: PropTypes.string,
  member6Alt: PropTypes.string,
  member1Content: PropTypes.string,
  heading2: PropTypes.string,
  member5: PropTypes.string,
  member4Job: PropTypes.string,
  member4Src: PropTypes.string,
  member1Job: PropTypes.string,
  member7Alt: PropTypes.string,
  member7Src: PropTypes.string,
  member3Alt: PropTypes.string,
  member8Src: PropTypes.string,
  member2: PropTypes.string,
  member6Src: PropTypes.string,
  member5Content: PropTypes.string,
  member2Src: PropTypes.string,
  member5Src: PropTypes.string,
  member7Job: PropTypes.string,
  member3: PropTypes.string,
  member3Src: PropTypes.string,
  member7: PropTypes.string,
  member4Alt: PropTypes.string,
  content2: PropTypes.string,
  member4: PropTypes.string,
  member1Src: PropTypes.string,
  content3: PropTypes.string,
  member5Job: PropTypes.string,
  member1: PropTypes.string,
  member3Job: PropTypes.string,
  member8Content: PropTypes.string,
  member7Content: PropTypes.string,
  actionContent: PropTypes.string,
  member6Content: PropTypes.string,
  content1: PropTypes.string,
  member5Alt: PropTypes.string,
  member1Alt: PropTypes.string,
  heading1: PropTypes.string,
}

export default Team1
