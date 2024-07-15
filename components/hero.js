import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
const Hero = (props) => {
  return (
    <>
      <div className="w-full">
        {/* <div className="hero-column thq-section-padding thq-section-max-width">
          <div className="hero-content">
            <h1 className="hero-text thq-heading-1">{props.heading1}</h1>
            <p className="hero-text1 thq-body-large">{props.content1}</p>
          </div>
          <div className="hero-actions">
            <button className="thq-button-filled hero-button">
              <span className="thq-body-small">{props.action1}</span>
            </button>
            <button className="thq-button-outline hero-button1">
              <span className="thq-body-small">{props.action2}</span>
            </button>
          </div>
        </div> */}
        {/* <div className="hero-content1">
          <div className="hero-row-container thq-mask-image-horizontal thq-animated-group-container-horizontal">
            <div className="thq-animated-group-horizontal">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="hero-placeholder-image thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="hero-placeholder-image01 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="hero-placeholder-image02 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="hero-placeholder-image03 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="hero-placeholder-image04 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image6Alt}
                src={props.image6Src}
                className="hero-placeholder-image05 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
            <div className="thq-animated-group-horizontal">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="hero-placeholder-image06 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="hero-placeholder-image07 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="hero-placeholder-image08 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="hero-placeholder-image09 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="hero-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt="Hero Image"
                src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
                className="hero-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
          </div>
          <div className="hero-row-container1 thq-mask-image-horizontal thq-animated-group-container-horizontal">
            <div className="thq-animated-group-horizontal-reverse">
              <img
                alt={props.image7Alt}
                src={props.image7Src}
                className="hero-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image8Alt}
                src={props.image8Src}
                className="hero-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image9Alt}
                src={props.image9Src}
                className="hero-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image10Alt}
                src={props.image10Src}
                className="hero-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image11Alt}
                src={props.image11Src}
                className="hero-placeholder-image16 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image12Alt}
                src={props.image12Src}
                className="hero-placeholder-image17 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
            <div className="thq-animated-group-horizontal-reverse">
              <img
                alt={props.image7Alt}
                src={props.image7Src}
                className="hero-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image8Alt}
                src={props.image8Src}
                className="hero-placeholder-image19 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image9Alt}
                src={props.image9Src}
                className="hero-placeholder-image20 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image10Alt}
                src={props.image10Src}
                className="hero-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image11Alt}
                src={props.image11Src}
                className="hero-placeholder-image22 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt="Hero Image"
                src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                className="hero-placeholder-image23 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
          </div>
        </div> */}
        <div className='w-full h-[85vh] relative'>
          <img src='1.jpg' className='w-full h-full object-cover'></img>
          <div className='w-full h-full absolute top-0 bg-black/80 text-white font-semibold flex justify-center items-center px-5 lg:px-0'>
            <div className='lg:w-1/2'>
            <h1 className='lg:w-1/2 text-xl drop-shadow-xl'>Welcome to Tech Deck US</h1>
            <h1 className='font-light text-6xl drop-shadow-xl'>where innovation meets IT and health for a <span className='font-bold'>brighter future</span>.</h1>
            </div>
          </div>
        </div>
        <div>
          <div className="hero-container1">
            
          </div>
        </div>
      </div>
      
    </>
  )
}


export default Hero
