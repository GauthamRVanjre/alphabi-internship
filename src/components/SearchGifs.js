import React, { useEffect, useState } from "react";
import { API_KEY } from "../constants";

const SearchGifs = ({ searchterm }) => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [gifsPerPage] = useState(10);

  const fetchGifs = async (searchTerm) => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchterm}&limit=15&offset=0&rating=g&lang=en`
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

  if (loading)
    return (
      <div class="spinner-border App-header" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  if (error) return <p>Something went wrong!</p>;
  else {
    return (
      <>
        <div className="search-results container">
          <div className="row">
            {gifs.map((gif) => {
              return (
                <div className="col-sm-6 col-md-4">
                  <div key={gif.id} className="card">
                    <img
                      className="gif-img"
                      key={gif.id}
                      src={gif.images.fixed_height.url}
                      alt={gif.title}
                    />
                    <div style={{ padding: "10px" }}>
                      <div className="card-username-container">
                        <h5 className="card-title">{gif.user?.display_name}</h5>
                        <p> &#11088; </p>
                      </div>
                      <p className="card-text">@{gif.user?.username}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
};

{
  /* <img
  key={gif.id}
  src={gif.images.fixed_height.url}
  alt={gif.title}
/> */
}
export default SearchGifs;
