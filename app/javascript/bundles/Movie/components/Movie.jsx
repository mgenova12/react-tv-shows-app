import PropTypes from 'prop-types';
import React from 'react';

export default class Movie extends React.Component {
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
  	let movies = this.state.Movies.map(movie => {
  		return <h3 key={movie.id}>{movie.title} </h3>
  	})

    return (
      <div>
  
        	{movies}


      </div>
    );
  }
}
