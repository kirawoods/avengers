import React from "react";

export function AvengerMovies(props) {
  return (
    <ul>
      {props.avenger.movies.map(movie => (
        <li key={movie}>{movie}</li>
      ))}
    </ul>
  );
}
