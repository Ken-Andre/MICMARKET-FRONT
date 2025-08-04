import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

const SearchBar = ({ posts, setSearchResults, placeholder }) => {
    const handleSearchChange = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        if (!searchTerm) {
            setSearchResults(posts);
            return;
        }

        const resultsArray = posts.filter(post =>
            Object.values(post).some(value =>
                String(value).toLowerCase().includes(searchTerm)
            )
        );
        setSearchResults(resultsArray);
    };

    return (
        <Search
            placeholder={placeholder || "Search..."}
            onChange={handleSearchChange}
            style={{ width: '100%' }}
            enterButton
        />
    );
};

export default SearchBar;
