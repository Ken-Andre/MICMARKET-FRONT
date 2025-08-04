import React from 'react';
import { Typography } from 'antd';
import Meta from '../components/Meta';

const { Title, Paragraph, Text } = Typography;

const TermsAndConditions = () => {
    return (
        <>
            <Meta title={"Term And Conditions"} />
            <div style={{ padding: '50px' }}>
                <Title level={2} style={{ textAlign: 'center', marginBottom: '50px' }}>Termes et conditions</Title>
                <Paragraph>
                    Bienvenue sur MICMARKET, un produit de Jabaspace. Ces termes et
                    conditions définissent les règles et réglementations d'utilisation du
                    site web et des produits de Jabaspace.
                </Paragraph>

                <Title level={3}>En accédant à notre site web et en utilisant nos produits, vous acceptez les termes et conditions suivants :</Title>

                <Title level={4}>Licence d'utilisation</Title>
                <Paragraph>
                    Sauf indication contraire, Jabaspace et/ou ses concédants détiennent
                    les droits de propriété intellectuelle sur le site web et les
                    produits. Vous pouvez afficher, télécharger pour mise en cache
                    uniquement et imprimer des pages du site web pour votre usage
                    personnel, sous réserve des restrictions énoncées ci-dessous et
                    ailleurs dans ces termes et conditions.
                </Paragraph>
                <Paragraph>Vous ne devez pas :</Paragraph>
                <ul>
                    <li>republier du matériel provenant de ce site web ou de nos produits (y compris une republication sur un autre site web);</li>
                    <li>vendre, louer ou sous-licencier du matériel provenant du site web ou de nos produits ;</li>
                    <li>montrer tout matériel du site web ou de nos produits en public ;</li>
                    <li>reproduire, dupliquer, copier ou exploiter de quelque manière que ce soit du matériel provenant de notre site web ou de nos produits à des fins commerciales ;</li>
                    <li>modifier ou autrement utiliser du matériel du site web ou de nos produits ; ou</li>
                    <li>redistribuer du matériel provenant de ce site web ou de nos produits sauf contenu spécifiquement et expressément mis à disposition pour redistribution.</li>
                </ul>

                <Title level={4}>Utilisation acceptable</Title>
                <Paragraph>
                    Vous ne devez pas utiliser notre site web ou nos produits de manière à
                    causer, ou susceptible de causer, des dommages au site web ou aux
                    produits, ou une altération de l'accessibilité ou de la disponibilité
                    du site web ou des produits, ou d'une manière illégale, frauduleuse ou
                    nuisible, ou en relation avec toute activité ou finalité illégale,
                    frauduleuse ou nuisible.
                </Paragraph>
                <Paragraph>
                    Vous ne devez pas utiliser notre site web ou nos produits pour copier,
                    stocker, héberger, transmettre, envoyer, utiliser, publier ou
                    distribuer tout matériel qui consiste en (ou est lié à) un logiciel
                    espion, un virus informatique, un cheval de Troie, un ver, un
                    enregistreur de frappe, un rootkit ou tout autre logiciel malveillant.
                </Paragraph>

                <Title level={4}>Limitations de responsabilité</Title>
                <Paragraph>
                    Jabaspace ne sera pas responsable envers vous (que ce soit en vertu du
                    droit des contrats, du droit de la responsabilité civile ou autrement)
                    en relation avec le contenu, l'utilisation ou autrement en relation
                    avec ce site web ou nos produits de toute perte indirecte, spéciale ou
                    consécutive ; ou pour toute perte d'activité, de revenus, de profits
                    ou d'économies anticipées, de contrats ou de relations d'affaires, de
                    réputation ou de bonne volonté, ou de perte ou de corruption
                    d'informations ou de données.
                </Paragraph>
                <Paragraph>
                    Ces limitations de responsabilité s'appliquent même si Jabaspace a été
                    expressément avisé de la perte potentielle.
                </Paragraph>

                <Title level={4}>Indemnisation</Title>
                <Paragraph>
                    Vous acceptez d'indemniser Jabaspace et ses employés, agents et
                    directeurs, contre toute demande, action, poursuite, ainsi que toutes
                    les pertes, responsabilités, dommages, coûts et dépenses (y compris
                    les honoraires d'avocat raisonnables) découlant de ou en relation avec
                    votre utilisation du site web ou de nos produits.
                </Paragraph>

                <Title level={4}>Droit applicable et juridiction</Title>
                <Paragraph>
                    Ces termes et conditions seront régis et interprétés conformément aux
                    lois du Cameroun, et tout litige relatif à ces termes et conditions
                    sera soumis à la compétence exclusive des tribunaux du Cameroun.
                </Paragraph>

                <Title level={4}>Modifications des termes et conditions</Title>
                <Paragraph>
                    Jabaspace se réserve le droit de modifier ces termes et conditions à
                    tout moment. Votre utilisation continue du site web et de nos produits
                    après de tels changements constitue votre acceptation des nouveaux
                    termes et conditions. Nous vous encourageons à consulter régulièrement
                    cette page pour toute mise à jour ou changement.
                </Paragraph>

                <Title level={4}>Contactez-nous</Title>
                <Paragraph>
                    Si vous avez des questions sur ces termes et conditions, veuillez nous
                    contacter à l'adresse <Text strong><a href="mailto:jabaspace@gmail.com">jabaspace@gmail.com</a></Text>.
                </Paragraph>
            </div>
        </>
    );
};

export default TermsAndConditions;
