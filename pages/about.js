import React from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Hero8 from '../components/hero8'
import Stats2 from '../components/stats2'
import Logos1 from '../components/logos1'
import Team1 from '../components/team1'
import Footer from '../components/footer'

const About = (props) => {
  return (
    <>
      <div className="about-container">
        <Head>
          <title>About - TechDeck US</title>
          <meta
            property="og:title"
            content="About - TechDeck US"
          />
        </Head>
        <Navbar rootClassName="navbar-root-class-name1"></Navbar>
        <Hero8></Hero8>
        <Stats2></Stats2>
        <Logos1></Logos1>
        <Team1></Team1>
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
      <style jsx>
        {`
          .about-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default About
