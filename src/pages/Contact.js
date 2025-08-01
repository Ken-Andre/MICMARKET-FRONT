import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import { axiosPrivate } from "../api/axios";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import Container from "../components/Container";

const Contact = () => {
  const [cName, setCName] = useState([""]);
  const [cMail, setCMail] = useState([""]);
  const [cTel, setCTel] = useState([""]);
  const [cMessage, setMessage] = useState([""]);
  // Iframe status
  const [isLoaded, setIsLoaded] = useState(false);

  const handleOnChngName = (e) => {
    setCName(e.target.value);
  };
  const handleOnChngMail = (e) => {
    setCMail(e.target.value);
  };
  const handleOnChngTel = (e) => {
    setCTel(e.target.value);
  };
  const handleOnChngMsg = (e) => {
    setMessage(e.target.value);
  };

  const handleCContact = (e) => {
    e.preventDefault();
    const payload = {
      Name: cName,
      Email: cMail,
      Message: cMessage,
      Mobile: cTel,
    };

    // Afficher un toast pour indiquer que la requête est en cours
    const loadingToast = toast.info(
      "Envoi de la demande de contact en cours..."
    );

    // Envoyer la requête avec axios
    axiosPrivate
      .post("/contact", payload)
      .then((response) => {
        // Délai de 0,7 seconde avant d'afficher un autre toast
        setTimeout(() => {
          if (response.status === 200) {
            // Masquer le toast
            toast.dismiss();
            // Toast pour le success
            toast.success(
              "Votre demande de contact a été envoyée avec succès !"
            );
            // // Ouvrir l'application de messagerie par défaut avec le corps et l'en-tête de la demande de contact
            // const subject = encodeURIComponent(
            //   "Demande de prise de contact - De MICMarket"
            // );
            // const body = encodeURIComponent(
            //   `${cMessage}\n\n${cName}\n${cMail}\n${cTel}`
            // );
            // const mailtoUrl = `mailto:?subject=${subject}&body=${body}`;
            // window.location.href = mailtoUrl;
          }
          // else {
          //   toast.error(
          //     "Une erreur est survenue lors de l'envoi de la demande de contact."
          //   );
          //   throw new Error(
          //     "Une erreur est survenue lors de l'envoi de la demande de contact."
          //   );
          // }
        }, 545);
      })
      .catch((error) => {
        setTimeout(() => {
          // Afficher un toast d'erreur si une erreur s'est produite
          toast.dismiss(loadingToast);
          toast.error(error.message);
        }, 545);
      });

    // Envoie le message par mail
    // Ouvrir l'application de messagerie par défaut avec le corps et l'en-tête de la demande de contact
    const subject = encodeURIComponent(
      "Demande de prise de contact - De MICMarket"
    );
    const body = encodeURIComponent(
      `${cMessage}\n\n${cName}\n${cMail}\n${cTel}`
    );
    const mailtoUrl = `mailto:?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  const { ref, inView } = useInView({
    threshold: 0.5, // Change this value to adjust when the animation starts
    triggerOnce: true, // Animation plays only once
  });

  return (
    <>
      <Meta title={"Contact Us"} />
      {/*<BreadCrumb title="Contact Us" />*/}
      <ToastContainer />
      <div className="contact-wrapper  home-wrapper-2">
        <div className="row">
          {/* Div de la localisation sur map */}
          <div className="col-12">
            <motion.div
              className="position-relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.545 }}
            >
              {/* Loading progress bar */}
              {!isLoaded && (
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                  style={{ height: "450px", width: "100%" }} // set height and width of loading placeholder
                >
                  <div className="progress w-100">
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              )}
              {/* Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.9806327236392!2d9.69639937438082!3d4.024360347150717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106113b7bdb4f133%3A0xc7197d58514b7304!2sJABA%20SPACE!5e0!3m2!1sen!2scm!4v1685100488031!5m2!1sen!2scm"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={() => setIsLoaded(true)} // set loading status to false when iframe is loaded
              ></iframe>
              {/* Maps end */}
            </motion.div>
          </div>
          {/* Fin div  de la localisation sur map*/}
          {/* Div pour aligner centrer et  contenir 2 div sur un grand ecran et un pour les ecran n'etant pas capables */}
          <div className="container d-flex flex-column justify-content-center align-items-center">
            <div className="col-12 mt-5 p-0 ">
              <div className="contact-inner-wrapper d-flex flex-column flex-md-row justify-content-between">
                {/* Div formulaire pour prise contact */}
                <div className="col-md-2 order-1 order-md-2 mb-3">
                  <div class="container">
                    <div class="row justify-content-center">
                      <div class="col-sm-10 col-md-8 col-lg-8">
                        <motion.div
                          class=""
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.545 }}
                        >
                          <div class="card-body">
                            <h4 class="card-title text-center mb-4">
                              Contactez-nous
                            </h4>
                            <form>
                              <div class="mb-3">
                                <label for="name" class="form-label">
                                  Nom
                                </label>
                                <input
                                  type="text"
                                  class="form-control "
                                  value={cName}
                                  onChange={handleOnChngName}
                                  id="name"
                                  placeholder="Your Name Here ..."
                                  required
                                />
                              </div>
                              <div class="mb-3">
                                <label for="email" class="form-label">
                                  Email
                                </label>
                                <input
                                  type="email"
                                  class="form-control"
                                  value={cMail}
                                  onChange={handleOnChngMail}
                                  id="email"
                                  placeholder="name@email.domain"
                                  required
                                />
                              </div>
                              <div class="mb-3">
                                <label for="phone" class="form-label">
                                  Téléphone
                                </label>
                                <input
                                  type="tel"
                                  class="form-control"
                                  value={cTel}
                                  onChange={handleOnChngTel}
                                  id="phone"
                                  placeholder="+(--) 678495663"
                                  required
                                />
                              </div>
                              <div class="mb-3">
                                <label for="message" class="form-label">
                                  Message
                                </label>
                                <textarea
                                  class="form-control"
                                  value={cMessage}
                                  onChange={handleOnChngMsg}
                                  id="message"
                                  placeholder="Votre message ici ..."
                                  rows="4"
                                  required
                                ></textarea>
                              </div>
                              <div class="d-grid gap-2">
                                <button
                                  type="submit"
                                  class="btn btn-primary "
                                  onClick={handleCContact}
                                >
                                  Envoyer
                                </button>
                              </div>
                            </form>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Fin Div formulaire pour prise de contact */}
                {/* Div pour info utiles pour nous contacter */}
                <motion.div
                  class="row"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.545 }}
                >
                  <div className="col-md-6 p-4 order-2 order-md-1">
                    <h3 class="contact-title mb-4">Infos Utiles</h3>
                    <div>
                      <ul class="ps-0 ">
                      <li class="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineHome className="fs-5" />
                        <address class="mb-0">
                          Addresse : 3e etage Immeuble IPN <br /> Bonapriso,
                          Cameroun <br />
                          PB: 5504
                        </address>
                      </li>
                      <li class="mb-3 d-flex gap-15 align-items-center">
                        <BiPhoneCall className="fs-5" />
                        <a href="tel:+237 678453040">+237 678453040</a>
                      </li>

                    </ul>
                    </div>
                    <div>
                      <ul class="ps-0 ">

                      <li class="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineMail className="fs-5" />
                        <a href="mailto:jabaspace@gmail.com">
                          jabaspace@gmail.com
                        </a>
                      </li>
                      <li class="mb-3 d-flex gap-15 align-items-center">
                        <BiInfoCircle className="fs-5" />
                        <p class="mb-0">Monday – Friday 9 AM – 8 PM</p>
                      </li>
                    </ul>
                    </div>

                  </div>
                </motion.div>
                {/* Fin Div pour info utiles pour nous contacter*/}
              </div>
            </div>
          </div>
          {/* Fin Div pour aligner centrer et  contenir 2 div sur un grand ecran et un pour les ecran n'etant pas capables  */}
        </div>
      </div>
    </>
  );
};

export default Contact;
