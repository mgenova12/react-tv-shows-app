import PropTypes from 'prop-types';
import React from 'react';

export class NextButton extends React.Component {

  onNextClick(id){
    window.location.assign("/" + (id+1))
  }

  onPreviousClick(id){
    window.location.assign("/" + (id-1))
  }

  render() {
    let firstID 
    let lastID 
    let previousButton
    let nextbutton

    this.props.movies.map(movie => {
      if(movie.id > lastID || !lastID){
        lastID = movie.id
      }
      if(movie.id < firstID || !firstID){
        firstID = movie.id
      }
    })

    if(firstID === this.props.movieID){
      nextbutton = <button className="btn btn-primary" onClick={this.onNextClick.bind(this, this.props.movieID)}> Next Movie </button>
    } else if(lastID === this.props.movieID){
      previousButton = <button className="btn btn-primary" onClick={this.onPreviousClick.bind(this, this.props.movieID)}> Previous Movie </button> 
    } else {
      nextbutton = <button className="btn btn-primary" onClick={this.onNextClick.bind(this, this.props.movieID)}> Next Movie </button>
      previousButton = <button className="btn btn-primary" onClick={this.onPreviousClick.bind(this, this.props.movieID)}> Previous Movie </button> 
    }

    return (
      <div className="nextbutton" >
        {previousButton}
        {nextbutton}
      </div>
    );
  }
}
