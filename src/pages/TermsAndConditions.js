import React from "react";
import { motion } from "framer-motion";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const TermsAndConditions = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
  };

  const pageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.5,
  };

  return (
    <>
    <Meta title={"Term And Conditions"} />

      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >

<BreadCrumb title="Term And Conditions" />
        <h1>Termes et conditions</h1>

        <p>
          Bienvenue sur MICMARKET, un produit de Jabaspace. Ces termes et
          conditions définissent les règles et réglementations d'utilisation du
          site web et des produits de Jabaspace.
        </p>

        <h2>
          En accédant à notre site web et en utilisant nos produits, vous
          acceptez les termes et conditions suivants :
        </h2>

        <h3>Licence d'utilisation</h3>

        <p>
          Sauf indication contraire, Jabaspace et/ou ses concédants détiennent
          les droits de propriété intellectuelle sur le site web et les
          produits. Vous pouvez afficher, télécharger pour mise en cache
          uniquement et imprimer des pages du site web pour votre usage
          personnel, sous réserve des restrictions énoncées ci-dessous et
          ailleurs dans ces termes et conditions.
        </p>

        <p>Vous ne devez pas :</p>

        <ul>
          <li>
            republier du matériel provenant de ce site web ou de nos produits (y
            compris une republication sur un autre site web);
          </li>
          <li>
            vendre, louer ou sous-licencier du matériel provenant du site web ou
            de nos produits ;
          </li>
          <li>
            montrer tout matériel du site web ou de nos produits en public ;
          </li>
          <li>
            reproduire, dupliquer, copier ou exploiter de quelque manière que ce
            soit du matériel provenant de notre site web ou de nos produits à
            des fins commerciales ;
          </li>
          <li>
            modifier ou autrement utiliser du matériel du site web ou de nos
            produits ; ou
          </li>
          <li>
            redistribuer du matériel provenant de ce site web ou de nos produits
            sauf contenu spécifiquement et expressément mis à disposition pour
            redistribution.
          </li>
        </ul>

        <h3>Utilisation acceptable</h3>

        <p>
          Vous ne devez pas utiliser notre site web ou nos produits de manière à
          causer, ou susceptible de causer, des dommages au site web ou aux
          produits, ou une altération de l'accessibilité ou de la disponibilité
          du site web ou des produits, ou d'une manière illégale, frauduleuse ou
          nuisible, ou en relation avec toute activité ou finalité illégale,
          frauduleuse ou nuisible.
        </p>

        <p>
          Vous ne devez pas utiliser notre site web ou nos produits pour copier,
          stocker, héberger, transmettre, envoyer, utiliser, publier ou
          distribuer tout matériel qui consiste en (ou est lié à) un logiciel
          espion, un virus informatique, un cheval de Troie, un ver, un
          enregistreur de frappe, un rootkit ou tout autre logiciel malveillant.
        </p>

        <h3>Limitations de responsabilité</h3>

        <p>
          Jabaspace ne sera pas responsable envers vous (que ce soit en vertu du
          droit des contrats, du droit de la responsabilité civile ou autrement)
          en relation avec le contenu, l'utilisation ou autrement en relation
          avec ce site web ou nos produits de toute perte indirecte, spéciale ou
          consécutive ; ou pour toute perte d'activité, de revenus, de profits
          ou d'économies anticipées, de contrats ou de relations d'affaires, de
          réputation ou de bonne volonté, ou de perte ou de corruption
          d'informations ou de données.
        </p>

        <p>
          Ces limitations de responsabilité s'appliquent même si Jabaspace a été
          expressément avisé de la perte potentielle.
        </p>

        <h3>Indemnisation</h3>

        <p>
          Vous acceptez d'indemniser Jabaspace et ses employés, agents et
          directeurs, contre toute demande, action, poursuite, ainsi que toutes
          les pertes, responsabilités, dommages, coûts et dépenses (y compris
          les honoraires d'avocat raisonnables) découlant de ou en relation avec
          votre utilisation du site web ou de nos produits.
        </p>

        <h3>Droit applicable et juridiction</h3>

        <p>
          Ces termes et conditions seront régis et interprétés conformément aux
          lois du Cameroun, et tout litige relatif à ces termes et conditions
          sera soumis à la compétence exclusive des tribunaux du Cameroun.
        </p>

        <h3>Modifications des termes et conditions</h3>

        <p>
          Jabaspace se réserve le droit de modifier ces termes et conditions à
          tout moment. Votre utilisation continue du site web et de nos produits
          après de tels changements constitue votre acceptation des nouveaux
          termes et conditions. Nous vous encourageons à consulter régulièrement
          cette page pour toute mise à jour ou changement.
        </p>

        <h3>Contactez-nous</h3>

        <p>
          Si vous avez des questions sur ces termes et conditions, veuillez nous
          contacter à l'adresse{" "}
          <span className="fw-bold">
            <a href="mailto:jabaspace@gmail.com">jabaspace@gmail.com</a>
          </span>
          .
        </p>
      </motion.div>
    </>
  );
};

export default TermsAndConditions;
