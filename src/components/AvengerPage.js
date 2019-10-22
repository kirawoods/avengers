import React from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { avengers } from "../App";
import { AvengerInfo } from "./AvengerDetails";
import { AvengerMovies } from "./AvengerMovies";

export const AvengerPage = props => {
  const avenger = avengers.find(
    avenger => props.match.params.id === `${avenger.id}`
  );
  return (
    <div>
      <div className="character-card">
        <div className="character-info-wrapper">
          <h2 className="card-header">{avenger.name}</h2>
          <p>Nickname: {avenger.nickname}</p>
          <div>
            <Link to={`/avengers/${avenger.id}/info`}>Info</Link>
          </div>
          <Route
            path="/avengers/:id/info"
            render={() => <AvengerInfo avenger={avenger} />}
          />
          <div>
            <Link to={`/avengers/${avenger.id}/movies`}>Movies</Link>
          </div>
          <Route
            path="/avengers/:id/movies"
            render={() => <AvengerMovies avenger={avenger} />}
          />
        </div>
        <img className="character-image" src={avenger.img}></img>
      </div>
    </div>
  );
};
