import React, {useContext, useEffect, useState} from 'react';
import { GlobalContext } from '../../context/GlobalState';

import './movie-card.scss';

import { Link } from 'react-router-dom';

import Button, { FavButton } from '../button/Button';

import { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import AddFav from '../add-favourite/addFav';

const MovieCard = (props, movie) => {

    const [favourites, setFavourites] = useState([]);

    const [color, setColor] = useState('white')

    const { addMovieToWatchlist, watchlist } = useContext(GlobalContext);

    let storedMovies = watchlist.find(o => o.id === movie.id)

    const watchlistDisabled = storedMovies ? true : false;

    const item  = props.item;

    const links = '/'

    const link = '/' + category[props.category] + '/' + item.id;

    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

    useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (movieFavourites) {
			setFavourites(movieFavourites);
		}
	}, []);

    const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

    const style = {
        color: 'red'
    }

    const handleFavourite = () => {
        setColor('red')
    }

    return (
        <>
        <Link className='linker' to={link}>
            <div className="movie-card" style={{backgroundImage: `url(${bg})`}}>
                <Button>
                    <i className="bx bx-play"></i>
                </Button>
                <div className='overlay'>
                 <h3 className='title'>{item.title || item.name}</h3>
                </div>
            </div>
            <div className='halo'>
           <i className='bx bx-heart' onClick={addMovieToWatchlist}></i>
           <button className='button'>{item.vote_average}</button>
        </div>
        </Link>
        
        </>
    );
}

export default MovieCard;
