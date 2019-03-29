import React, { Component } from "react";
import "./Movie.css";

class Movie extends Component {
  render() {
    return (
      <div>
        <MoviePoster />
        <h1>hello this is a movie.</h1>;
      </div>
    );
  }
}

class MoviePoster extends Component {
  render() {
    return (
      <img
        src="http://image.cine21.com/resize/cine21/poster/2015/1124/18_18_34__56542b6a6febf[X230,330].jpg"
        alt="The Hunger Games"
      />
    );
  }
}

export default Movie;
