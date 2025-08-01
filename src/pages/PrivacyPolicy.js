import React from "react";
import { motion } from "framer-motion";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const PrivacyPolicy = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
  };

  const pageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.8,
  };

  return (
    <>
      <Meta title={"Politique de confidentialité"} />
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <BreadCrumb title="Politique de confidentialité" />
        <h1>Politique de confidentialité</h1>
        <p>
          Chez <i>JabaSpace</i>, nous prenons la confidentialité de nos clients
          très au sérieux. Cette politique de confidentialité explique comment
          nous collectons, utilisons et protégeons les informations que nous
          recevons de nos clients et des utilisateurs de notre produit
          MICMARKET.
        </p>
        <h2>Collecte d'informations</h2>
        <p>
          Nous collectons des informations sur nos clients lorsque vous vous
          inscrivez pour utiliser notre produit MICMARKET et lorsque vous
          utilisez notre produit. Les informations que nous collectons peuvent
          inclure votre nom, votre adresse e-mail, votre adresse postale et vos
          informations de paiement si vous choisissez d'acheter notre produit.
        </p>
        <h2>Utilisation des informations</h2>
        <p>
          Nous utilisons les informations que nous collectons pour fournir,
          maintenir, protéger et améliorer notre produit MICMARKET. Nous pouvons
          également utiliser ces informations pour vous contacter au sujet de
          produits ou de services supplémentaires que nous proposons et qui
          pourraient vous intéresser.
        </p>
        <h2>Protection des informations</h2>
        <p>
          Nous prenons des mesures de sécurité pour protéger les informations
          que vous nous fournissez contre tout accès, utilisation ou divulgation
          non autorisés. Nous limitons l'accès à vos informations aux employés
          qui ont besoin de connaître ces informations pour fournir ce produit.
        </p>
        <h2>Partage d'informations</h2>
        <p>
          Nous ne partageons pas vos informations avec des tiers sans votre
          consentement, sauf dans les cas suivants :
          <ul>
            <li>
              Nous pouvons partager des informations avec des fournisseurs de
              services tiers qui travaillent pour nous dans le cadre de la
              fourniture de notre produit MICMARKET, tels que des fournisseurs
              de paiement.
            </li>
            <li>
              Nous pouvons partager des informations dans le cadre d'une vente
              ou d'une fusion de notre entreprise, ou dans le cadre d'une
              restructuration, d'une réorganisation ou d'une autre forme de
              vente de certains ou de tous nos actifs.
            </li>
            <li>
              Nous pouvons partager des informations si nous avons une bonne foi
              que l'accès, l'utilisation, la conservation ou la divulgation de
              ces informations est raisonnablement nécessaire pour (a) se
              conformer à toute loi, réglementation, procédure légale ou demande
              gouvernementale applicable, (b) faire respecter nos accords,
              politiques et conditions d'utilisation, (c) détecter, empêcher ou
              traiter toute fraude, sécurité ou problème technique, ou (d)
              protéger contre tout dommage imminent aux droits, à la propriété
              ou à la sécurité de JabaSpace, de nos utilisateurs ou du public
              dans son ensemble.
            </li>
          </ul>
        </p>
        <h2>Modification de la politique de confidentialité</h2>
        <p>
          Nous pouvons modifier cette politique de confidentialité de temps à
          autre. Si nous apportons des modifications importantes à cette
          politique, nous vous en informerons en affichant un avis sur notre
          site web ou en vous envoyant un e-mail. Nous vous encourageons à
          consulter cette page régulièrement pour connaître les dernières
          informations sur nos pratiques en matière de confidentialité.
        </p>
        <h2>Contactez-nous</h2>
        <p>
          Si vous avez des questions sur cette politique de confidentialité ou
          sur les pratiques de JabaSpace en matière de confidentialité, veuillez
          nous contacter à l'adresse suivante :{" "}
          <span className="fw-bold">
            <a href="mailto:jabaspace@gmail.com">jabaspace@gmail.com</a>
          </span>
        </p>
      </motion.div>
    </>
  );
};

export default PrivacyPolicy;
