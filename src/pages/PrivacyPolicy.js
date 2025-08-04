import React from 'react';
import { Typography } from 'antd';
import Meta from '../components/Meta';

const { Title, Paragraph, Text } = Typography;

const PrivacyPolicy = () => {
    return (
        <>
            <Meta title={"Politique de confidentialité"} />
            <div style={{ padding: '50px' }}>
                <Title level={2} style={{ textAlign: 'center', marginBottom: '50px' }}>Politique de confidentialité</Title>
                <Paragraph>
                    Chez <Text strong>JabaSpace</Text>, nous prenons la confidentialité de nos clients
                    très au sérieux. Cette politique de confidentialité explique comment
                    nous collectons, utilisons et protégeons les informations que nous
                    recevons de nos clients et des utilisateurs de notre produit
                    MICMARKET.
                </Paragraph>
                <Title level={3}>Collecte d'informations</Title>
                <Paragraph>
                    Nous collectons des informations sur nos clients lorsque vous vous
                    inscrivez pour utiliser notre produit MICMARKET et lorsque vous
                    utilisez notre produit. Les informations que nous collectons peuvent
                    inclure votre nom, votre adresse e-mail, votre adresse postale et vos
                    informations de paiement si vous choisissez d'acheter notre produit.
                </Paragraph>
                <Title level={3}>Utilisation des informations</Title>
                <Paragraph>
                    Nous utilisons les informations que nous collectons pour fournir,
                    maintenir, protéger et améliorer notre produit MICMARKET. Nous pouvons
                    également utiliser ces informations pour vous contacter au sujet de
                    produits ou de services supplémentaires que nous proposons et qui
                    pourraient vous intéresser.
                </Paragraph>
                <Title level={3}>Protection des informations</Title>
                <Paragraph>
                    Nous prenons des mesures de sécurité pour protéger les informations
                    que vous nous fournissez contre tout accès, utilisation ou divulgation
                    non autorisés. Nous limitons l'accès à vos informations aux employés
                    qui ont besoin de connaître ces informations pour fournir ce produit.
                </Paragraph>
                <Title level={3}>Partage d'informations</Title>
                <Paragraph>
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
                </Paragraph>
                <Title level={3}>Modification de la politique de confidentialité</Title>
                <Paragraph>
                    Nous pouvons modifier cette politique de confidentialité de temps à
                    autre. Si nous apportons des modifications importantes à cette
                    politique, nous vous en informerons en affichant un avis sur notre
                    site web ou en vous envoyant un e-mail. Nous vous encourageons à
                    consulter cette page régulièrement pour connaître les dernières
                    informations sur nos pratiques en matière de confidentialité.
                </Paragraph>
                <Title level={4}>Contactez-nous</Title>
                <Paragraph>
                    Si vous avez des questions sur cette politique de confidentialité ou
                    sur les pratiques de JabaSpace en matière de confidentialité, veuillez
                    nous contacter à l'adresse suivante : <Text strong><a href="mailto:jabaspace@gmail.com">jabaspace@gmail.com</a></Text>
                </Paragraph>
            </div>
        </>
    );
};

export default PrivacyPolicy;
