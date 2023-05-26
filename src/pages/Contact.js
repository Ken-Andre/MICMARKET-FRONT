import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
// import Container from "../components/Container";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      {/*<BreadCrumb title="Contact Us" />*/}
      <div className="contact-wrapper py-1 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            {/* Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.9806327236392!2d9.69639937438082!3d4.024360347150717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106113b7bdb4f133%3A0xc7197d58514b7304!2sJABA%20SPACE!5e0!3m2!1sen!2scm!4v1685100488031!5m2!1sen!2scm"
              width="600"
              height="450"
              className="border-0 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* Maps end */}
          </div>
          {/* Div pour aligner centrer et  contenir 2 div sur un grand ecran et un pour les ecran n'etant pas capables */}
          <div className="container d-flex flex-column justify-content-center align-items-center">
            <div className="col-12 mt-5 p-0 ">
              <div className="contact-inner-wrapper d-flex flex-column flex-md-row justify-content-between">
                {/* Div formulaire pour prise contact */}
                <div className="col-md-2 order-1 order-md-2 mb-3">
                  <div class="container">
                    <div class="row justify-content-center">
                      <div class="col-sm-10 col-md-8 col-lg-8">
                        <div class="">
                          <div class="card-body">
                            <h4 class="card-title text-center mb-4">Contactez-nous</h4>
                            <form>
                              <div class="mb-3">
                                <label for="name" class="form-label">Nom</label>
                                <input type="text" class="form-control "  id="name" placeholder="Your Name Here ..." required />
                              </div>
                              <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" placeholder="name@email.domain" required />
                              </div>
                              <div class="mb-3">
                                <label for="phone" class="form-label">Téléphone</label>
                                <input type="tel" class="form-control" id="phone" placeholder="+(--) 678495663" required />
                              </div>
                              <div class="mb-3">
                                <label for="message" class="form-label">Message</label>
                                <textarea class="form-control" id="message" placeholder="Votre message ici ..." rows="4" required></textarea>
                              </div>
                              <div class="d-grid gap-2">
                                <button type="submit" class="btn btn-primary ">Envoyer</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Fin Div formulaire pour prise de contact */}
                {/* Div pour info utiles pour nous contacter */}
                <div className="col-md-6 p-4 order-2 order-md-1">
                  <h3 className="contact-title mb-4">Infos Utiles</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineHome className="fs-5" />
                        <address className="mb-0">
                          Addresse : 3e etage Immeuble IPN  <br /> Bonapriso, Cameroun <br />
                          PB: 5504
                        </address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiPhoneCall className="fs-5" />
                        <a href="tel:+237 678453040">+237 678453040</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineMail className="fs-5" />
                        <a href="mailto:jabaspace@gmail.com">
                          jabaspace@gmail.com
                        </a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiInfoCircle className="fs-5" />
                        <p className="mb-0">Monday – Friday 9 AM – 8 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Fin Div pour info utiles pour nous contacter*/}
              </div>
            </div>
          </div >
          {/* Fin Div pour aligner centrer et  contenir 2 div sur un grand ecran et un pour les ecran n'etant pas capables  */}
        </div>
      </div>
    </>
  );
};

export default Contact;
