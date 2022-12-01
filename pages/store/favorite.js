import { createContext, useContext, useState } from "react";

const Favorite = createContext({
  favorite: [],
  totalFavorite: 0,
  addFavorite: (favoriteMovie) => {},
});

export function FavoriteProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavHandler = (favoriteMovie) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMovie);
    });
  };

  const removeFavHandler = (movieId) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((movie) => movie.id);
    });
  };

  const itemsIsFavHandler = (movieId) => {
    return userFavorites.some((movie) => movie.id === movieId);
  };

  const context = {
    favorite: userFavorites,
    totalFavorite: userFavorites.length,
    addFavorite: addFavHandler,
    removeFavorite: removeFavHandler,
    itemIsFavorite: itemsIsFavHandler,
  };
  return (
    <Favorite.Provider value={context}>{props.children}</Favorite.Provider>
  );
}

const useFavorite = () => useContext(Favorite);

export { useFavorite };

export default Favorite;
