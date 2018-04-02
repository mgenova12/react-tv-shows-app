import PropTypes from 'prop-types';
import React from 'react';
import {MovieItem} from './MovieItem'

export class MovieList extends React.Component {

  render() {
    let movie;

    if(this.props.movies){
      movie = this.props.movies.map(movie => {
        return (
          <MovieItem key={movie.id} movie={movie}/>
        );
      })
    }

    return (
      <div className="row">
        {movie}
      </div>
    );
  }
}
