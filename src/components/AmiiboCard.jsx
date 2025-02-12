import { useState } from 'react';
import { useFavourites } from "../context/FavouriteContext";

const AmiiboCard = ({ amiibo }) => {
  const { favourites, dispatch } = useFavourites();
  const isFavourite = favourites.some(fav => fav.head === amiibo.head && fav.tail === amiibo.tail);

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleFavouriteClick = (e) => {
    e.stopPropagation(); // Prevents click from affecting the parent div
    dispatch({ type: "TOGGLE_FAVOURITE", payload: amiibo });
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        margin: "8px",
        width: "200px",
        textAlign: "center",
      }}
      onClick={handleClick}
    >
      {isFlipped ? (
        <div>
          <p><strong>Series:</strong> {amiibo.amiiboSeries}</p>
          <p><strong>Release Date:</strong> {amiibo.release?.jp || 'N/A'}</p>
        </div>
      ) : (
        <div>
          <img src={amiibo.image} alt={amiibo.name} style={{ width: '100px' }} />
          <h3>{amiibo.name}</h3>
          <button
            onClick={handleFavouriteClick}
            style={{
              background: "none",
              border: "none",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
          >
            {isFavourite ? "❤️" : "♡"}
          </button>
        </div>
      )}
      
    </div>
  );
};

export default AmiiboCard;
