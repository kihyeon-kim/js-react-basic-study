import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css"

function Movie({id, year, title, summary, poster, genres}) {
  return (

    <Link to={{
      pathname: `/movie/${id}`,
      state: {
        year: year,
        title: title,
        summary: summary,
        poster: poster,
        genres: genres,
      }
    }}>
      <div className="movie">
        <img src={poster} alt={title} title={title}/>
        <div className="movie__data">
          <h3 className="movie__title">title: {title}</h3>
          <h3 className="movie__year">year: {year}</h3>
          <p className="movie__summary">summary: {summary}</p>
          <ul className="movie__genres">
            {genres.map((genre, index) =>
              <li key={index} className="movie__genre">{genre}</li>)
            }
          </ul>
        </div>
      </div>
    </Link>
  );
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;