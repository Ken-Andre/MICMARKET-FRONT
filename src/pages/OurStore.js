import React, { useState, useEffect } from "react";
import axios from "axios";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import Slider from "@mui/material/Slider";
import FilterProduct from "../components/FilterProduct";
import ListStartup from "../components/ListStartup";
import SearchBar from "../components/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const OurStore = () => {
  const [grid, setGrid] = useState(2);
  const [startups, setStartups] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const fetchStartups = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/startups${query ? `?${query}` : ''}`
        );
        setStartups(response.data);
        setSearchResults(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des startups:', error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStartups();
  }, [query]);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <>
      <Meta title={"Browse Startup"} />

      <div
        className="store-wrapper home-wrapper-2"
        style={{ backgroundColor: "antiquewhite" }}
      >
        <div className="container-xxl">
          <div className="row">
            {/* Filter Section */}
            <div
              className={`col-3 d-${
                isFilterOpen ? "block" : "none"
              } d-md-block filter-section position-sticky`}
            >
              {/* Contenu de la section de tri (S'affiche a gauche avec son toggle sur les mini ecrans et dans le cas contraire l'affiche de telle sorte qu'en scrollant a partir de son niveau initiale il scrolle aussi sans qu'on le constate*/}
              <FilterProduct
                setQuery={setQuery}
                className="position-relative"
                style={{ zIndex: 3 }}
              />
            </div>

            {/* Sort & Search Section doivent  etre centre quand c'est sur un mini ecran et augmenter sa taille au max par rapport a son parent div */}
            <div className="col-9 flex-column align-items-center">
              {/* Bouton de bascule(toggle de Filer Section style bootstrap 5.3||5.2) pour lespetits écrans affiche la filter section a gauche comme un offcanvas */}
              <button
                class="btn btn-outline-primary  d-md-none position-fixed  start-0 rounded-box-white"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"
                style={{ zIndex: 3 }}
                //onClick={toggleFilter}
              >
                {/* <button
                className="btn bg-secondary filter-toggle d-md-none position-fixed  start-0 rounded-box-white"
                style={{ zIndex: 3 }}
                onClick={toggleFilter}
              > */}
                <FontAwesomeIcon icon={faAngleRight} />
              </button>
              {/* Le offcanva */}
              <div
                class="offcanvas offcanvas-start"
                data-bs-scroll="true"
                tabindex="-1"
                id="offcanvasWithBothOptions"
                aria-labelledby="offcanvasWithBothOptionsLabel"
              >
                <div class="offcanvas-header">
                  <h5
                    class="offcanvas-title"
                    id="offcanvasWithBothOptionsLabel"
                  >
                    Backdrop with scrolling
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="offcanvas-body">
                  <p>
                    Try scrolling the rest of the page to see this option in
                    action.
                  </p>
                  <FilterProduct
                    setQuery={setQuery}

                  />
                </div>
              </div>
              {/* Section de tri pour les grands écrans */}
              <div className="filter-sort-grid mb-4 d-md-flex flex-md-row justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 block" style={{ width: "100px" }}>
                    Sort By:
                  </p>
                  <select name="" className="form-control form-select" id="">
                    <option name="title-ascending">Alphabetic, A-Z</option>
                    <option name="price-ascending">Price, low to high</option>
                    <option name="price-descending">Price, high to low</option>
                    <option name="created-ascending">Newest</option>
                    <option name="created-descending">Oldest</option>
                  </select>
                </div>
                {/* The SearchBar */}
                <div className="d-flex align-items-center gap-10 justify-content-center">
                  <SearchBar
                    posts={startups}
                    setSearchResults={setSearchResults}
                    size="sm"
                    placeholder="Search a specific Startup ..."
                  />
                </div>
                <div className="d-flex align-items-center gap-10 justify-content-end">
                  {isLoading && <p className="mb-0">Loading...</p>}
                  {error && <p className="text-danger mb-0">Error: {error}</p>}
                  {!isLoading && !error && searchResults && Array.isArray(searchResults) && (
                    <p className="totalproducts mb-0">
                      {searchResults.length} Startups
                    </p>
                  )}
                </div>
              </div>
              {/* Liste de tous les produits */}
              <div className={isFilterOpen ? "filter-open" : "w-100"}>
                <ListStartup searchResults={searchResults} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
