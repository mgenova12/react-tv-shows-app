import PropTypes from 'prop-types';
import React from 'react';
import {MovieItem} from './MovieItem'

export class MovieList extends React.Component {

  onDeleteMovie(id){
    this.props.DeleteMovie(id)
  }

  render() {
    let movie;

    if(this.props.movies){
      movie = this.props.movies.map(movie => {
        return (
          <MovieItem DeleteMovie={this.onDeleteMovie.bind(this)} key={movie.id} movie={movie}/>
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
