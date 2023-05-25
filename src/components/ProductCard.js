import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
// const prodcompare = "images/prodcompare.svg";
// const wish = "images/wish.svg";
// const wishlist = "images/wishlist.svg";
// const watch = "images/watch.jpg";
// const watch2 = "images/watch-1.avif";
// const addcart = "images/add-cart.svg";
// const view = "images/view.svg";


const ProductCard = () => {
  // const { grid } = props;
  // console.log(grid);
  // let location = useLocation();

  const [tooltipText, setTooltipText] = useState('');

  const handleMouseOver = (event) => {
    setTooltipText(event.target.getAttribute('aria-label'));

  };

  const handleMouseLeave = () => {
    setTooltipText('');
  };

  return (
    <>
      <div >
        {/* <div
          className={` ${location.pathname === "/shop" ? `gr-${grid}` : "col-3"
            } `}
        > */}

        {/* <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div> */}
        {/* <div className="product-image">
            <img src={watch} className="img-fluid" alt="product image" />
            <img src={watch2} className="img-fluid" alt="product image" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt...
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div> */}

        <div class="card product-card">
          <a href="/review/ant-editions.com" class="card-link">
            {/* <div class="badge badge-primary">Le plus pertinent</div> */}
            <div>
              <img src="images/image_google.png" class="img-fluid rounded-circle mr-2" alt="" />
            </div>
            <a>
              <div class="card-body">
                <div class="d-flex align-items-center">

                  <h4 class="card-text font-weight-bold">Google</h4>
                </div>
                <div class="d-flex align-items-center">
                  <div class="star-rating mr-1">
                    <ReactStars
                      count={5}
                      size={24}
                      value={5}
                      edit={false}
                      color1={"#999999"}
                      color2={"#ffd700"}
                    />
                  </div>
                  <p class="card-text small text-muted">
                    5,0</p>
                </div>
              </div>
            </a>
          </a>

          <div class="card-footer d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
                <a href='https://www.google.com/' class="btn btn-link " aria-label="Startup Website" title={tooltipText} >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.694 1.537c.217.281.415.592.593.923.321.6.59 1.287.793 2.04h1.983a7.027 7.027 0 0 0-3.37-2.963ZM14.54 5.5h-2.235c.143.789.22 1.63.22 2.5 0 .87-.077 1.711-.22 2.5h2.235c.297-.776.46-1.62.46-2.5 0-.88-.163-1.724-.46-2.5Zm-.476 6H12.08a9.655 9.655 0 0 1-.793 2.04 6.698 6.698 0 0 1-.593.923 7.027 7.027 0 0 0 3.37-2.963Zm-8.758 2.963a6.708 6.708 0 0 1-.593-.923 9.654 9.654 0 0 1-.792-2.04H1.936a7.027 7.027 0 0 0 3.37 2.963ZM1.46 10.5h2.236c-.144-.789-.22-1.63-.22-2.5 0-.87.076-1.711.22-2.5H1.46A6.984 6.984 0 0 0 1 8c0 .88.163 1.724.46 2.5Zm.476-6h1.985c.203-.753.47-1.44.792-2.04.178-.331.376-.642.593-.923A7.027 7.027 0 0 0 1.936 4.5ZM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M5.595 2.933c-.247.46-.461.987-.635 1.567H7.5V1.075c-.677.204-1.35.822-1.905 1.858Zm4.81 0c.247.46.462.987.635 1.567H8.5V1.075c.677.204 1.35.822 1.906 1.858ZM8.5 5.5h2.787c.153.774.238 1.616.238 2.5 0 .884-.085 1.726-.238 2.5H8.5v-5Zm0 6h2.54a8.428 8.428 0 0 1-.634 1.567c-.557 1.036-1.229 1.654-1.906 1.858V11.5Zm-1 0v3.425c-.677-.204-1.35-.822-1.905-1.858A8.426 8.426 0 0 1 4.96 11.5H7.5Zm0-1H4.713A12.91 12.91 0 0 1 4.475 8c0-.884.085-1.726.238-2.5H7.5v5Z">
                    </path>
                  </svg>
                </a>
              </div>


              <div className="position-relative">
                <a
                  href='#top'
                  class="btn btn-link "
                  onMouseOver={handleMouseOver}
                  onMouseLeave={handleMouseLeave}
                  aria-label="Comparer des produits"
                  title={tooltipText}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor"
                      d="M21,5H3C1.9,5,1,5.9,1,7v10c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V7C23,5.9,22.1,5,21,5z M3,17V7h18 l0.01,10H3z" />
                    <path fill="currentColor"
                      d="M7,9h4v2H7V9z M13,13h-4v-2h4V13z" />
                  </svg>
                  {/* Fonction tooltip
                    <div className="position-absolute top-0 start-100 ">
                      {tooltipText && (
                        <div className="bg-dark text-white p-2 rounded">{tooltipText}</div>
                      )}
                      </div> */}
                </a>
              </div>

            </div>

            <div class="d-flex align-items-center">
              <span class="small text-muted mr-2 ">Services Technologiques</span>
              <span className="small text-muted mr-2">·</span>
              <span class="small text-muted">Moteur de recherche</span>
            </div>
            <button class="btn btn-primary btn-sm" aria-expanded="false">
              J'investis
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor">
                <path fill-rule="evenodd" d="m8.003 10.289 5.617-6.557.76.65-6.377 7.444L1.62 4.383l.76-.651 5.623 6.557Z">
                </path>
              </svg>
            </button>
          </div>
        </div>


        {/* </div > */}

      </div >
    </>
  );
};

export default ProductCard;
