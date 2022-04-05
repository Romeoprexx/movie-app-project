import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState';
import MovieCard from '../movie-card/MovieCard';
import './watchlist.scss';

function WatchList(props) {

  const watchlist = useContext(GlobalContext)

  const item = props.item
  

  return (

    <Link to='/watchlist'>
       <div>
        <div className="container">
          {watchlist.length ? (
            <div className="movie-card">
              {watchlist.map((watchlist) => (
                <MovieCard movie={watchlist}  image={watchlist.item.poster_path} name={watchlist.item.name} rating={watchlist.item.vote_average} type="watchlist" />
              ))}
            </div>
             ) : (
              <h2 className="no-movies">No movies in your list! Add some!</h2>
            )}
        </div>
      </div>
    </Link>
  )
}

export default WatchList;