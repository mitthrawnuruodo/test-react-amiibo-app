import { createContext, useReducer, useContext } from "react";

const FavouriteContext = createContext();

const favouritesReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_FAVOURITE":
      return state.some(fav => fav.head === action.payload.head && fav.tail === action.payload.tail)
        ? state.filter(fav => fav.head !== action.payload.head || fav.tail !== action.payload.tail)
        : [...state, action.payload];
    default:
      return state;
  }
};

export const FavouriteProvider = ({ children }) => {
  const [favourites, dispatch] = useReducer(favouritesReducer, []);

  return (
    <FavouriteContext.Provider value={{ favourites, dispatch }}>
      {children}
    </FavouriteContext.Provider>
  );
};

export const useFavourites = () => useContext(FavouriteContext);
