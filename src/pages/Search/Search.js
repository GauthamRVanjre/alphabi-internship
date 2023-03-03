import React from "react";
import SearchGifs from "../../components/SearchGifs";
import "./Search.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <>
      <section className="search-component">
        <div className="search-input-container">
          <label className="search-input-field-container">
            <input
              onChange={handleSearchTermChange}
              type="text"
              placeholder="Articles names or keywords"
            />
          </label>
          <button className="btn btn-dark">Search</button>
        </div>

        <SearchGifs searchterm={searchTerm} />
      </section>
    </>
  );
};

export default Search;
