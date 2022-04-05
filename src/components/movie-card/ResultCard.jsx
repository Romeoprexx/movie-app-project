import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState"; 
import Button from "../button/Button";



export const ResultCard = ({ movie }) => {
    const {
      addMovieToWatchlist,
      addMovieToWatched,
      watchlist,
      watched,
    } = useContext(GlobalContext);
  
    let storedMovie = watchlist.find((o) => o.id === movie.id);
    let storedMovieWatched = watched.find((o) => o.id === movie.id);
  
    const watchlistDisabled = storedMovie
      ? true
      : storedMovieWatched
      ? true
      : false;
  
    const watchedDisabled = storedMovieWatched ? true : false;
  
    return (
      <div className="result-card">
        <div className="poster-wrapper">
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={`${movie.title} Poster`}
            />
          ) : (
            <div className="filler-poster" />
          )}
        </div>
  
        <div className="info">
          <div className="header">
            <h3 className="title">{movie.title}</h3>
            <h4 className="release-date">
              
            </h4>
          </div>
  
          <div className="controls">
            <button
              className="btn"
              disabled={watchlistDisabled}
              onClick={() => addMovieToWatchlist(movie)}
            >
              Add to Watchlist
            </button>
  
            <Button
              className="btn"
              disabled={watchedDisabled}
              onClick={() => addMovieToWatched(movie)}
            >
              Add to Watched
            </Button>
          </div>
        </div>
      </div>
    );
  };