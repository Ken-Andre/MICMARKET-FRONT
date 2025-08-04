import React from "react";
import { NavLink } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { Carousel, Row, Col, Card, Button, Typography } from "antd";

const { Title, Paragraph, Text } = Typography;

const contentStyle = {
  height: '500px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Home = () => {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <div style={{...contentStyle, background: `url(/images/ani-kolleshi-medical.jpg) center/cover no-repeat`}}>
            <Title style={{ color: 'white', paddingTop: '150px' }}>Participez à la croissance des startups locaux et internationaux !</Title>
          </div>
        </div>
        <div>
          <div style={{...contentStyle, background: `url(/images/nathan-dumlao-fintech.jpg) center/cover no-repeat`}}>
            <Title style={{ color: 'white', paddingTop: '150px' }}>Participez à la croissance des startups locaux et internationaux !</Title>
          </div>
        </div>
        <div>
          <div style={{...contentStyle, background: `url(/images/jessica-felicio-cosmetics.jpg) center/cover no-repeat`}}>
            <Title style={{ color: 'white', paddingTop: '150px' }}>Participez à la croissance des startups locaux et internationaux !</Title>
          </div>
        </div>
        <div>
          <div style={{...contentStyle, background: `url(/images/possessed-photography-robotics.jpg) center/cover no-repeat`}}>
            <Title style={{ color: 'white', paddingTop: '150px' }}>Participez à la croissance des startups locaux et internationaux !</Title>
          </div>
        </div>
      </Carousel>

      <div style={{ padding: '50px' }}>
        <Row gutter={[32, 32]} align="middle">
          <Col md={12}>
            <Title level={2}>Generez des revenus et impressionez votre entourage de votre patriotisme</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
              Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
            </Paragraph>
          </Col>
          <Col md={12}>
            <img
              src="images/clipart1.svg"
              alt="img-1"
              className="w-100"
            />
          </Col>
        </Row>
        <Row gutter={[32, 32]} align="middle" style={{ marginTop: '50px' }}>
          <Col md={12}>
            <img
              src="images/clipart2.svg"
              alt="img-2"
              className="w-100"
            />
          </Col>
          <Col md={12}>
            <Title level={2}>Investissement meme a faible budget mais la qualite reste la meme</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
              Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
            </Paragraph>
          </Col>
        </Row>
      </div>

      <div style={{ padding: '50px', background: '#f0f2f5' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '50px' }}>Projets de l'année | Top 3 projets</Title>
        <Row gutter={[32, 32]}>
          <Col md={8}>
            <Card
              hoverable
              cover={<img alt="Ejara Brand" src="images/ejara.png" style={{ objectFit: 'contain', height: '150px', padding: '20px' }} />}
            >
              <Card.Meta title="Ejara" description="Ejara est une entreprise dans la cryptomonnaie proposant des services d'epargne pour foyers." />
              <Button type="primary" style={{ marginTop: '20px' }}>En Savoir Plus</Button>
            </Card>
          </Col>
          <Col md={8}>
             <Card
              hoverable
              cover={<img alt="Maviance Brand" src="images/maviance.jpeg" style={{ objectFit: 'contain', height: '150px', padding: '20px' }} />}
            >
              <Card.Meta title="Maviance" description="Description 3-4 lignes de Maviance" />
              <Button type="primary" style={{ marginTop: '20px' }}>En Savoir Plus</Button>
            </Card>
          </Col>
          <Col md={8}>
             <Card
              hoverable
              cover={<img alt="Google Brand" src="images/image_google.png" style={{ objectFit: 'contain', height: '150px', padding: '20px' }} />}
            >
              <Card.Meta title="Google" description="Description 3-4 lignes de Google" />
              <Button type="primary" style={{ marginTop: '20px' }}>En Savoir Plus</Button>
            </Card>
          </Col>
        </Row>
      </div>
      
      <div style={{ padding: '50px' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '50px' }}>Ils nous font Confiance</Title>
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

      <div style={{ padding: '50px', background: '#f0f2f5', textAlign: 'center' }}>
        <Row gutter={[32, 32]}>
          <Col md={8}>
            <img src="images/icons-1.svg" alt="Description de l'image" />
            <Title level={3}>Projet/Startup</Title>
            <Paragraph>Créer un compte pour startup</Paragraph>
            <NavLink to="/auth/startup">
              <Button type="primary">S'inscrire</Button>
            </NavLink>
          </Col>
          <Col md={8}>
            <img src="images/icons-1.svg" alt="Description de l'image" />
            <Title level={3}>Investisseur</Title>
            <Paragraph>Créer un compte</Paragraph>
            <NavLink to="/auth/signup">
              <Button type="primary">S'inscrire</Button>
            </NavLink>
          </Col>
          <Col md={8}>
            <img src="images/icons-1.svg" alt="Description de l'image" />
            <Title level={3}>Banque</Title>
            <Paragraph>Etablir un partenariat</Paragraph>
            <NavLink to="/contact">
              <Button type="primary">Cliquez ici</Button>
            </NavLink>
          </Col>
        </Row>
      </div>
      
      <div style={{ padding: '50px', background: '#1f1f1f', color: 'white', textAlign: 'center' }}>
          <Title level={3} style={{ color: 'white' }}>Rejoignez les meilleurs investisseurs et soutenez des projets originaux avec nous.</Title>
          <Paragraph style={{ color: 'white' }}>
            L'investissement participatif présente un risque important de
            perte partielle ou totale du capital ainsi qu'un risque
            d'illiquidité. <br />
            Un crédit vous engage et doit être remboursé. N'empruntez pas
            au-delà de votre capacité de remboursement.
          </Paragraph>
      </div>

    </div>
  );
};

export default Home;
