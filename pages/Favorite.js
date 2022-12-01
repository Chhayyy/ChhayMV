import React, { useState } from "react";
import Favorite from "./store/favorite";
import { FavoriteProvider, useFavorite } from "./store/favorite";
import Image from "next/image";
import Router from "next/router";
import { useForm } from "../Context/formikProvider";

function Card() {
  const { token } = useForm();
  const { favorite } = useFavorite();
  const [isFav, setIsFav] = useState(false);
  const handleCheckOut = () => {
    if (!token) {
      return Router.push("./SignUpForm");
    }
    setIsFav(true);
  };

  return (
    <>
      <h1 className="text-2xl m-4">Items Favorites</h1>
      <div>
        {favorite.map((fav) => {
          return (
            <div
              key={fav.id}
              className="flex bg-indigo-500 m-4 gap-16 text-white"
            >
              <div>
                <Image
                  className="w-full h-auto"
                  alt={fav.title}
                  width="280"
                  height="200"
                  src={`https://image.tmdb.org/t/p/original/${fav.poster_path}`}
                />
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="text-6xl">{fav.original_title}</h1>
                <p>Vote: {fav.vote_average}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button disabled={favorite.length === 0} onClick={handleCheckOut}>
        CheckOut
      </button>
    </>
  );
}

export default Card;
