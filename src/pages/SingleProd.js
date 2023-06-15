import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";

const SingleProd = () => {
  const [comments, setComments] = useState([]);
  const [startup, setStartup] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      try {
        const res = await fetch(
          `https://rawg.io/api/games?key=${process.env.REACT_APP_RAWG}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch resources");
        }
        const data = await res.json();
        console.log(data);
        setComments(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    getComments();
  }, []);
  useEffect(() => {
    const getStartup = async () => {
      try {
        const res = await fetch(
          `https://rawg.io/api/games?key=${process.env.REACT_APP_RAWG}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch resources");
        }
        const data = await res.json();
        console.log(data);
        setStartup(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    getStartup();
  }, []);
  return (
    <>
      <div className="single-product">
        <div className="container-lg">
          <div class="top-header rounded-box-white mb-3 top-gap-md py-4">
            <div class="d-flex justify-content-between w-100">
              <div class="product-info-left">
                <img
                  class="fl-places-logo"
                  alt="image"
                  src="../images/hotel_logo-1.jpg"
                />
                <div class="product-info-text">
                  <h3>Acehouse Design</h3>
                  <span class="location">
                    <i class="" aria-hidden="true"></i>121 King Street,
                    Melbourne Victoria 3000, Australia
                  </span>
                </div>
              </div>
              <div class="product-info-right">
                <div class="ratings d-flex justify-content-between">
                  <div class="react-components-stars d-flex  align-items-center">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <span class="average-rate">4.2</span>
                  </div>
                  <div class="d-flex flex-column align-items-center justify-content-center">
                    <button class="btn btn-primary-pink btn-sm" onClick="">
                      Acheter des actions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-lg">
            {/* 2 colonnes reviews */}
            <div className="row">
              {/* Section Pour les com */}
              <div className="col-md-6">
                <div class="first-div rounde-box-white p-3">
                  <h4>Tous les commentaires</h4>
                  <ul className="list-unstyled">
                    {comments.map((comment) => (
                      <li className="my-3">
                        <div className="d-flex align-items-center">
                          <div className="me-3">
                            <ReactStars
                              count={5}
                              size={24}
                              value={comment.rating}
                              edit={false}
                              activeColor="#ffd700"
                            />
                          </div>
                          <div>
                            <h6>{comment.name}</h6>
                            <p>
                              {comment.comment
                                ? `${comment.comment}`
                                : "I love this factory, will be lorem ipsum bla bla bla rosa rosae rosambr/&gt;I love this factory, will be lorem ipsum bla bla bla rosa rosae rosam"}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="second-div rounded-box-white p-3">
                  <h3 className="h4 justify-content-center">
                    Ajouter votre Avis
                  </h3>
                  <form>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control rounded-10"
                        id="userEmail"
                        placeholder="Email"
                        maxLength="50"
                        required
                      />
                      <label htmlFor="userEmail">Email</label>
                    </div>

                    <div className="form-floating mb-3">
                      <div className="d-flex align-items-center">
                        <ReactStars
                          count={5}
                          size={24}
                          value={0}
                          activeColor="#ffd700"
                          onChange={(newRating) => console.log(newRating)}
                        />
                        <span className="mx-3">0</span>
                      </div>
                      <div className="mb-3">
                        <div className="d-flex align-items-center">
                          <label htmlFor="rating">Note /5:</label>
                          <input
                            type="range"
                            className="form-range  d-none"
                            min="0"
                            max="5"
                            step="0.5"
                            onChange={(event) =>
                              (document.querySelector(
                                ".form-floating span"
                              ).innerText = event.target.value)
                            }
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-floating mb-3">
                      <textarea
                        className="form-control rounded-10"
                        placeholder="Commentaire (max 200 caractères)"
                        maxLength="200"
                        required
                      ></textarea>
                      <label htmlFor="comment">Commentaire</label>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary-pink rounded-pill"
                    >
                      Soumettre
                    </button>
                  </form>
                </div>
              </div>
              {/* Section pour les caracteristiques de la startup */}
              <div className="col-md-4">
                <div className="second-div rounded-box-white">
                  <h3>Caractéristiques de l'entreprise</h3>
                  <p>
                    <strong>URL :</strong> {startup.url}
                  </p>
                  <p>
                    <strong>Email :</strong> {startup.email}
                  </p>
                  <p>
                    <strong>Téléphone :</strong> {startup.mobile}
                  </p>
                  <p>
                    <strong>Description :</strong> {startup.description}
                  </p>
                  <p>
                    <strong>Catégorie :</strong> {startup.category}
                  </p>
                  <p>
                    <strong>Sous-catégorie :</strong> {startup.subcategory}
                  </p>
                  <p>
                    <strong>Date de création :</strong> {startup.creation_date}
                  </p>
                  <p>
                    <strong>Quantité d'actions vendables :</strong>{" "}
                    {startup.quantity}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProd;
