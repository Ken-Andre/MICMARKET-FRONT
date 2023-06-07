import React, { useState, useEffect } from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = ({  priceRange = [], className = '', grid = 1 }) => {
  const [games, setGames] = useState([]);
  const [tooltipText, setTooltipText] = useState('');



  const handleMouseOver = (event) => {
    setTooltipText(event.target.getAttribute('aria-label'));
  };

  const handleMouseLeave = () => {
    setTooltipText('');
  };

  useEffect(() => {
    const getGames = async () => {
      try {
        const res = await fetch(`https://rawg.io/api/games?key=${process.env.REACT_APP_RAWG}`);
        if (!res.ok) {
          throw new Error('Failed to fetch resources');
        }
        const data = await res.json();
        console.log(data);
        setGames(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    getGames();
  }, []);

  // Filter games based on price range
  const filteredGames = games.filter((game) => {
    const price = game.price || 0;
    if (priceRange.length === 0) {
      return true; // Include all games if priceRange is empty
    }
    return price >= priceRange[0] && price <= priceRange[1];
  });

  return (
    <div className={className}>
      {filteredGames.map((game) => (
        <div className="card product-card" key={game.id}>
          <a href="/startup/ant-editions " className="card-link">
            <div>
              <img src={game.background_image} className="img-fluid  mr-2" alt={game.name} />
            </div>
          </a>
          <a>
            <div className="card-body">
              <div className="d-flex align-items-center">
                <h4 className="card-text font-weight-bold">{game.name}</h4>
              </div>
              <div className="d-flex align-items-center">
                <div className="star-rating mr-1">
                  <ReactStars
                    count={5}
                    size={24}
                    value={game.rating}
                    edit={false}
                    color1={"#999999"}
                    color2={"#ffd700"}
                    half={true}
                  />
                </div>
                <p className="card-text small text-muted">
                  {game.rating}</p>
              </div>
            </div>
          </a>

          <div className="card-footer d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <div className="position-relative">
                <a
                  href='#'
                  className="btn btn-link "
                  onMouseOver={handleMouseOver}
                  onMouseLeave={handleMouseLeave}
                  aria-label="Startup Website Link"
                  title={tooltipText}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill='currentcolor'>
                      <path fillRule="evenodd" d="M10.694 1.537c.217.281.415.592.593.923.321.6.59 1.287.793 2.04h1.983a7.027 7.027 0 0 0-3.37-2.963ZM14.54 5.5h-2.235c.143.789.22 1.63.22 2.5 0 .87-.077 1.711-.22 2.5h2.235c.297-.776.46-1.62.46-2.5 0-.88-.163-1.724-.46-2.5Zm-.476 6H12.08a9.655 9.655 0 0 1-.793 2.04 6.698 6.698 0 0 1-.593.923 7.027 7.027 0 0 0 3.37-2.963Zm-8.758 2.963a6.708 6.708 0 0 1-.593-.923 9.654 9.654 0 0 1-.792-2.04H1.936a7.027 7.027 0 0 0 3.37 2.963ZM1.46 10.5h2.236c-.144-.789-.22-1.63-.22-2.5 0-.87.076-1.711.22-2.5H1.46A6.984 6.984 0 0 0 1 8c0 .88.163 1.724.46 2.5Zm.476-6h1.985c.203-.753.47-1.44.792-2.04.178-.331.376-.642.593-.923A7.027 7.027 0 0 0 1.936 4.5ZM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M5.595 2.933c-.247.46-.461.987-.635 1.567H7.5V1.075c-.677.204-1.35.822-1.905 1.858Zm4.81 0c.247.46.462.987.635 1.567H8.5V1.075c.677.204 1.35.822 1.906 1.858ZM8.5 5.5h2.787c.153.774.238 1.616.238 2.5 0 .884-.085 1.726-.238 2.5H8.5v-5Zm0 6h2.54a8.428 8.428 0 0 1-.634 1.567c-.557 1.036-1.229 1.654-1.906 1.858V11.5Zm-1 0v3.425c-.677-.204-1.35-.822-1.905-1.858A8.426 8.426 0 0 1 4.96 11.5H7.5Zm0-1H4.713A12.91 12.91 0 0 1 4.475 8c0-.884.085-1.726.238-2.5H7.5v5Z">
                      </path>
                      {/* <path fill="currentColor"
                      d="M7,9h4v2H7V9z M13,13h-4v-2h4V13z" /> */}
                  </svg>
                </a>
                <span className="small text-muted mr-2 ">{game.price ? `$${game.price}` : 'Free'} </span>
              </div>
              </div>
              <div className="d-flex align-items-center">
                <span className="small text-muted mr-2 ">Services Technologiques</span>
                <span className="small text-muted mr-2">·</span>
                <span className="small text-muted">Moteur de recherche</span>
              </div>

              {/* <div className="text-muted small ml-2">
                {game.price ? `$${game.price}` : 'Free'}
              </div> */}
            {/* </div> */}
            <div>
              <button
                className="btn  btn-primary btn-sm"
                onClick={() => {
                  console.log(`Know more on ${game.name}`);

                }}
              >
                En Savoir Plus
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
