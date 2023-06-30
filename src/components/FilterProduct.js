import React, { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";

const FilterProduct = (props) => {
  const {
    // selectedCategories,
    // minPrice,
    // maxPrice,
    // priceRange,
    // checkboxHandler,
    // setSelectedCategories,
    // setMinPrice,
    // setMaxPrice,
    // setPriceRange,
    setQuery,
    zind,
    className,
    style,
  } = props;
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [minPrice, setMinPrice] = useState(10);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [priceRange, setPriceRange] = useState([10, 1000000]);
  //   const [priceRange, setPriceRange] = useState([]);

  function checkboxHandler(e) {
    let isSelected = e.target.checked;
    let value = e.target.value;
    console.log(value);

    if (isSelected) {
      setSelectedCategories([...selectedCategories, value]);
    } else {
      setSelectedCategories((prevData) => {
        return prevData.filter((id) => {
          return id !== value;
        });
      });
    }
  }
  function submitHandler(e) {
    e.preventDefault();
    let query = buildQuery();
    console.log("Here is the build query: ", query);
    setQuery(query);
  }
  function buildQuery() {
    let query = "";

    // Ajouter les paramètres de catégorie, s'il y en a
    if (selectedCategories.length > 0) {
      query += "?";
      query += selectedCategories
        .map((category) => {
          return `category=${encodeURIComponent(category)}`;
        })
        .join("&");
    }

    // Ajouter le paramètre de prix minimum, s'il y a lieu
    if (minPrice !== "") {
      query += query === "" ? "?" : "&";
      query += `price[gte]=${encodeURIComponent(minPrice)}`;
    }

    // Ajouter le paramètre de prix maximum, s'il y a lieu
    if (maxPrice !== "") {
      query += query === "" ? "?" : "&";
      query += `price[lte]=${encodeURIComponent(maxPrice)}`;
    }

    return query;
  }

  const handlePriceRangeChange = (event, newValue) => {
    setPriceRange(newValue);
    setMinPrice(newValue[0]);
    setMaxPrice(newValue[1]);
    console.log("Slide changed: ", minPrice, maxPrice);
  };

  return (
    <>
      {/* col-3  */}
      <div className={className} style={style}>
        {/* Filter by */}
        <div className="filter-card mb-3">
          <h3 className="filter-title">Filter By</h3>

          <h5 className="sub-title">Categories</h5>
          {/* Toutes les categories */}

          <div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={selectedCategories.includes("FinTech")}
                name="1"
                value="FinTech"
                onChange={checkboxHandler}
              />

              <label className="form-check-label" htmlFor="">
                FinTech
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={selectedCategories.includes("LegalTech")}
                name="2"
                value="LegalTech"
                onChange={checkboxHandler}
              />
              <label className="form-check-label" htmlFor="">
                LegalTech
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={selectedCategories.includes("CleanTech")}
                name="3"
                value="CleanTech"
                onChange={checkboxHandler}
              />
              <label className="form-check-label" htmlFor="">
                CleanTech
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={selectedCategories.includes("AgTech")}
                name="4"
                value="AgTech"
                onChange={checkboxHandler}
              />
              <label className="form-check-label" htmlFor="">
                AgTech
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={selectedCategories.includes("BioTech")}
                name="5"
                value="BioTech"
                onChange={checkboxHandler}
              />
              <label className="form-check-label" htmlFor="">
                BioTech
              </label>
            </div>
            {/*5+ 01- Aliments,boisson & tabac */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={selectedCategories.includes("Agroalimentaire")}
                name="6"
                value="Agroalimentaire"
                onChange={checkboxHandler}
              />
              <label className="form-check-label" htmlFor="Agroalimentaire">
                Agroalimentaire
              </label>
            </div>
            {/*02- Loisirs & artisanat */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={selectedCategories.includes("Loisirs & artisanat")}
                name="7"
                value="Loisirs & artisanat"
                onChange={checkboxHandler}
              />
              <label className="form-check-label" htmlFor="">
                Loisirs & artisanat
              </label>
            </div>
            {/*03- Services aux entreprises  */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={selectedCategories.includes(
                  "Services aux entreprises"
                )}
                name="8"
                value="Services aux entreprises"
                onChange={checkboxHandler}
              />
              <label className="form-check-label" htmlFor="">
                Services aux entreprises
              </label>
            </div>
            {/*04- Animaux  */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={selectedCategories.includes("Animaux")}
                name="9"
                value="Animaux"
                onChange={checkboxHandler}
              />
              <label className="form-check-label" htmlFor="">
                Animaux
              </label>
            </div>
            {/*05- Magasin & Jardin  */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={selectedCategories.includes("Magasin & Jardin")}
                name="10"
                value="Magasin & Jardin"
                onChange={checkboxHandler}
              />
              <label className="form-check-label" htmlFor="">
                Magasin & Jardin
              </label>
            </div>
            {/*06- Medias & edition  */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={selectedCategories.includes("Medias & edition")}
                name="11"
                value="Medias & edition"
                onChange={checkboxHandler}
              />
              <label className="form-check-label" htmlFor="">
                Medias & edition
              </label>
            </div>
            {/*07- Beaute & Bien-etre  */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={selectedCategories.includes("Beaute & Bien-etre")}
                name="12"
                value="Beaute & Bien-etre"
                onChange={checkboxHandler}
              />
              <label className="form-check-label" htmlFor="">
                Beaute & Bien-etre
              </label>
            </div>
            {/*08- Restaurants & Bars  */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={selectedCategories.includes("Restaurants & Bars")}
                name="13"
                value="Restaurants & Bars"
                onChange={checkboxHandler}
              />
              <label className="form-check-label" htmlFor="">
                Restaurants & Bars
              </label>
            </div>
            {/*09- Construction & fabrication  */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={selectedCategories.includes(
                  "Construction & fabrication"
                )}
                name="14"
                value="Construction & fabrication"
                onChange={checkboxHandler}
              />
              <label className="form-check-label" htmlFor="">
                Construction & fabrication
              </label>
            </div>
            {/*10- Shopping & mode  */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={selectedCategories.includes("Shopping & mode")}
                name="15"
                value="Shopping & mode"
                onChange={checkboxHandler}
              />
              <label className="form-check-label" htmlFor="">
                Shopping & mode
              </label>
            </div>
            {/*11- Sante et medecine  */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={selectedCategories.includes("Sante et medecine")}
                name="16"
                value="Sante et medecine"
                onChange={checkboxHandler}
              />
              <label className="form-check-label" htmlFor="">
                Sante et medecine
              </label>
            </div>
            {/*12- Sport  */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={selectedCategories.includes("Sport")}
                name="17"
                value="Sport"
                onChange={checkboxHandler}
              />
              <label className="form-check-label" htmlFor="">
                Sport
              </label>
            </div>
          </div>
          {/* Fin toutes les categories */}
          <h4 className="sub-title">Price of an Action </h4>
          <div className="d-flex align-items-center gap-10">
            <Slider
              value={priceRange}
              onChange={handlePriceRangeChange}
              valueLabelDisplay="auto"
              min={10}
              max={1000000}
            />
          </div>
          {/* fin price of an action */}
          <div className="divider m-auto">
            <div>
              <div>
                <button
                  type="button"
                  className="bg-primary btn"
                  onClick={submitHandler}
                >
                  Check All
                </button>
              </div>
              <h5 className="mt-1">
                Your choice print here:{" "}
                <span className="sub-title text-muted">
                  {selectedCategories.toString()}
                </span>{" "}
              </h5>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default FilterProduct;
