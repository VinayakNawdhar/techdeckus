import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

const Navbar = (props) => {
  return (
    <>
      <header className={`navbar-container ${props.rootClassName} `}>
        <header data-thq="thq-navbar" className="navbar-navbar-interactive">
          <div data-thq="thq-navbar-nav" className="navbar-desktop-menu">
            <img
              alt={props.imageAlt2}
              src={props.imageSrc2}
              className="navbar-image"
            />
            <nav className="navbar-links">
              <ul>
                <li className='text-lg tracking-wider font-["Roboto"]'>
                <Link href='/' className=" navbar-link1 thq-body-small thq-link">
                {props.link1}
              </Link>
                </li>
                <li className='text-lg tracking-wider font-["Roboto"]'>
                <Link href='/about' className=" navbar-link2 thq-body-small thq-link">
                {props.link2}
              </Link>
                </li>
                <li className='text-lg tracking-wider font-["Roboto"] font-semibold'>
                <Link href='/contact' className=" navbar-link3 thq-body-small thq-link">
                {props.link3}
              </Link>
                </li>
                <li className='text-lg tracking-wider font-["Roboto"]'>
                <Link href='/our-partners' className=" navbar-link4 thq-body-small thq-link">
                {props.link4}
              </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="navbar-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
            <div className="navbar-nav">
              <div className="navbar-top">
                <img
                  alt={props.logoAlt}
                  src={props.imageSrc2}
                  className="navbar-logo"
                />
                <div data-thq="thq-close-menu" className="navbar-close-menu">
                  <svg viewBox="0 0 1024 1024" className="navbar-icon2">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="navbar-links1">
                <Link href='/' className="thq-body-small thq-link" style={{color : 'gray',fontWeight:"300",textDecoration : 'none'}}>{props.link1}</Link>
                <Link href='/about' className="thq-body-small thq-link" style={{color : 'gray',fontWeight:"300",textDecoration : 'none'}} >{props.link2}</Link>
                <Link href='/contact' className="thq-body-small thq-link" style={{color : 'gray',fontWeight:"300",textDecoration : 'none'}} >{props.link3}</Link>
                <Link href='/our-partners' className="navbar-link41 thq-body-small thq-link" style={{color : 'gray',fontWeight:"300",textDecoration : 'none'}} >
                  {props.link4}
                </Link>
              </nav>
            </div>
          </div>
        </header>
      </header>
      <style jsx>
        {`
          .navbar-container {
            width: 100%;
            display: flex;
            position: relative;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navbar-navbar-interactive {
            fill: var(--dl-color-theme-secondary2);
            color: var(--dl-color-theme-secondary2);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: var(--dl-color-theme-primary2);
          }
          .navbar-desktop-menu {
            fill: var(--dl-color-theme-secondary2);
            flex: 1;
            color: var(--dl-color-theme-secondary2);
            display: flex;
            justify-content: space-between;
          }
          .navbar-image {
            width: 68px;
            height: 67px;
            object-fit: cover;
          }
          .navbar-links {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
            padding-left: 20px;
            flex-direction: row;
            justify-content: flex-start;
          }
          .navbar-link1 {
            fill: var(--dl-color-theme-secondary2);
            color: var(--dl-color-theme-secondary2);
          }
          .navbar-link2 {
            fill: var(--dl-color-theme-secondary2);
            color: var(--dl-color-theme-secondary2);
          }
          .navbar-link3 {
            fill: var(--dl-color-theme-secondary2);
            color: var(--dl-color-theme-secondary2);
          }
          .navbar-link4 {
            fill: var(--dl-color-theme-secondary2);
            color: var(--dl-color-theme-secondary2);
            background-color: #ffffff;
          }
          .navbar-burger-menu {
            display: none;
          }
          .navbar-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-space-space-twounits);
            z-index: 100;
            position: absolute;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navbar-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .navbar-logo {
            height: 3rem;
          }
          .navbar-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar-icon2 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar-links1 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-link41 {
            color: #ffffff;
            background-color: #ffffff;
          }
          .navbar-buttons {
            gap: var(--dl-space-space-twounits);
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
          }

          @media (max-width: 1600px) {
            .navbar-navbar-interactive {
              max-width: 100%;
            }
            .navbar-link4 {
              background-color: transparent;
            }
          }
          @media (max-width: 767px) {
            .navbar-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .navbar-desktop-menu {
              display: none;
            }
            .navbar-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .navbar-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .navbar-mobile-menu {
              padding: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Navbar.defaultProps = {
  link1: 'Home',
  action2: '/services',
  link2: 'About',
  logoAlt: 'IT Recruiting Consultancy Firm',
  imageSrc2: '/logo-200h.webp',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  action1: '/home',
  imageAlt: 'image',
  link4: 'Our Partners',
  imageSrc1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageAlt1: 'image',
  link3: 'Contact Us',
  imageAlt2: 'image',
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  link5: 'Link5',
  rootClassName: '',
}

Navbar.propTypes = {
  link1: PropTypes.string,
  action2: PropTypes.string,
  link2: PropTypes.string,
  logoAlt: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageSrc: PropTypes.string,
  action1: PropTypes.string,
  imageAlt: PropTypes.string,
  link4: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt1: PropTypes.string,
  link3: PropTypes.string,
  imageAlt2: PropTypes.string,
  logoSrc: PropTypes.string,
  link5: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Navbar
