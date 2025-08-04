import React from 'react';
import { Typography } from 'antd';
import Meta from '../components/Meta';

const { Title, Paragraph, Text } = Typography;

const About = () => {
    return (
        <>
            <Meta title={"A propos de JabaSpace"} />
            <div style={{ padding: '50px' }}>
                <Title level={2} style={{ textAlign: 'center', marginBottom: '50px' }}>A propos de JabaSpace</Title>
                <Paragraph>
                    JabaSpace est une plateforme de développement technologique qui se
                    concentre sur la création de solutions innovantes pour les entreprises
                    et les particuliers au Cameroun. Nous sommes passionnés par la
                    technologie et nous nous engageons à fournir des solutions de haute
                    qualité qui répondent aux besoins en constante évolution de nos
                    clients.
                </Paragraph>
                <Title level={3}>MICMARKET</Title>
                <Paragraph>
                    MICMARKET est le marketplace de toutes les startups camerounaises. Il
                    offre une plateforme pour les entrepreneurs, les créateurs de contenu
                    et les artistes pour vendre leurs produits et services en ligne. Nous
                    sommes fiers de soutenir les startups locales et de les aider à
                    atteindre un public plus large grâce à notre plateforme. Nous sommes
                    convaincus que les startups sont le moteur de la croissance économique
                    au Cameroun et nous sommes déterminés à les aider à réussir.
                </Paragraph>
                <Title level={3}>Perspectives et envergure</Title>
                <Paragraph>
                    Chez JabaSpace, nous sommes constamment à la recherche de nouvelles
                    opportunités pour étendre notre portée et notre impact. Nous sommes
                    convaincus que la technologie peut aider à résoudre certains des plus
                    grands défis auxquels fait face le Cameroun, et nous sommes engagés à
                    faire notre part pour soutenir la croissance économique et le
                    développement social dans le pays. Nous envisageons un avenir où la
                    technologie est accessible à tous et où les startups locales peuvent
                    réellement prospérer et réussir.
                </Paragraph>
                <Title level={3}>Etat de l'art du thème au Cameroun</Title>
                <Paragraph>
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
                </Paragraph>
                <Paragraph>
                    Cependant, il existe encore des défis à relever, tels que le manque
                    d'infrastructures technologiques, le manque de financement et de
                    soutien gouvernemental, ainsi que le manque de compétences techniques
                    chez certains entrepreneurs. JabaSpace est déterminé à contribuer à la
                    création d'un écosystème technologique florissant au Cameroun en
                    fournissant des solutions innovantes et en soutenant les startups
                    locales.
                </Paragraph>
                <Title level={4}>Contactez-nous</Title>
                <Paragraph>
                    Si vous avez des questions sur JabaSpace ou sur MICMARKET, veuillez
                    nous contacter à l'adresse <Text strong><a href="mailto:jabaspace@gmail.com">jabaspace@gmail.com</a></Text>.
                </Paragraph>
            </div>
        </>
    );
};

export default About;
