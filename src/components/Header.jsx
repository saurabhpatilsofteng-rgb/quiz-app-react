import React from "react";
import SearchBar from "./SearchBar";

const Header = ({
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div className="header">
      <h1>React Learning Platform</h1>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </div>
  );
};

export default Header;