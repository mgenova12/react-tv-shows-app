import PropTypes from 'prop-types';
import React from 'react';
import {Movie} from './Movie'

export default class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      Movies: []
    };
  }

   getMovies(){
    $.ajax({
      url: '/api/v1/movies',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({Movies: data}, function(){
        	console.log(data);
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  } 

  componentDidMount(){
    this.getMovies();
  }

  render() {
    let movie;

    if(this.state.Movies){
      movie = this.state.Movies.map(movie => {
        return (
          <Movie key={movie.id} movie={movie}/>
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
