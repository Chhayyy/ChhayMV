import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { data } from "autoprefixer";
import Image from "next/image";
import Button from "./Button";
const url =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0eb72e5a87c3896938cd899d9b93a334&page=${123}";

function Product() {
  const [titles, setTitiles] = useState([]);

  const getTitle = async () => {
    const respone = await fetch(url);
    const titles = await respone.json();
    setTitiles(titles.results);
    console.log(titles);
  };

  useEffect(() => {
    getTitle();
  }, []);

  return (
    <>
      <section className="px-10  ">
        <h1 className=" text-xl py-6">All</h1>
        <div className="grid grid-cols-5 gap-8">
          {titles.map((title) => {
            const { id, original_title, vote_average, poster_path } = title;
            return (
              <div className="flex flex-col gap-2 " key={id}>
                <Image
                  className="w-full h-auto"
                  alt={original_title}
                  width="280"
                  height="80"
                  src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                />
                <div className="flex justify-between">
                  <p>{original_title}</p>

                  <p>{vote_average}</p>
                </div>
                <Button />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Product;
