import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="search-Box">
      <input
        className="search"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
