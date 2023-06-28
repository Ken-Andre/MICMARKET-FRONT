import React from "react";
import { useNavigate, NavLink, Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
// import ProductCard from '../components/ProductCard';
import TopProject from "../components/TopProject";
// import useLogout from '../hooks/useLogout'

import { animate, motion } from "framer-motion";
import {
  FadeInFromLeft,
  FadeInFromRight,
} from "../components/custom-animation";

//Mes anims transition entre 2 pages
const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Home = () => {
  // Element(s)
  //const box = document.getElementById("box");

  //animate(box, { opacity: 0 }, { duration: 0.5 });

  // Selectors
  //animate("div", { x: [0, 100] }, { type: "spring" });
  return (
    <>
      <motion.div initial="initial" animate={pageTransition} exit="exit">
        {/* Section pour un welcome avec image en background et un effet de vitre noir */}
        {/* <div className='untree-hero-container'>
        <div className=' untree-subcontainer'>
          <div className='row align-items-center'>
            <div className='text-white text-center position-absolute top-50 start-50 translate-middle'>
              <h1 className='welcome-text '> {/* fw-bold fs-4 fs-xl-5 *\/}
                Participez à la croissance des startups locaux et internationaux !
              </h1>
            </div>
          </div>
        </div>
      </div> */}
        <motion.div
          className="untree-hero-container"
          layout
          initial={{ height: 0, scale: 0 }}
          animate={{ height: "unset", scale: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            type: "fade",
            //type: "spring",
            //stiffness: 260,
            //damping: 20
          }}
        >
          <div className=" untree-subcontainer">
            <div className="row align-items-center">
              {/* <!-- Example Code --> */}

              <div
                id="carouselExampleAutoplaying"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                      width="800"
                      height="500"
                      src="/images/ani-kolleshi-medical.jpg"
                      // xmlns="http://www.w3.org/2000/svg"
                      // role="img"
                      aria-label="Placeholder: First slide"
                      // preserveAspectRatio="xMidYMid slice"
                      // focusable="false"
                    />

                    {/* </svg> */}
                  </div>
                  <div className="carousel-item">
                    <img
                      className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                      width="800"
                      height="500"
                      src="images/nathan-dumlao-fintech.jpg"
                      // xmlns="http://www.w3.org/2000/svg"
                      // role="img"
                      aria-label="Placeholder: Second slide"
                      // preserveAspectRatio="xMidYMid slice"
                      // focusable="false"
                    />

                    {/* </svg> */}
                  </div>
                  <div className="carousel-item">
                    <img
                      className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                      width="800"
                      height="500"
                      src="images/jessica-felicio-cosmetics.jpg"
                      // xmlns="http://www.w3.org/2000/svg"
                      // role="img"
                      aria-label="Placeholder: Third slide"
                      // preserveAspectRatio="xMidYMid slice"
                      // focusable="false"
                    />
                    {/* <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#555"></rect>
                  </svg> */}
                  </div>
                  <div className="carousel-item">
                    <img
                      className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                      width="800"
                      height="500"
                      src="images/possessed-photography-robotics.jpg"
                      // xmlns="http://www.w3.org/2000/svg"
                      // role="img"
                      aria-label="Placeholder: Third slide"
                      // preserveAspectRatio="xMidYMid slice"
                      // focusable="false"
                    />
                    {/* <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#555"></rect>
                  </svg> */}
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className="welcome-text text-white text-center position-absolute top-50 start-50 translate-middle">
                <h1 className="welcome-text ">
                  Participez à la croissance des startups locaux et
                  internationaux !
                </h1>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Fin Section pour un welcome avec image en background et un effet de vitre noir*/}

        {/* Section Information */}
        <section className="information">
          <div className="container flex">
            {/* A gauche */}
            <FadeInFromRight>
              <div className="row info-1">
                {/* <!-- Text info--> */}
                <div className="col-md-6">
                  <div className="text-information">
                    <h5>
                      Genere des revenus et impressionne ton entourage de ton
                      patriotisme{" "}
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
                      Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <img
                    src="images/clipart1.svg"
                    alt="img-1"
                    className="w-100 "
                  />
                </div>
              </div>
            </FadeInFromRight>

            {/* A droite */}
            <FadeInFromLeft>
              <div className="row info-2">
                {/* <!-- Image --> */}
                <div className="col-md-6">
                  <img
                    src="images/clipart2.svg"
                    alt="img-2"
                    className="w-100 "
                  />
                </div>
                {/* <!-- Text info--> */}
                <div className="col-md-6">
                  <div className="text-information">
                    <h5>
                      Investissement meme a faible budget mais la qualite reste
                      la meme{" "}
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
                      Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInFromLeft>
          </div>
        </section>

        {/* Section Projets de l'annee | Top 3 projets*/}
        <section className="information p-3 m-0 border-0 bd-example">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {/*
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card product-card">

              <h3 className="card-title">
                <span className="right-gap">
                  <img src="images/ejara.png"
                    alt="Image produit 1"
                    width="70"
                    height="70" />
                </span>
                Ejara
              </h3>
              <div className="card-body">
                <p>Description 3-4 lignes d'Ejara</p>
              </div>
              <div className="card-footer">
                <div className="stars">
                  {/* <!-- Composant React Star avec une valeur aléatoire entre 3.8 et 5 --> *\/}
                </div>
                <a href="#">Voir Plus</a>
              </div>
            </div>
          </div>
          <div className=" col-sm-12 col-md-6 col-lg-4">
            <div className=" card product-card ">

              <h3 className="card-title">
                <span className="right-gap">
                  <img src="images/maviance.jpeg"
                    alt="Image produit 2"
                    width="70"
                    height="70" />
                </span>
                Maviance
              </h3>
              <div className="card-body">
                <p>Description 3-4 lignes de Maviance</p>
              </div>
              <div className="card-footer">
                <div className="stars">
                  {/* <!-- Composant React Star avec une valeur aléatoire entre 3.8 et 5 --> *\/}
                </div>
                <a href="#">Voir Plus</a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card product-card">

              <h3 className="card-title">
                <span className="right-gap">
                  <img src="images/image_google.png"
                    alt="Image produit 3"
                    width="70"
                    height="70" />
                </span>
                Google
              </h3>
              <div className="card-body">
                <p>Description 3-4 lignes de Google</p>
              </div>
              <div className="card-footer">
                <div className="stars">
                  {/* <!-- Composant React Star avec une valeur aléatoire entre 3.8 et 5 --> *\/}
                </div>
                <a href="#">Voir Plus</a>
              </div>
            </div>
  </div>*/}
            <TopProject
              imgSrc="images/ejara.png"
              alt="Ejara Brand"
              cardTitle="Ejara"
              className="product-card"
              href="#"
            >
              Ejara est une entreprise dans la cryptomonnaie proposant des
              services d'epargne pour foyers.
            </TopProject>
            <TopProject
              imgSrc="images/ejara.png"
              alt="Ejara Brand"
              cardTitle="Ejara"
              className="product-card"
              href="#"
            >
              Ejara est une entreprise dans la cryptomonnaie proposant des
              services d'epargne pour foyers.
            </TopProject>
            <TopProject
              imgSrc="images/ejara.png"
              alt="Ejara Brand"
              cardTitle="Ejara"
              className="product-card"
              href="#"
            >
              Ejara est une entreprise dans la cryptomonnaie proposant des
              services d'epargne pour foyers.
            </TopProject>
          </div>
        </section>

        {/* Section defilement brand | Partenaires */}
        <section className="marque-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className=" center align-center-items">
                <h1>Il nous font Confiance</h1>
              </div>
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="Samsung brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="myNkwa brand"
                    >
                      <g transform="translate(241.982 94.476)">
                        <path
                          d="M-68.426-93.964A107.641,107.641,0,0,1-171.333-1.705,93.052,93.052,0,0,1-78.28-94.476,96.964,96.964,0,0,1-68.426-93.964Z"
                          fill="#2fb28f"
                        ></path>
                        <path
                          d="M-174.986-2.564c0,.281,0,.578-.017.859a67.088,67.088,0,0,1-66.979-63.639c1.356-.082,2.712-.132,4.084-.132A62.911,62.911,0,0,1-174.986-2.564Z"
                          fill="#2fb28f"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-09.png" alt="Mboa Digital brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-10.png" alt="Cotco brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-11.png" alt="CBC BANK brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-12.png" alt="5NKAP brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-13.jpg" alt="Broli brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="images/brand-14.png"
                      alt="Waspito brand"
                      style={{ backgroundColor: "limegreen" }}
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="images/brand-15.png"
                      alt="Digital Square brand"
                      style={{ backgroundColor: "#0076a4" }}
                    />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </section>

        {/* Section creer un compte | Profils*/}
        <section className="information mx-auto">
          <motion.div
            className="items text-center"
            layout
            initial={{ height: 0, scale: 0, background: "#070707" }}
            animate={{ height: "unset", scale: 1 }}
            whileInView={{background: "#fafafa"}}
            transition={{
              delay: 0.2,
              duration: 1.5,
              //type: "fade",
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
          >
            <div className="row align-items-center">
              <div className="col-md-4 bottom-gap-md">
                <img src="images/icons-1.svg" alt="Description de l'image" />
                <div className="desc">
                  <h3>Projet/Startup</h3>
                  <p>Créer un compte pour startup</p>
                  <NavLink to="/auth/startup" className="btn btn-primary">
                    <i className="fas fa-arrow-right"></i> S'inscrire
                  </NavLink>
                </div>
              </div>
              <div className="col-md-4 bottom-gap-md">
                <img src="images/icons-1.svg" alt="Description de l'image" />
                <div className="desc">
                  <h3>Investisseur</h3>
                  <p>Créer un compte</p>
                  <NavLink to="/auth/signup" className="btn btn-primary">
                    <i className="fas fa-arrow-right"></i> S'inscrire
                  </NavLink>
                </div>
              </div>
              <div className="col-md-4 bottom-gap-md">
                <img src="images/icons-1.svg" alt="Description de l'image" />
                <div className="desc">
                  <h3>Banque</h3>
                  <p>Etablir un partenariat</p>
                  <NavLink to="/contact" className="btn btn-primary">
                    <i className="fas fa-arrow-right"></i> Cliquez ici{" "}
                  </NavLink>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Warning Section */}
        <section className="setup">
          <div className="items text-center">
            <div className="container">
              <div className="text-header text-center">
                <h3>
                  Rejoignez les meilleurs investisseurs et soutenez des projets
                  originaux avec nous.
                </h3>{" "}
                {/*Rejoignez les meilleurs investisseurs et soutenez des projets originaux avec nous.*/}
                <p>
                  L'investissement participatif présente un risque important de
                  perte partielle ou totale du capital ainsi qu'un risque
                  d'illiquidité. <br />
                  Un crédit vous engage et doit être remboursé. N'empruntez pas
                  au-delà de votre capacité de remboursement.
                </p>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Home;
