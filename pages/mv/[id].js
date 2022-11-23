import { data } from "autoprefixer";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import Button from "../Button";

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
      <section className="text-white flex px-10 w-auto gap-16 bg-black h-auto  ">
        <div className="f">
          <Image
            className="w-full h-auto"
            alt={movie.title}
            width="280"
            height="200"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          />
        </div>
        <div className="flex flex-col gap-6 ">
          <h1 className=" text-6xl font-semibold ">{movie.original_title}</h1>
          <p>{movie.overview}</p>
          <h1 className=" text-xl ">
            Budget: <span className="font-semibold">${movie.budget}</span>
          </h1>
        </div>
      </section>
    </>
  );
}

export default Detail;
