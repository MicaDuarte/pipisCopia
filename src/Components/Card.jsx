import React, { useState, useEffect, useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context'; 
import { Link } from 'react-router-dom';

const Card = ({ name, username, id }) => {
  const [isFav, setIsFav] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false); 
  const { updateFavs } = useContext(ContextGlobal);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favs')) || [];
    const isFavorite = favs.some(fav => fav.id === id);
    setIsFav(isFavorite);
  }, [id]);

  const addFav = () => {
    const favs = JSON.parse(localStorage.getItem('favs')) || [];
    const newFav = { id, name, username };

    if (!favs.some(fav => fav.id === id)) {
      favs.push(newFav);
      localStorage.setItem('favs', JSON.stringify(favs));
      setIsFav(true);
      updateFavs(favs);
      setIsAnimating(true); 
      setTimeout(() => setIsAnimating(false), 300); 
    }
  };

  const removeFav = () => {
    let favs = JSON.parse(localStorage.getItem('favs')) || [];
    favs = favs.filter(fav => fav.id !== id);
    localStorage.setItem('favs', JSON.stringify(favs));
    setIsFav(false);
    updateFavs(favs);
    setIsAnimating(true); 
    setTimeout(() => setIsAnimating(false), 300); 
  };

  return (
    <div className='card'>
      <div className='favContainer'>
        <button 
          onClick={isFav ? removeFav : addFav} 
          className='favButton'
          aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
        >
          {isFav ? (
            <svg 
              className={`favIcon favorited ${isAnimating ? 'removed' : ''}`} 
              width="24" height="24" viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          ) : (
            <svg 
              className={`favIcon ${isAnimating ? 'removed' : ''}`} 
              width="24" height="24" viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          )}
        </button>
      </div>
      <Link to={`/dentist/${id}`}>
        <h3>{name}</h3>
        <p>@{username}</p>
      </Link>
    </div>
  );
};

export default Card;
