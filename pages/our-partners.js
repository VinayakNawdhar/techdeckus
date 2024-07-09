import React from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Logos9 from '../components/logos9'
import Footer from '../components/footer'

const OurPartners = (props) => {
  return (
    <>
      <div className="our-partners-container">
        <Head>
          <title>Our-partners - TechDeck US</title>
          <meta
            property="og:title"
            content="Our-partners - Spotless Hungry Crocodile"
          />
        </Head>
        <Navbar rootClassName="navbar-root-class-name3"></Navbar>
        <Logos9></Logos9>
        <Footer rootClassName="footer-root-class-name2"></Footer>
      </div>
      <style jsx>
        {`
          .our-partners-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

export default OurPartners
