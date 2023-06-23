import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const SingleProd = () => {
  const navigate = useNavigate;
  const { id } = useParams();
  console.log("the id:", id);
  const apiUrl = `http://localhost:5000/api/products/${id}`;
  const [comments, setComments] = useState([]);
  const [startup, setStartup] = useState([]);
  const { auth } = useAuth();
  const [showBuyButton, setShowBuyButton] = useState(true);
  const [loading, setLoading] = useState(true);

  const [commentUser, setcommentUser] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [rates, setRates] = useState(0);
  //Etat pour le success d'une action ou l'echec
  const [errState, setErrState] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (auth.token) {
      setShowBuyButton(true);
    } else {
      setShowBuyButton(false);
    }
  }, [auth.token]);

  // Handle Ratings
  const handleRatings = () => {

    this.setState(
      (prevState) => ({
        ...prevState,
        ratings: [
          ...prevState.ratings,
          {
            email: this.state.emailUser,
            rate: this.state.rates,
            comments: this.state.commentUser,
          },
        ],
      }),
      (e) => {
         e.preventDefault();
        // Send data to API after state has been updated
        axios
          .post("http://192.168.2.132:5000/api/user/startup", this.state)
          .then((response) => {
            // handle success
            console.log(response);
            setSuccess(true);
            setTimeout(() => {
              setSuccess(false);
            }, 2500);
          })
          .catch((err) => {
            // handle error
            console.log(err);
            if (!err?.response) {
              console.log("Pushing Failed");
            } else if (err.response?.status === 401) {
              console.log("Unauthorized");
            } else {
              console.log("Something Gone Bad ;(");
            }
            setErrState(true);
            setTimeout(() => {
              setErrState(false);
            }, 2500);

            // errRef.current.focus();
          });
      }
    );
  };

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
      } finally {
        setLoading(false);
      }
    };
    getComments();
  }, []); //ca donnait avec ca commments dans le [] avnt

  useEffect(() => {
    const getStartup = async () => {
      try {
        const res = await fetch(
          `https://rawg.io/api/games/${id}?key=${process.env.REACT_APP_RAWG}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch resources");
        }
        const data = await res.json();
        console.log(data);
        setStartup(data);
      } catch (error) {
        console.error(error);
      }
    };
    getStartup();
  }, [auth.token]);

  const content = loading ? (
    <p>Loading...</p>
  ) : (
    <>
      <div className="single-product">
        <div className="container-lg">
          <div class="top-header rounded-box-white mb-3 top-gap-md py-4">
            <div class="d-flex justify-content-between w-100">
              <div class="product-info-left">
                <img
                  class="fl-places-logo"
                  alt="image"
                  src={
                    startup.background_image
                      ? `${startup.background_image}`
                      : "../images/hotel_logo-1.jpg"
                  }
                />
                <div class="product-info-text">
                  <h3>
                    {startup.name ? `${startup.name}` : "Acehouse Design"}
                  </h3>
                  <span class="location">
                    <i class="" aria-hidden="true"></i>
                    {startup.address
                      ? `${startup.address}`
                      : "121 King Street, Melbourne Victoria 3000, Australia"}
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
                    <span class="average-rate">
                      {startup.rating ? `${startup.rating}` : 4.2}
                    </span>
                  </div>
                  <div class="d-flex flex-column align-items-center justify-content-center">
                    {showBuyButton ? (
                      // <a href="/checkout">
                      <Link
                        className="btn btn-primary-pink btn-sm"
                        to={`/checkout/${id}`}
                      >
                        Acheter des actions
                      </Link>
                    ) : (
                      // </a>
                      <button
                        className="btn btn-primary-pink btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        // onClick={() => {
                        //   // Ouvrir la modal de connexion
                        // }}
                      >
                        Acheter des actions
                      </button>
                    )}
                    {/* <!-- Modal d'invitation à se connecter --> */}
                    <div
                      class="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                              Connectez-vous pour continuer
                            </h1>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body">
                            <p>
                              Pour effectuer cette action , vous devez être
                              connecté à votre compte.
                            </p>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Annuler
                            </button>
                            <Link
                              type="button"
                              class="btn btn-primary"
                              to={"/auth/login"}
                            >
                              Se connecter
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Fin du Modal */}
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
                <div class="first-div rounde-box-white p-2">
                  <h4>Tous les commentaires</h4>
                  <ul className="list-unstyled">
                    {comments.map((comment) => (
                      // <li key={comment.id}>
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
                      // </li>
                    ))}
                  </ul>
                </div>

                <div className="second-div rounded-box-white p-3 mb-3">
                  {success && (
                    <div
                      style={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}className="bg-success"
                    >
                      Votre avis a été ajouté!
                    </div>
                  )}
                  {errState && (
                    <div
                      style={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}className="bg-danger"
                    >
                      Votre avis n'a pas ete enregistre!
                    </div>
                  )}

                  <h3 className="h4 justify-content-center">
                    Ajouter votre Avis
                  </h3>
                  <form>
                    {/* <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control rounded-10"
                        id="userEmail"
                        placeholder="Email"
                        maxLength="50"
                        onChange={(e) => setEmailUser(e.target.value)}
                        required
                      />
                      <label htmlFor="userEmail">Email</label>
                    </div> */}

                    <div className="form-floating mb-3">
                      <div className="d-flex align-items-center">
                        <ReactStars
                          count={5}
                          size={24}
                          value={0}
                          activeColor="#ffd700"
                          half={true}
                          onChange={(newValue) => setRates(newValue)}
                        />
                        <span className="mx-3">{rates}</span>
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
                        onChange={(e) => setcommentUser(e.target.value)}
                        required
                      ></textarea>
                      <label htmlFor="comment">Commentaire</label>
                    </div>
                    {showBuyButton ? (
                      <button
                        type="submit"
                        className="btn btn-primary-pink rounded-pill"
                        onClick={handleRatings}
                      >
                        Soumettre
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="btn btn-primary-pink rounded-pill"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Vous devez etre connecté
                      </button>
                    )}
                  </form>
                </div>
              </div>
              {/* Section pour les caracteristiques de la startup */}
              <div className="col-md-4">
                <div className="second-div rounded-box-white">
                  <h3>Caractéristiques de l'entreprise</h3>
                  <p>
                    <strong>URL :</strong>{" "}
                    {startup.website ? `${startup.website}` : "acedesign.com"}
                  </p>
                  <p>
                    <strong>Email :</strong>{" "}
                    {startup.email ? `${startup.email}` : "acedesign.com"}
                  </p>
                  <p>
                    <strong>Téléphone :</strong>{" "}
                    {startup.mobile ? `${startup.mobile}` : 678495663}
                  </p>
                  <p>
                    <strong>Description :</strong>{" "}
                    {startup.description
                      ? `${startup.description_raw}`
                      : "AceHouse est une entreprise dans l'immobilier ..."}
                  </p>
                  <p>
                    <strong>Catégorie :</strong>{" "}
                    {startup.category ? `${startup.category}` : "Immobilier"}
                  </p>
                  <p>
                    <strong>Sous-catégorie :</strong>{" "}
                    {startup.genre ? `${startup.genre}` : " "}
                  </p>
                  <p>
                    <strong>Date de création :</strong>
                    {startup.released ? `${startup.released}` : "YYYY-MM-DD"}
                  </p>
                  <p>
                    <strong>Quantité d'actions vendables :</strong>{" "}
                    {startup.quantity ? `${startup.quantity}` : 0}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  // );
  return content;
};

export default SingleProd;
