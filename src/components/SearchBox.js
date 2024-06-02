import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="search-box">
      <input
      aria-label="Search-label"
        className="search"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
