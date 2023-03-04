import React, { useEffect, useState } from "react";
import { API_KEY } from "../constants";
import GifsCard from "./GifsCard";

const SearchGifs = ({ searchterm }) => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  /**
   * The fetchGifs function is an async function that takes a search term as an argument. It sets the
   * loading state to true, the error state to false, and then tries to fetch the data from the API. If
   * it succeeds, it sets the gifs state to the data from the API, and if it fails, it sets the error
   * state to true. Finally, it sets the loading state to false.
   * @param searchTerm - The search term that you want to use to search for gifs.
   */
  const fetchGifs = async (searchTerm) => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchterm}&limit=50&offset=0&rating=g&lang=en`
      );
      const data = await response.json();
      setGifs(data.data);
      console.log(data.data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  /* A hook that is called after every change in the search term. It is calling the fetchgifs function whenerver the searchterm changes */
  useEffect(() => {
    fetchGifs(searchterm);
  }, [searchterm]);

  /**
   * If the selected page is between 1 and the total number of pages, and the selected page is not the
   * current page, then set the current page to the selected page.
   * @param selectedPage - The page number that the user has selected.
   */
  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= gifs.length / 10 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  if (loading)
    return (
      // displaying a spinner while the gifs are loading
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
            {/* rendering the gifs */}
            {gifs.slice(page * 10 - 10, page * 10).map((gif) => {
              return (
                <div className="col-sm-6 col-md-4">
                  {/* the particular mapped component is passed to the gifscard component to paint the gif on the screen */}
                  <GifsCard gif={gif} />
                </div>
              );
            })}
          </div>
        </div>

        {/* rendering the pagination buttons */}
        {gifs.length > 0 && (
          <div className="pagination">
            <span
              onClick={() => selectPageHandler(page - 1)}
              className={page > 1 ? "" : "pagination__disable"}
            >
              ◀
            </span>

            {[...Array(gifs.length / 10)].map((_, i) => {
              return (
                <span
                  key={i}
                  className={page === i + 1 ? "pagination__selected" : ""}
                  onClick={() => selectPageHandler(i + 1)}
                >
                  {i + 1}
                </span>
              );
            })}

            <span
              onClick={() => selectPageHandler(page + 1)}
              className={page < gifs.length / 10 ? "" : "pagination__disable"}
            >
              ▶
            </span>
          </div>
        )}
      </>
    );
  }
};

export default SearchGifs;
