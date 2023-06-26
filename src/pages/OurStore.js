import React, { useState, useEffect } from "react";
import { getPosts } from "../utils/axios";
import axios from "axios";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import Slider from "@mui/material/Slider";
import FilterProduct from "../components/FilterProduct";
import ListStartup from "../components/ListStartup";
import SearchBar from "../components/SearchBar";

const OurStore = () => {
  const [grid, setGrid] = useState(2);
  //   const [minPrice, setMinPrice] = useState(10);
  //   const [maxPrice, setMaxPrice] = useState(1000000);

  const [games, setGames] = useState([]);
    const [posts, setPosts] = useState([])
    const [searchResults, setSearchResults] = useState([])
  const [filteredGames, setFilteredGames] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://rawg.io/api/games?key=${process.env.REACT_APP_RAWG}${query}`
      )
      .then((response) => {
        setGames(response.data.results);
        setPosts(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [query]);
    

  useEffect(() => {
    getPosts().then(json => {
      setPosts(json)
      setSearchResults(json)
    })
  }, [])
  //   const [priceRange, setPriceRange] = useState([]);
  //   const [selectedCategories, setSelectedCategories] = useState([]);

  //   function checkboxHandler(e) {
  //     let isSelected = e.target.checked;
  //     let value = e.target.value;
  //     console.log(value);

  //     if (isSelected) {
  //       setSelectedCategories([...selectedCategories, value]);
  //     } else {
  //       setSelectedCategories((prevData) => {
  //         return prevData.filter((id) => {
  //           return id !== value;
  //         });
  //       });
  //     }
  //   }

  //   function checkAllCategoriesHandler()

  useEffect(() => {
    axios
      .get(`https://rawg.io/api/games?key=${process.env.REACT_APP_RAWG}`)
      .then((response) => {
        setGames(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Filter the games based on the price range
  // const filteredGames = games && games.filter((game) => {
  //     const price = game.price || 0;
  //     return price >= priceRange[0] && price <= priceRange[1];
  // });

  // Filter function to filter products based on price
  // const filteredProducts = products.filter((product) => {
  //     return product.price >= minPrice && product.price <= maxPrice;
  // });

  return (
    <>
      <Meta title={"Browse Startup"} />

      <div
        className="store-wrapper home-wrapper-2"
        style={{ backgroundColor: "antiquewhite" }}
      >
        <div className="container-xxl">
          <div className="row">
            <FilterProduct
              setQuery={setQuery}
              //   minPrice={minPrice}
              //   maxPrice={minPrice}
              //   priceRange={minPrice}
              //   selectedCategories={minPrice}
              //   checkboxHandler={checkboxHandler}
              //   setMinPrice={setMinPrice}
              //   setMaxPrice={setMaxPrice}
              //   setPriceRange={setPriceRange}
              //   setSelectedCategories={setSelectedCategories}
            />
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 block" style={{ width: "100px" }}>
                      Sort By:
                    </p>
                    <select name="" className="form-control form-select" id="">
                      <option name="title-ascending">Alphabetic, A-Z</option>
                      <option name="price-ascending">Price, low to high</option>
                      <option name="price-descending">
                        Price, high to low
                      </option>
                      <option name="created-ascending">Newest</option>
                      <option name="created-descending">Oldest</option>
                    </select>
                  </div>
                   <div className="d-flex align-items-center gap-10">
                   	<SearchBar posts={posts} setSearchResults={setSearchResults} />
                   </div>
                  <div className="d-flex align-items-center gap-10">
                    {games && Array.isArray(games) && (
                      <p className="totalproducts mb-0">
                        {games.length} Startups
                      </p>
                    )}
                    {!games && "Loading..."}
                    {games && !Array.isArray(games) && "Invalid data format"}
                    {/* <div className='d-flex gap-10 align-items-center grid'>
                        <img
                        onClick={() => {
                            setGrid(8);
                        }}
                        src='images/gr2.svg'
                        className='d-block img-fluid'
                        alt='grid' />
                        <img
                        onClick={() => {
                            setGrid(1);
                        }}
                        src='images/gr.svg'
                        className='d-block img-fluid'
                        alt='grid' />
                    </div> */}
                  </div>
                </div>
              </div>
              {/*Ici liste all products */}
              <ListStartup searchResults={searchResults} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
