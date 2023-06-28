import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsTiktok, BsYoutube, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      {/* <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
               <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src='images/newsletter.png' alt='newsletter' />
                <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className='col-7'>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
      <footer className="py-">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Address : 3e etage Immeuble IPN <br /> Bonapriso, Cameroun{" "}
                  <br />
                  PB: 5504
                </address>
                <a
                  href="tel: +237 678495663"
                  className="mt-4 d-block mb-1 text-white"
                >
                  +237 678 49 56 63
                </a>
                <a
                  href="mailto: jabaspace@gmail.com"
                  className="mt-4 d-block mb-0 text-white"
                >
                  jabaspace@gmail.com
                </a>
                <div className=" d-flex align-items-center gap-30 mt-4">
                  <a
                    href="https://www.instagram.com/jabaspace/?hl=fr"
                    className="mt-2 d-block mb-0 text-white"
                  >
                    <BsInstagram className="fs-4" />
                  </a>
                  <a
                    href="https://www.youtube.com/@JabaSpace"
                    className="mt-2 d-block mb-0 text-white"
                  >
                    <BsYoutube className="fs-4" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@jabaspace"
                    className="mt-2 d-block mb-0 text-white"
                  >
                    <BsTiktok className="fs-4" />
                  </a>
                  <a
                    href="https://linkedin.com/company/jabaspace"
                    className="mt-2 d-block mb-0 text-white"
                  >
                    <BsLinkedin className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Policies</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1" to="privacy">Privacy </Link>
                {/*<Link className='text-white py-2 mb-1'>Refund Policy</Link>
                <Link className='text-white py-2 mb-1'>Use Policy</Link>*/}
                <Link to="terms" className="text-white py-2 mb-1">
                  Terms
                </Link>
                {/*<Link className='text-white py-2 mb-1'>Aknowledgments</Link>*/}
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Company</h4>
              <div className="footer-link d-flex flex-column">
                {/*<Link className='text-white py-2 mb-1'>Search</Link>*/}
                <Link to="about" className="text-white py-2 mb-1">About Us</Link>
                <Link to="faq" className="text-white py-2 mb-1">
                  Faq
                </Link>
                {/*<Link className='text-white py-2 mb-1'>Contact</Link>
                <Link className='text-white py-2 mb-1'>Site Chart</Link>*/}
              </div>
            </div>
            {/* <div className="col-2">
              <h4 className="text-white mb-4">Our App</h4>
              <div></div>
            </div> */}
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()} Powered by Dev Kyan (TheKyan)
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
