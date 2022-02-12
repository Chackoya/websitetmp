import React from "react";

const heroContent = {
  shapeImage: "hero-shape",
  heroImage: "beach_capy",
  name: "PixelBaras",
  description: `Collection of capybaras `,
};

const Hero = () => {

  return (
    //    HERO

      //*<div className="content">*/
    
    <div className="edina_tm_hero" id="home">  
          <div className="content">
                    <img //className="image"
            src={`img/hero/${heroContent.shapeImage}`}
            srcSet={`img/hero/${heroContent.heroImage}.png`}
            alt="hero image"
          />
   

          </div>



    </div>
  );
};

export default Hero;

/*
          <img
            src={`img/hero/${heroContent.shapeImage}`}
            srcSet={`img/hero/${heroContent.heroImage}.png`}
            alt="hero image"
          />
        

const Hero = () => {
  return (
    //    HERO
    <div className="edina_tm_hero" id="home">
      <div className="content">
        
        <div className="extra">
          <h1
            className="name"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            {heroContent.name}
          </h1>
          <p
            className="text"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            {heroContent.description}
          </p>

          <div
            className="social"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
          <div className="img-shape" data-aos="fade-up" data-aos-duration="1200">
          <img
            src={`img/hero/${heroContent.shapeImage}`}
            srcSet={`img/hero/${heroContent.heroImage}.png`}
            alt="hero image"
          />
        </div>

          </div>

        </div>
      </div>
    </div>
    // /HERO
  );
};

export default Hero;*/