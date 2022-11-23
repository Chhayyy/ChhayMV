import { data } from "autoprefixer";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Detail() {
  const router = useRouter();
  const [movie, setMovie] = useState([]);

  const getMv = async (id) => {
    if (!id) return;
    const resp = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=0eb72e5a87c3896938cd899d9b93a334`
    );
    const data = await resp.json();
    console.log(data);
    setMovie(data);
  };

  useEffect(() => {
    getMv(router.query.id);
  }, [router.query.id]);

  return (
    <>
      <h1>{movie.budget}</h1>
    </>
  );
}

export default Detail;
