import React from 'react'

import PropTypes from 'prop-types'

const Logos1 = (props) => {
  return (
    <>
      <div className="logos1-container thq-section-padding">
        <div className="logos1-max-width thq-section-max-width">
          <h2 className="logos1-text thq-heading-2">{props.heading1}</h2>
          <div className="thq-grid-6">
            <img
              alt={props.logo1Alt}
              src={'https://static.vecteezy.com/system/resources/previews/022/613/027/original/google-icon-logo-symbol-free-png.png'}
              className="logos1-logo1 thq-img-ratio-16-9"
            />
            <img
              alt={props.logo2Alt}
              src={'https://www.petinsurer.com/img/share_insurer_logo/fetch.png'}
              className="logos1-logo2 thq-img-ratio-16-9"
            />
            <img
              alt={props.logo3Alt}
              src={'https://download.logo.wine/logo/CBRE_Group/CBRE_Group-Logo.wine.png'}
              className="logos1-logo3 thq-img-ratio-16-9"
            />
            <img
              alt={props.logo4Alt}
              src={'https://download.logo.wine/logo/Bank_of_America/Bank_of_America-Logo.wine.png'}
              className="logos1-logo4 thq-img-ratio-16-9"
            />
            <img
              alt={props.logo5Alt}
              src={'https://logos-world.net/wp-content/uploads/2021/02/Fidelity-Logo.png'}
              className="logos1-logo5 thq-img-ratio-16-9"
            />
            <img
              alt={props.logo6Alt}
              src={'https://companieslogo.com/img/orig/WIT_BIG-0de2dc21.png?t=1720244494'}
              className="logos1-logo6 thq-img-ratio-16-9"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .logos1-container {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .logos1-max-width {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .logos1-text {
            text-align: center;
          }
          .logos1-logo1 {
            object-fit: contain;
          }
          .logos1-logo2 {
            object-fit: contain;
          }
          .logos1-logo3 {
            object-fit: contain;
          }
          .logos1-logo4 {
            object-fit: contain;
          }
          .logos1-logo5 {
            object-fit: contain;
          }
          .logos1-logo6 {
            object-fit: contain;
          }
          @media (max-width: 767px) {
            .logos1-container {
              gap: var(--dl-space-space-twounits);
            }
            .logos1-max-width {
              gap: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

Logos1.defaultProps = {
  logo2Alt: 'IT Talent Logo',
  logo6Alt: 'Customized Approach Logo',
  logo5Alt: 'Resume Writing Logo',
  logo2Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/2cf31efa-183b-4247-920e-60025ea69bfe?org_if_sml=1&q=80&force_format=original',
  logo1Alt: 'Company Logo',
  logo6Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/07f56a12-c428-4896-8819-194d1fef39f2?org_if_sml=1&q=80&force_format=original',
  logo4Alt: 'Career Coaching Logo',
  logo4Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/c78f8e14-cf7b-4e8b-821c-3d6b89ed8db4?org_if_sml=1&q=80&force_format=original',
  heading1:
    "Trusted by the world's best companies social proof to build credibility",
  logo3Alt: 'Recruitment Services Logo',
  logo3Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/49215785-2559-40a7-be66-9dd3bdf5eb7a?org_if_sml=1&q=80&force_format=original',
  logo1Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/838a2368-6357-4526-a3f3-57fee519d8ec?org_if_sml=1&q=80&force_format=original',
  logo5Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/97476fa7-08ff-463d-99d2-c4ceb6ae9222?org_if_sml=1&q=80&force_format=original',
}

Logos1.propTypes = {
  logo2Alt: PropTypes.string,
  logo6Alt: PropTypes.string,
  logo5Alt: PropTypes.string,
  logo2Src: PropTypes.string,
  logo1Alt: PropTypes.string,
  logo6Src: PropTypes.string,
  logo4Alt: PropTypes.string,
  logo4Src: PropTypes.string,
  heading1: PropTypes.string,
  logo3Alt: PropTypes.string,
  logo3Src: PropTypes.string,
  logo1Src: PropTypes.string,
  logo5Src: PropTypes.string,
}

export default Logos1
