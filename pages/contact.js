import React from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'
import ContactForm3 from '../components/contact-form3'
import Contact14 from '../components/contact14'
import Footer from '../components/footer'

const Contact1 = (props) => {
  return (
    <>
      <div className="contact1-container">
        <Head>
          <title>Contact Us - TechDeck US</title>
          <meta
            property="og:title"
            content="Contact1 - Spotless Hungry Crocodile"
          />
        </Head>
        <Navbar rootClassName="navbar-root-class-name2"></Navbar>
        <ContactForm3></ContactForm3>
        <Contact14></Contact14>
        <Footer rootClassName="footer-root-class-name1"></Footer>
      </div>
      <style jsx>
        {`
          .contact1-container {
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

export default Contact1
