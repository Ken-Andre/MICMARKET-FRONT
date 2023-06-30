import React from "react";
import { motion } from "framer-motion";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const About = () => {
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

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.8 } },
  };

  return (
    <>
      <Meta title={"A propos de JabaSpace"} />
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <BreadCrumb title="A propos" />

        <motion.h1 variants={textVariants}>A propos de JabaSpace</motion.h1>
        <motion.p variants={textVariants}>
          JabaSpace est une plateforme de développement technologique qui se
          concentre sur la création de solutions innovantes pour les entreprises
          et les particuliers au Cameroun. Nous sommes passionnés par la
          technologie et nous nous engageons à fournir des solutions de haute
          qualité qui répondent aux besoins en constante évolution de nos
          clients.
        </motion.p>
        <motion.h2 variants={textVariants}>MICMARKET</motion.h2>
        <motion.p variants={textVariants}>
          MICMARKET est le marketplace de toutes les startups camerounaises. Il
          offre une plateforme pour les entrepreneurs, les créateurs de contenu
          et les artistes pour vendre leurs produits et services en ligne. Nous
          sommes fiers de soutenir les startups locales et de les aider à
          atteindre un public plus large grâce à notre plateforme. Nous sommes
          convaincus que les startups sont le moteur de la croissance économique
          au Cameroun et nous sommes déterminés à les aider à réussir.
        </motion.p>
        <motion.h2 variants={textVariants}>Perspectives et envergure</motion.h2>
        <motion.p variants={textVariants}>
          Chez JabaSpace, nous sommes constamment à la recherche de nouvelles
          opportunités pour étendre notre portée et notre impact. Nous sommes
          convaincus que la technologie peut aider à résoudre certains des plus
          grands défis auxquels fait face le Cameroun, et nous sommes engagés à
          faire notre part pour soutenir la croissance économique et le
          développement social dans le pays. Nous envisageons un avenir où la
          technologie est accessible à tous et où les startups locales peuvent
          réellement prospérer et réussir.
        </motion.p>
        <motion.h2 variants={textVariants}>
          Etat de l'art du thème au Cameroun
        </motion.h2>
        <motion.p variants={textVariants}>
          Le Cameroun est en train de devenir un hub technologique en Afrique
          centrale, avec une communauté de startups dynamique et en croissance
          rapide. Les innovations technologiques ont le potentiel de résoudre
          certains des plus grands défis auxquels le pays est confronté, tels
          que la pauvreté, le manque d'accès aux soins de santé, l'accès à
          l'éducation, et autres besoins de première nécessité (Taux de
          delestages). De plus en plus de jeunes entrepreneurs camerounais
          cherchent à créer des entreprises innovantes dans différents secteurs
          tels que la fintech, l'agritech, la medtech, l'edtech et bien
          d'autres.
        </motion.p>
        <motion.p variants={textVariants}>
          Cependant, il existe encore des défis à relever, tels que le manque
          d'infrastructures technologiques, le manque de financement et de
          soutien gouvernemental, ainsi que le manque de compétences techniques
          chez certains entrepreneurs. JabaSpace est déterminé à contribuer à la
          création d'un écosystème technologique florissant au Cameroun en
          fournissant des solutions innovantes et en soutenant les startups
          locales.
        </motion.p>
        <motion.h3 variants={textVariants}>Contactez-nous</motion.h3>
        <motion.p variants={textVariants}>
          Si vous avez des questions sur JabaSpace ou sur MICMARKET, veuillez
          nous contacter à l'adresse{" "}
          <span className="fw-bold">
            <a href="mailto:jabaspace@gmail.com">jabaspace@gmail.com</a>
          </span>
          .
        </motion.p>
      </motion.div>
    </>
  );
};

export default About;
