import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <>
      <section className="search-component">
        <div className="search-input-container">
          <label className="search-input-field-container">
            <input type="text" placeholder="Articles names or keywords" />
          </label>
          <button className="btn btn-dark">Search</button>
        </div>
      </section>
    </>
  );
};

export default Search;
