import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
const SearchBar = ({ posts, setSearchResults }) => {
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(posts);
    console.log(e.target.value, "before research found");
    const resultsArray = posts.filter(
      (post) =>
        post?.name?.includes(e.target.value) ||
        post?.title?.includes(e.target.value) ||
        post?.body?.includes(e.target.value) ||
        posts?.website?.includes(e.target.value) ||
        posts?.description?.includes(e.target.value) ||
        posts?.category?.includes(e.target.value) ||
        posts?.subcategory?.includes(e.target.value)
    );
    //|| post.subcategory.includes(e.target.value)
    setSearchResults(resultsArray);
  };
  useEffect(() => {
    console.log("from searchbar:", posts);
  }, [posts, handleSearchChange]);
  return (
    <div className="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-8">
        <form className="search  card-sm" onSubmit={handleSubmit}>
          <div class="card-body row no-gutters align-items-center">
            <div class="col-auto">
              <i class="fas fa-search h4 text-body"></i>
            </div>
            {/* <!--end of col--> */}
            <div class="col">
              <input
                className="search_input form-control col-form-label-sm"
                type="text"
                placeholder="Search a specific Startup ..."
                id="search"
                onChange={handleSearchChange}
              />
            </div>
            <div class="col-auto">
              <button
                type=" submit"
                className="btn btn-lg btn-success search__button"
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SearchBar;
