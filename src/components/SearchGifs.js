import React, { useEffect, useState } from "react";
import { API_KEY } from "../constants";

const SearchGifs = ({ searchterm }) => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchGifs = async (searchTerm) => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchterm}&limit=25&offset=0&rating=g&lang=en`
      );
      const data = await response.json();
      setGifs(data.data);
      console.log(data.data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchGifs(searchterm);
  }, [searchterm]);

  return (
    <>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4"></div>
      </div>
    </>
  );
};

export default SearchGifs;
