import PropTypes from 'prop-types';
import React from 'react';
import {MovieList} from './MovieList'
import {Navbar} from './Navbar'
import {AddMovie} from './AddMovie'

export default class Movies extends React.Component {
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

  handleNewMovie(newMovie){
    let movie = this.state.Movies
    movie.push(newMovie)
    this.setState({Movies:movie})
  }


  render() {
    return (
  		<div> 
        <Navbar movies={this.state.Movies}/>
        <AddMovie AddNewMovie={this.handleNewMovie.bind(this)}/>
        <MovieList movies={this.state.Movies}/>
      </div>
    );
  }
}
