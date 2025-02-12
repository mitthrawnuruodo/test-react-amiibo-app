import { useFavourites } from "../context/FavouriteContext";

const AmiiboCard = ({ amiibo }) => {
  const { favourites, dispatch } = useFavourites();
  const isFavourite = favourites.some(fav => fav.head === amiibo.head && fav.tail === amiibo.tail);

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
    >
      <img src={amiibo.image} alt={amiibo.name} style={{ width: "100px" }} />
      <h3>{amiibo.name}</h3>
      <button
        onClick={() => dispatch({ type: "TOGGLE_FAVOURITE", payload: amiibo })}
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
  );
};

export default AmiiboCard;
