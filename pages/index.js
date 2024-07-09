import React from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Features1 from '../components/features1'
import CTA from '../components/cta'
import Features2 from '../components/features2'
import Steps from '../components/steps'
import Testimonial from '../components/testimonial'
import Footer from '../components/footer'
const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Home - TechDeck US</title>
        </Head>
        <Navbar></Navbar>
        <Hero></Hero>
        <Features1></Features1>
        <CTA></CTA>
        <Features2></Features2>
        <Steps></Steps>
        <Testimonial></Testimonial>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
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

export default Home
