import React from "react";
import "../style/SearchPage.css";


const SearchPage = ({searchChange}) => {
    return (
      <div>
        <section className="search_box">
        <input
          onChange={searchChange}
          className="search"
          type="text"
          placeholder="Job title"
        />
        </section>
    
        <button className="btn" type="submit">Search</button>
      </div>
    );
  };
  
  export default SearchPage;