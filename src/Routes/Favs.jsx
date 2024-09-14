import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';

const Favs = () => {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem('favs')) || [];
    setFavs(storedFavs);
  }, []);

  if (favs.length === 0) {
    return <div className="nofav">
      <h2>Mis Favoritos</h2>
      <p >No hay favoritos aún</p>
    </div>;
  }

  return (
    <div className="favs-container">
      <h2>Mis Favoritos</h2>
      <div className="card-container">
        {favs.map(fav => (
          <Card 
            key={fav.id} 
            id={fav.id} 
            name={fav.name} 
            username={fav.username}
            isFav={true} 
            updateFavs={setFavs}
          />
        ))}
      </div>
    </div>
  );
};

export default Favs;
