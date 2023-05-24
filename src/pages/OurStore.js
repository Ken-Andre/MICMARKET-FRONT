import React, { useState } from 'react';
//import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';

const OurStore = () => {
    const [grid, setGrid] = useState(2);
    // alert(grid);
    return (
        <>
            <Meta title={''} />
            {/* <BreadCrumb title="Our Store" /> */}
            <div className='store-wrapper home-wrapper-2' style={{ backgroundColor: "antiquewhite" }}>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>
                                    Shop By Categories
                                </h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li>FinTech</li>
                                        <li>LegalTech</li>
                                        <li>CleanTech</li>
                                        <li>GreenTech</li>
                                        <li>BioTech</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Filter by */}
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>Filter By</h3>
                                <div>
                                    <h5 className="sub-title">Type</h5>
                                    <div>
                                        {/* 01- Aliments,boisson & tabac */}
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id=""
                                            />
                                            <label className="form-check-label" htmlFor="">
                                                Aliments,boisson & tabac
                                            </label>
                                        </div>
                                        {/*02- Loisirs & artisanat */}
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
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
                                                value=""
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
                                                value=""
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
                                                value=""
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
                                                value=""
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
                                                value=""
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
                                                value=""
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
                                                value=""
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
                                                value=""
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
                                                value=""
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
                                                value=""
                                                id=""
                                            />
                                            <label className="form-check-label" htmlFor="">
                                                Sport
                                            </label>
                                        </div>
                                    </div>
                                    <h5 className="sub-title">Price of an Action </h5>
                                    <div className="d-flex align-items-center gap-10">
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="floatingInput"
                                                placeholder="From"
                                            />
                                            <label htmlFor="floatingInput">From</label>
                                        </div>
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="floatingInput1"
                                                placeholder="To"
                                            />
                                            <label htmlFor="floatingInput1">To</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className='filter-card mb-3'>
                                <h3 className='filter-title'>
                                    Product Tag
                                </h3>
                            </div> */}
                            {/* <div className='filter-card mb-3'>
                                <h3 className='filter-title'>
                                    Random Startup
                                </h3>
                            </div> */}
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
                                        <p className='totalproducts mb-0'>{/*Nombre pdt*/} 21 Startups </p>
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
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurStore;
