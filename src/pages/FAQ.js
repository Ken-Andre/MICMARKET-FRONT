import React from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Typography, Button } from 'antd';

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

const faqs = [
    {
        key: '1',
        header: "Qu'est-ce que le crowdfunding ?",
        body: "Le crowdfunding est une méthode de financement participatif qui permet à un grand nombre de personnes de contribuer financièrement à un projet en échange de contreparties ou de parts."
    },
    {
        key: '2',
        header: "Comment fonctionne le crowdfunding ?",
        body: "Les porteurs de projet mettent en ligne leur projet sur une plateforme de crowdfunding, où les contributeurs peuvent choisir de financer le projet en échange de contreparties ou de parts. Si le projet atteint son objectif de financement, les fonds sont ensuite collectés et transférés au porteur de projet."
    },
    {
        key: '3',
        header: "Quelles sont les contreparties proposées aux contributeurs ?",
        body: "Les contreparties proposées aux contributeurs peuvent varier selon le projet, mais elles peuvent inclure des produits ou des services liés au projet, des mentions ou des remerciements sur le site du projet, ou encore des parts dans l'entreprise."
    },
    {
        key: '4',
        header: "Quels sont les risques pour les contributeurs dans le cadre du crowdfunding ?",
        body: "Les contributeurs prennent un risque financier en finançant un projet de crowdfunding, car il n'y a aucune garantie que le projet aboutira ou que les fonds seront remboursés en cas d'échec du projet. Il est donc important de bien comprendre les risques avant de contribuer à un projet de crowdfunding."
    },
    {
        key: '5',
        header: "Comment choisir un projet de crowdfunding à financer ?",
        body: "Il est important de bien comprendre le projet, le porteur de projet, et les risques avant de contribuer à un projet de crowdfunding. Il peut être utile de lire attentivement la description du projet et les commentaires des autres contributeurs, ainsi que de faire des recherches supplémentaires sur le porteur de projet et son expérience. Il est également important de vérifier que la plateforme de crowdfunding est fiable et sécurisée."
    }
];

const FAQ = () => {
    return (
        <div style={{ padding: '50px' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: '50px' }}>Questions Fréquentes</Title>
            <Collapse accordion>
                {faqs.map(faq => (
                    <Panel header={faq.header} key={faq.key}>
                        <Paragraph>{faq.body}</Paragraph>
                    </Panel>
                ))}
            </Collapse>
            <Paragraph style={{ marginTop: '30px', textAlign: 'center' }}>
                Si vous avez d'autres questions ou des incompréhensions, n'hésitez pas à nous contacter via notre page de <Link to="/contact">contact</Link>.
            </Paragraph>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <Link to="/contact">
                    <Button type="primary">Contact</Button>
                </Link>
            </div>
        </div>
    );
};

export default FAQ;
