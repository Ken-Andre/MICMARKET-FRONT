import React from 'react';
import { Link } from 'react-router-dom';
//import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
//import "./faqstyle.css"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container, Button } from 'react-bootstrap';



const FAQ = () => {


  return (
    <>
      <Container className="py-2 p-4">
        <h4 class="title">Questions fréquentes sur le crowdfunding</h4>
        <div class="accordion">
          <div class="accordion-item">
            <h2 class="accordion-header" id="heading-1">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
                Qu'est-ce que le crowdfunding ?
              </button>
            </h2>
            <div id="collapse-1" class="accordion-collapse collapse" aria-labelledby="heading-1"
              data-bs-parent=".accordion">
              <div class="accordion-body">
                Le crowdfunding est une méthode de financement participatif qui permet à un grand nombre de personnes de
                contribuer financièrement à un projet en échange de contreparties ou de parts.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="heading-2">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
                Comment fonctionne le crowdfunding ?
              </button>
            </h2>
            <div id="collapse-2" class="accordion-collapse collapse" aria-labelledby="heading-2"
              data-bs-parent=".accordion">
              <div class="accordion-body">
                Les porteurs de projet mettent en ligne leur projet sur une plateforme de crowdfunding, où les
                contributeurs peuvent choisir de financer le projet en échange de contreparties ou de parts. Si le projet
                atteint son objectif de financement, les fonds sont ensuite collectés et transférés au porteur de projet.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="heading-3">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
                Quelles sont les contreparties proposées aux contributeurs ?
              </button>
            </h2>
            <div id="collapse-3" class="accordion-collapse collapse" aria-labelledby="heading-3"
              data-bs-parent=".accordion">
              <div class="accordion-body">
                Les contreparties proposées aux contributeurs peuvent varier selon le projet, mais elles peuvent inclure
                des produits ou des services liés au projet, des mentions ou des remerciements sur le site du projet, ou
                encore des parts dans l'entreprise.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="heading-4">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapse-4" aria-expanded="false" aria-controls="collapse-4">
                Quels sont les risques pour les contributeurs dans le cadre du crowdfunding ?
              </button>
            </h2>
            <div id="collapse-4" class="accordion-collapse collapse" aria-labelledby="heading-4"
              data-bs-parent=".accordion">
              <div class="accordion-body">
                Les contributeurs prennent un risque financier en finançant un projet de crowdfunding, car il n'y a
                aucune garantie que le projet aboutira ou que les fonds seront remboursés en cas d'échec du projet. Il est
                donc important de bien comprendre les risques avant de contribuer à un projet de crowdfunding.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="heading-5">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapse-5" aria-expanded="false" aria-controls="collapse-5">
                Comment choisir un projet de crowdfunding à financer ?
              </button>
            </h2>
            <div id="collapse-5" class="accordion-collapse collapse" aria-labelledby="heading-5"
              data-bs-parent=".accordion">
              <div class="accordion-body">
                Il est important de bien comprendre le projet, le porteur de projet, et les risques avant de contribuer à
                un projet de crowdfunding. Il peut être utile de lire attentivement la description du projet et les
                commentaires des autres contributeurs, ainsi que de faire des recherches supplémentaires sur le porteur de
                projet et son expérience. Il est également important de vérifier que la plateforme de crowdfunding estfiable et sécurisée.
              </div>
            </div>
          </div>
        </div>
        <p class="message">
          Si vous avez d'autres questions ou des incompréhensions, n'hésitez pas à nous contacter via notre page de <Link to="/contact" className="left-gap text-primary-emphasis"> contact</Link>.
        </p>
        <div class="text-center">
          <button class="btn btn-primary contactButton" type="button">Contact</button>
        </div>
      </Container>
    </>
  );
};

export default FAQ;
