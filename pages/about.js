import React from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Hero8 from '../components/hero8'
import Stats2 from '../components/stats2'
import Logos1 from '../components/logos1'
import Team1 from '../components/team1'
import Footer from '../components/footer'
import Logos9 from '../components/logos9'
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
        <div className="h-[300px] w-full bg-black/30 relative">
          <img
            src="https://images.unsplash.com/photo-1507208773393-40d9fc670acf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDI2NTExNXw&ixlib=rb-4.0.3&q=80&w=1400"
            className="w-full h-full object-cover object-center"
          />
          <div className="w-full h-full bg-black/70 absolute z-10 top-0 flex items-center justify-center">
            <h1 className="text-white text-center font-bold text-3xl">
              About Us
            </h1>
          </div>
        </div>
        <Hero8></Hero8>
        <Stats2></Stats2>
        <Logos9></Logos9>
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
