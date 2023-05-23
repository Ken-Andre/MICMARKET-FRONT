import React from 'react'
import { Link } from "react-router-dom";
import Marquee from 'react-fast-marquee';

const Home = () => {
  return (
    <>
      {/* Section pour un welcome avec image en background et un effet de vitre noir */}
      <div className='untree-hero-container'>
        <div className=' untree-subcontainer'>
          <div className='row align-items-center'>
            <div className='text-white text-center position-absolute top-50 start-50 translate-middle'>
              <h1 className='welcome-text '> {/* fw-bold fs-4 fs-xl-5 */}
                Seriez-vous intéressé(e) par devenir la personne clé qui contribuera à l'essor des entreprises ?
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* Fin Section pour un welcome avec image en background et un effet de vitre noir*/}

      {/* Section Information */}
      <section class="information">
        <div class="container">
          <div class="row info-1">
            {/* <!-- Text info--> */}
            <div class="col-md-6">
              <div class="text-information">
                <h5>Genere des revenus et impressionne ton entourage de ton patriotisme </h5>
                <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
                  Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <img src="images/clipart1.svg" alt="img-1" class="w-100 " />
            </div>
          </div>
          <div class="row info-2">
            {/* <!-- Image --> */}
            <div class="col-md-6">
              <img src="images/clipart2.svg" alt="img-2" class="w-100 " />
            </div>
            {/* <!-- Text info--> */}
            <div class="col-md-6">
              <div class="text-information">
                <h5>Investissement meme a faible budget mais la qualite reste la meme </h5>
                <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
                  Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Section defilement brand */}
      <section className="marque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className=' center align-center-items'>
              <h1>Il nous font Confiance</h1>
            </div>
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </section>

      {/* Resume 3 columns svg */}
      <section class="setup">
        <div class="items text-center">
          <div class="row">
            <div class="col-md-4">
              <div class="icons">
                <Link to='/'>
                  <img src="images/icons-1.svg" alt="icons" />
                </Link>
              </div>
              <div class="desc">
                <h5>Create accounts</h5>
                <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="icons">
                <Link to='/'>
                  <img src="images/icons-2.svg" alt="icons" />
                </Link>
              </div>
              <div class="desc">
                <h5>Faites des profits patriotiques </h5>
                <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</p>
              </div>

            </div>
            <div class="col-md-4">
              <div class="icons">
                <Link to='/'>
                  <img src="images/icons-3.svg" alt="icons" />
                </Link>
              </div>
              <div class="desc">
                <h5>Faites connaitre votre startup de tous</h5>
                <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</p>
              </div>

            </div>
          </div>
        </div>
        <div class="container">
          <div class="text-header text-center">
            <h3>Participez à la croissance des startups locaux et internationaux !</h3>
            <p>
              L'investissement participatif présente un risque important de perte partielle ou totale du capital ainsi qu'un risque d'illiquidité. <br />
              Un crédit vous engage et doit être remboursé. N'empruntez pas au-delà de votre capacité de remboursement.
            </p>
          </div>
        </div>
      </section>

    </>
  );

}

export default Home
