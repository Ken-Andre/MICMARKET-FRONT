import React from "react";

const SingleProd = () => {
  return (
    <>
      <div
        className="fl-places-header jarallax"
        style={{ background: "none", zIndex: 0 }}
        data-jarallax-original-styles={{ background: "url(images/bgheading01.jpg)" }}
      >
        <div className="fl-places-header-overlay"></div>
        <div className="container">
          <div className="fl-places-left">
            <div className="fl-places-logo-contain">
              <span className="fl-places-logo-helper"></span>
              <img
                className="fl-places-logo"
                alt="hotel_logo-1"
                src="images/hotel_logo-1.jpg"
              />
            </div>
            <div className="fl-places-title-contain">
              <span className="fl-places-subtitle">ABC Media</span>

              <span className="fl-places-title">Acehouse Design</span>

              <span className="fl-places-show">
                <i className="fa fa-map-marker" aria-hidden="true"></i>121 King
                Street, Melbourne Victoria 3000, Australia
              </span>
            </div>
          </div>
          <div className="fl-places-right">
            <div className="fl-places-average-meta">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>{" "}
              <span className="fl-places-average">Based on 9 reviews</span>
            </div>
            <span className="fl-average">4.2</span>
          </div>
        </div>
        <div
          style={{ width: "100%", height: "100%", overflow: "hidden", zIndex: "-100", clipPath: "polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%)" }}
          id="jarallax-container-0"
        >
          <div style={{ backgroundPosition: "50% 50%", backgroundSize: "cover", backgroundImage: 'url("images/bgheading01.jpg")', position: "fixed", top: "0px", left: "0px", width: "1920px", height: "401.8px", overflow: "hidden", pointerEvents: "none", transformStyle: "preserve-3d", backfaceVisibility: "hidden", marginTop: "43.6px", transform: "translate3d(0px, -43.6px, 0px)" }}></div>
        </div>
      </div>
    </>
  );
};

export default SingleProd;
