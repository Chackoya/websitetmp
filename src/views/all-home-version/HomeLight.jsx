import React from "react";

import Navbar from "../../components/header/Navbar";
import Hero from "../../components/slider/Hero";
import About from "../../components/about/About";

//import Service from "../../components/service/Service";
import Portfolio from "../../components/portfolio/Portfolio";
import Testimonial from "../../components/testimonial/Testimonial";
import Faq from "../../components/Faq";
import Footer from "../../components/Footer";
import Address from "../../components/Address";


const HomeLight = () => {
  document.body.classList.add("light");
  return ( 
    <div>
    <div className="home-light edina_tm_mainpart">
      <Navbar/>



      {/* End Header */}
      <Hero />

     

      {/* End Hero */}
      <About />
      {/* End Hero */}

      <div className="edina_tm_portfolio" id="portfolio">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Collection</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ipsum sit nibh amet egestas tellus.
            </p>
          </div>
          {/* End edian_tm_title */}
          <Portfolio />
        </div>
      </div>
      {/* End Portfolio */}
      <div className="edina_tm_contact" id="roadmap">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Roadmap</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ipsum sit nibh amet egestas tellus.
            </p>
          </div>
          <div className="extra_info">
            <Address />
          </div>
          {/* End Address Info */}
          
        </div>
      </div>
      {/* /CONTACT */}

        <Faq/>

      <div className="h3_blank">
      .
      </div>
    <Footer/>
    </div>

    
   

    </div>
  );
};

export default HomeLight;
/*
      {/*
      <div className="edina_tm_services" id="service">
        <div className="container">
          <div className="edina_tm_title">
            <h3>What I Do</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ipsum sit nibh amet egestas tellus.
            </p>
          </div>
          {/* End edian_tm_title */
          /*<Service />*
 


      {/* End Services *

<div className="edina_tm_testimonials" id="testimonial">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Testimonials</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ipsum sit nibh amet egestas tellus.
            </p>
          </div>
          {/* End edian_tm_title *
          <div className="list ">
            <ul>
              <Testimonial />
            </ul>
          </div>
        </div>
      </div>


      /*
      <div className="edina_tm_news" id="blog">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Blog</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ipsum sit nibh amet egestas tellus.
            </p>
          </div>
          {/* End edian_tm_title *
          
         
          <Blog />
        </div>
      </div>
     */

