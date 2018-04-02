import PropTypes from 'prop-types';
import React from 'react';

export class NextButton extends React.Component {

  onNextClick(movieID, movies){
    let index = movies.findIndex(movie => movie.id === movieID)
    let id = movies[index+1].id
    window.location.assign("/" + id)
  }

  onPreviousClick(movieID, movies){
    let index = movies.findIndex(movie => movie.id === movieID)
    let id = movies[index-1].id
    window.location.assign("/" + id)
  }

  render() {

    return (
      <div className="nextbutton" >
        <button className="btn btn-primary" onClick={this.onPreviousClick.bind(this, this.props.movieID, this.props.movies)}> Previous Movie </button> 
        <button className="btn btn-primary" onClick={this.onNextClick.bind(this, this.props.movieID, this.props.movies)}> Next Movie </button>
      </div>
    );
  }
}

NextButton.propTypes = {
  movies: PropTypes.array,
  movieID: PropTypes.number
};