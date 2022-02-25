import React, { useState } from "react";
const Faq = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    //    ABOUT
    <div className="edina_tm_faq" id="faq">
      <div className="container">
        <div className="faq_title">
          <h3>FAQ</h3>
        </div>
        <div className="content">
          <div
            className="leftpart"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="info">
              <h3>
                <span>Where can we mint?</span>
              </h3>
              <p>
               Mint will be available on Magic Eden only.
              </p>
            </div>

            <div className="info">
              <h3>
                <span>How many PixelBaras will there be?</span>
              </h3>
              <p>
               There will be 5,555.
              </p>
            </div>

            <div className="info">
              <h3>
                <span>How to get Whitelisted?</span>
              </h3>
              <p>
                We have no WL going but we will reward the most active people on discord by giving them a free airdrop.
                Up to 555 places available.
              </p>
            </div>
          </div>
          {/* End leftpart */}

          <div className="rightpart">
            
          </div>
          {/* End righttpart */}
        </div>
      </div>


    </div>
    // /ABOUT
  );
};

export default Faq;