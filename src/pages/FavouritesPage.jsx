import { useFavourites } from "../context/FavouriteContext";
import AmiiboCard from "../components/AmiiboCard";

const FavouritesPage = () => {
  const { favourites } = useFavourites();

  return (
    <div>
      <h2>Favourites</h2>
      {favourites.length === 0 ? (
        <p>No favourites yet.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {favourites.map((amiibo) => (
            <AmiiboCard key={amiibo.head + amiibo.tail} amiibo={amiibo} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavouritesPage;
