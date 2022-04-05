import React, {useState, useEffect} from 'react'
import MovieList from '../movie-list/MovieList';

function AddFavorite() {
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        const movieFav = JSON.parse(
            localStorage.setItem('favourite')
        );

        if (movieFav) {
            setFavourites(movieFav)
        }
    },[]);

    const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList)
    }

  return (
    <div>
        <MovieList 
         movies={movies}
         handleFavouritesClick={addFavouriteMovie}
         favouriteComponent={AddFavourites}
        
        
        />
    </div>
  )
}

export default AddFavorite