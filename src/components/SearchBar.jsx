import React from "react";

const SearchBar = ({
  searchTerm,
  setSearchTerm,
}) => {

  return (
    <input
      type="text"
      placeholder="Search Topic..."
      value={searchTerm}
      onChange={(e)=>
        setSearchTerm(
          e.target.value
        )
      }
      className="search-input"
    />
  );
};

export default SearchBar;