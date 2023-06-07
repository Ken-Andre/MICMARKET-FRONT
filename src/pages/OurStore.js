import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import Slider from '@mui/material/Slider';


const OurStore = () => {
    const [grid, setGrid] = useState(2);
    const [minPrice, setMinPrice] = useState(10);
    const [maxPrice, setMaxPrice] = useState(1000000);

    const [games, setGames] = useState([]);
    const [filteredGames, setFilteredGames] = useState([]);
    const [priceRange, setPriceRange] = useState([]);

    useEffect(() => {
        // Fetch the games data from the API
        axios.get(`https://rawg.io/api/games?key=${process.env.REACT_APP_RAWG}`)
        .then(response => {
            setGames(response.data);
            setFilteredGames(games.filter((game) => {
                const price = game.price || 0;
                return price >= priceRange[0] && price <= priceRange[1];
            }));
        });

        // .catch(error => {
        //     console.error(error);
        // });
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
            <Meta title={'Browse Startup'} />
            {/* <BreadCrumb title="Our Store" /> */}
            <div className='store-wrapper home-wrapper-2' style={{ backgroundColor: "antiquewhite" }}>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            {/* The top filter */}
                            {/* <div className='filter-card mb-3'>
                                <h3 className='filter-title'>
                                    Shop By Categories
                                </h3>
                                <div>
                                    <ul className='ps-0'>

                                    </ul>
                                </div>
                            </div> */}
                            {/* Filter by */}
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>Filter By</h3>
                                <div>
                                    <h5 className="sub-title">Categories</h5>
                                    <div>
                                        <div className='form-check'>
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value="1"
                                                id="FinTech"
                                            />

                                            <label className='form-check-label' htmlFor=''>
                                                FinTech
                                            </label>
                                        </div>
                                        <div className='form-check'>
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value="2"
                                                id=""
                                            />
                                            <label className='form-check-label' htmlFor=''>
                                                LegalTech
                                            </label>
                                        </div>
                                        <div className='form-check'>
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value="3"
                                                id=""
                                            />
                                            <label className='form-check-label' htmlFor=''>
                                                CleanTech
                                            </label>
                                        </div>
                                        <div className='form-check'>
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value="4"
                                                id=""
                                            />
                                            <label className='form-check-label' htmlFor=''>
                                                GreenTech
                                            </label>
                                        </div>
                                        <div className='form-check'>
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value="5"
                                                id=""
                                            />
                                            <label className='form-check-label' htmlFor=''>
                                                BioTech
                                            </label>
                                        </div>
                                        {/*5+ 01- Aliments,boisson & tabac */}
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value="6"
                                                id=""
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
                                                value="7"
                                                id=""
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
                                                value="8"
                                                id=""
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
                                                value="9"
                                                id=""
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
                                                value="10"
                                                id=""
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
                                                value="11"
                                                id=""
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
                                                value="12"
                                                id=""
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
                                                value="13"
                                                id=""
                                            />
                                            <label className="form-check-label" htmlFor="">
                                                Out of Stock(0)
                                            </label>
                                        </div>
                                        {/*09- Construction & fabrication  */}
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value="14"
                                                id=""
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
                                                value="15"
                                                id=""
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
                                                value="16"
                                                id=""
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
                                                value="17"
                                                id=""
                                            />
                                            <label className="form-check-label" htmlFor="">
                                                Sport
                                            </label>
                                        </div>
                                    </div>
                                    <h5 className="sub-title">Price of an Action </h5>
                                    <div className="d-flex align-items-center gap-10">
                                        {/* <div className="form-floating">
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="floatingInput"
                                                placeholder="From"
                                            />
                                            <label htmlFor="floatingInput">From</label>
                                        </div>
                                        <div className="form-floating">
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="floatingInput1"
                                                placeholder="To"
                                            />
                                            <label htmlFor="floatingInput1">To</label>
                                        </div> */}
                                        <Slider
                                            value={[minPrice, maxPrice]}
                                            onChange={(event, newValue) => {
                                                if (Array.isArray(newValue)) {
                                                    setMinPrice(newValue[0]);
                                                    setMaxPrice(newValue[1]);
                                                }
                                            }}
                                            min={10}
                                            max={1000000}
                                            valueLabelDisplay="auto"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='col-9'>
                            <div className='filter-sort-grid mb-4'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='d-flex align-items-center gap-10'>
                                        <p className='mb-0 block' style={{ width: "100px" }}>Sort By:</p>
                                        <select name='' className='form-control form-select' id=''>
                                            <option value="title-ascending">
                                                Alphabetic, A-Z
                                            </option>
                                            <option value="price-ascending">
                                                Price, low to high
                                            </option>
                                            <option value="price-descending">
                                                Price, high to low
                                            </option>
                                            <option value="created-ascending">
                                                Newest
                                            </option>
                                            <option value="created-descending">
                                                Oldest
                                            </option>
                                        </select>
                                    </div>
                                    <div className='d-flex align-items-center gap-10'>
                                        <p className='totalproducts mb-0'>{games.length} Startups</p>
                                        <div className='d-flex gap-10 align-items-center grid'>
                                            <img
                                                onClick={() => {
                                                    setGrid(8);
                                                }}
                                                src='images/gr2.svg'
                                                className='d-block img-fluid'
                                                alt='grid' />
                                            {/* <img
                                                onClick={() => {
                                                    setGrid(4);
                                                }}
                                                src='images/gr3.svg'
                                                className='d-block img-fluid'
                                                alt='grid' /> */}
                                            <img
                                                onClick={() => {
                                                    setGrid(1);
                                                }}
                                                src='images/gr.svg'
                                                className='d-block img-fluid'
                                                alt='grid' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='product-list pb-5'>
                                {/* LISTE PRODUITS DIV */}
                                {/* {filteredProducts.map((product) => ( */}
                                <ProductCard games={filteredGames}  grid={grid} />
                                {/* ))} */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurStore;
