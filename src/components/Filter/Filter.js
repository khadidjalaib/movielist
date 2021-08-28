import React, { useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import MovieList from "../MovieList/MovieList";

const Filter = () => {
  const [film, setFilm] = useState("");

  return (
    <div>
      <input
        value={film}
        placeholder="recherche"
        onChange={(e) => {
          setFilm(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          setFilm(film);
          console.log(film);
        }}
      >
        {" "}
        entrer
      </button>
    </div>
  );
};

export default Filter;
